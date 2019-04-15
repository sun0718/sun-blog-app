<template>
  <div class="user-m">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i>
          {{ this.$route.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box d-flex-row">
        <el-button type="primary" icon="delete" class="handle-del mr-1x" @click="delAll">批量删除</el-button>
        <el-select v-model="select_cate" placeholder="筛选标签" class="handle-select mr-1x">
          <el-option key="1" label="admin" value="管理员"></el-option>
          <el-option key="2" label="guest" value="来访者"></el-option>
        </el-select>
        <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr-1x"></el-input>
        <el-button type="primary" icon="fa fa-search" @click="search">搜索</el-button>
        <el-button type="success" class="ml-auto" icon="fa fa-plus" round @click="handleAdd">新建</el-button>
      </div>
      <el-table
        :data="datalist"
        border
        class="table"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column
          prop="permissionin"
          label="权限"
          width="120"
          align="center"
          :formatter="formatPer"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="创建日期"
          sortable
          width="150"
          align="center"
          :formatter="formatCreateTime"
        ></el-table-column>
        <el-table-column prop="userName" label="姓名" width="120" align="center"></el-table-column>
        <el-table-column prop="acountName" label="账号" align="center"></el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-tooltip placement="bottom">
              <div slot="content">编辑</div>
              <el-button
                type="text"
                icon="fa fa-pencil"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip v-if="!scope.row.lock" placement="bottom" content="禁用">
              <el-button type="text" icon="fa fa-unlock" @click="handleEdit(scope.$index, scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip v-if="scope.row.lock" placement="bottom" content="解锁">
              <el-button
                type="text"
                icon="fa fa-lock"
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip placement="bottom" content="删除">
              <el-button
                type="text"
                class="red"
                icon="fa fa-trash-o"
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="1000"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="form" label-width="50px">
        <el-form-item label="日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            value-format="yyyy-MM-dd"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="注册用户" :before-close="beforeClose" :visible.sync="addVisible" width="30%">
      <addUser @hideAdd="hideAdd"/>
    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import addUser from "@/views/admin/user/AddUser.vue";
export default {
  name: "basetable",
  components: {
    addUser
  },
  data() {
    return {
      userData: [],
      currentPage: 1,
      pagesize: 10,
      listCount: "",
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false,
      editVisible: false,
      delVisible: false,
      addVisible: false,
      form: {
        name: "",
        date: "",
        address: ""
      },
      idx: -1
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    datalist() {
      return this.userData.filter(d => {
        // let is_del = false;
        // for (let i = 0; i < this.del_list.length; i++) {
        //     if (d.name === this.del_list[i].name) {
        //         is_del = true;
        //         break;
        //     }
        // }
        // if (!is_del) {
        //     if (d.admin.indexOf(this.select_cate) > -1 &&
        //         (d.name.indexOf(this.select_word) > -1 ||
        //             d.acount.indexOf(this.select_word) > -1)
        //     ) {
        //         return d;
        //     }
        // }
        return d;
      });
    }
  },
  methods: {
    // 显示隐藏dialog
    hideAdd(val) {
        this.addVisible = !this.addVisible;
        if(val == 'change'){
            this.getData()
        }
    },
    // 分页导航
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },
    getData() {
      this.$get("/userlist", {
        currentPage: this.currentPage,
        pagesize: this.pagesize
      }).then(res => {
        console.log(res.result.list);
        this.listCount = res.result.count;
        this.userData = res.result.list;
      });
    },
    search() {
      this.is_search = true;
    },
    formatPer(row, column) {
      return row.permissionin == "cg"
        ? "superAdmin"
        : row.permissionin == "gl"
        ? "Admin"
        : "guest";
    },
    formatCreateTime(row) {
      var now = new Date(Number(row.createTime)),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return (
        y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " "
      );
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    beforeClose(e) {
      this.$confirm("确认关闭？")
        .then(_ => {
          e();
        })
        .catch(_ => {});
    },

    handleAdd() {
      return (this.addVisible = !this.addVisible);
    },
    handleEdit(index, row) {
      const lock = row.lock;
      const id = row._id;
      var params = {
        lock: lock,
        id: id
      };
      this.$put('/lockUser',params).then((res)=>{
          console.log(res)
          this.getData()
      })
    },
    handleDelete(index, row) {
      this.idx = row._id;
      this.delVisible = true;
    },
    delAll() {
      const length = this.multipleSelection.length;
      let str = "";
      this.del_list = this.del_list.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error("删除了" + str);
      this.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 保存编辑
    saveEdit() {
      this.$set(this.tableData, this.idx, this.form);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    // 确定删除
    deleteRow() {
        this.$delete("/deleteUser", {
            id: this.idx
        }).then(res=>{
            this.delVisible = false;
            this.$message.success("删除成功");
            this.getData()
        }).catch((err)=>{
            this.$message.success("删除失败");
        })
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
</style>

<style lang="less">
.user-m .el-dialog__body {
  padding: 0px !important;
}
</style>

