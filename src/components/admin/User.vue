<template>
    <div class="user-m">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> {{ this.$route.meta.title }}</el-breadcrumb-item>
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
            <el-table :data="datalist" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="admin" label="权限" width="120" :formatter="formatter"></el-table-column>
                <el-table-column prop="createTime" label="创建日期" sortable width="150"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="acount" label="账号"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-tooltip placement="bottom">
                            <div slot="content">编辑</div>
                            <el-button type="text" icon="fa fa-pencil" @click="handleEdit(scope.$index, scope.row)"></el-button>
                        </el-tooltip>
                        <el-tooltip v-if="scope.row.disable" placement="bottom" content="禁用">
                            <el-button type="text" icon="fa fa-lock" @click="handleEdit(scope.$index, scope.row)"></el-button>
                        </el-tooltip>
                        <el-tooltip v-if="!scope.row.disable" placement="bottom" content="解锁">
                            <el-button type="text" icon="fa fa-unlock" @click="handleEdit(scope.$index, scope.row)"></el-button>
                        </el-tooltip>
                        <el-tooltip placement="bottom" content="删除">
                            <el-button type="text" class="red" icon="fa fa-trash-o" @click="handleDelete(scope.$index, scope.row)"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
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

        <el-dialog title="新增用户" :before-close="beforeClose" :visible.sync="addVisible" width="30%">
            <addUser />
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
import addUser from '@/components/admin/AddUser.vue'
    export default {
        name: 'basetable',
        components:{
            addUser
        },
        data() {
            return {
                url: '@public/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                addVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        mounted(){
            console.log(this.$route)
        },
        computed: {
            datalist() {
                return this.tableData.filter((d) => {
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if (d.name === this.del_list[i].name) {
                            is_del = true;
                            break;
                        }
                    }
                    if (!is_del) {
                        if (d.admin.indexOf(this.select_cate) > -1 &&
                            (d.name.indexOf(this.select_word) > -1 ||
                                d.acount.indexOf(this.select_word) > -1)
                        ) {
                            return d;
                        }
                    }
                    return d
                })
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            getData() {
                this.tableData = [{
                    admin:'1',
                    createTime:'2019-12-13',
                    name:'sundada',
                    acount:'sundada',
                    email:'sun0718@qq.com',
                    disable:true
                },{
                    admin:'2',
                    createTime:'2019-06-13',
                    name:'李zzz',
                    acount:'li23412',
                    email:'16@qq.com',
                    disable:false
                },{
                    admin:'1',
                    createTime:'2018-12-13',
                    name:'姚兵军',
                    acount:'yao1256959029',
                    email:'125@163.com',
                    disable:true
                }];
            },
            search() {
                this.is_search = true;
            },
            formatter(row, column) {
                return row.admin==1?'admin':'guest';
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            beforeClose(e){
                this.$confirm('确认关闭？')
                .then(_ => {
                    e();
                })
                .catch(_ => {});
            },

            handleAdd(){
                return this.addVisible = !this.addVisible
            },
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    name: item.name,
                    date: item.date,
                    address: item.address
                }
                this.editVisible = true;
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 保存编辑
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            }
        }
    }

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
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
    .mr10{
        margin-right: 10px;
    }
</style>
