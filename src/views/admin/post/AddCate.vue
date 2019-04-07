<template>
  <el-tree
    id="userMtree"
    ref="tree"
    :data="cateData"
    node-key="id"
    :render-content="renderContent"
    :highlight-current=true
    @node-click="nodeClick"
    :expand-on-click-node="false"
    :default-expanded-keys="expandedKey"
  ></el-tree>
</template>


<script>
import { encode } from "punycode";
import { fips } from 'crypto';
export default {
  name: "",
  data() {
    return {
        cateData: [],
        expandedKey: [], //展开节点
        checkedID: "" ,//选中节点,
        isUserMgt:'sun',
        editList:[],
        appendList:[],
        removeList:[],
        nowId:''
    };
  },
  props:["cateList","maxId"],
  mounted(){
      this.cateData = JSON.parse(JSON.stringify(this.cateList))
      this.nowId = this.maxId
  },
  methods: {
    //编辑
    nodeEdit(ev, store, data) {
      data.isEdit = true;
      this.$nextTick(() => {
        //得到input
        const $input =
          ev.target.parentNode.parentNode.querySelector("input") ||
          ev.target.parentElement.parentElement.querySelector("input");

        !$input ? "" : $input.focus(); //获取焦点
      });
    },
    //失焦事件
    edit_sure(ev, data) {
      const $input =
        ev.target.parentNode.parentNode.querySelector("input") ||
        ev.target.parentElement.parentElement.querySelector("input");
      if (!$input) {
        return false;
      } else if ($input.value == "") {
        this.$message({
          type: "info",
          message: "内容不能为空!"
        });
      } else {
        //赋值value
        //如果数据没有发生改变则不做动作
        if(data.label == $input.value){
            data.isEdit = false;
            return;
        }
        data.label = $input.value;
        data.isEdit = false;
        // 后台删除和新增
        if(data.id > this.maxId){
            this.choiceData(data,this.appendList)
        }else{
            this.choiceData(data,this.editList)
        }
      }
    },
    choiceData(data,arr){
        var  flag = false;//这里有个flag标记
        
        if(arr.length > 0){
            for(let item of arr){
                if (item.id == data.id){
                    flag = true;
                    item.label = data.label
                }
            }
        }
        if(!flag){
            if(data.children){
                delete data.children
            }
            arr.push(data)
        }

    },
    //react方法 插入代码
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span class="tree_node_label">{this.showOrEdit(data)}</span>
          <div class="tree_node_op">
            <i
              class="fa fa-pencil"
              on-click={ev => this.nodeEdit(ev, store, data)}
            />
            <i
              class="fa fa-minus-square-o"
              on-click={() => this.nodeDelete(node, data)}
            />
            {this.isUserMgt ? (
              <i
                class="fa fa-plus-square-o"
                on-click={(e) =>  this.append(data)}
              />
            ) : (
              ""
            )}
          </div>
        </span>
      );
    },
    showOrEdit(data) {
      if (data.isEdit) {
        return (
          <input
            type="text"
            class="node_labe"
            value={data.label}
            on-blur={ev => this.edit_sure(ev, data)}
          />
        );
      } else {
        return <span class="node_labe">{data.label}</span>;
      }
    },
    //新增节点
    append(data) {
      console.log(data)
      if(data.level >= 3){
          this.$message.error("最多只支持三级!")
          return false;
      }
      const newChild = {
        id: this.nowId + 1,
        label: "新增分类",
        isEdit: true,
        level: data.level + 1,
        parentID: data.id,
        children: [],
      };
      //判断是否有子节点
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
      this.nowId ++
      this.appendList.push(newChild) //添加到新增数据列表
      this.$emit('tagEdit',9)
      this.expandedKey = [data]; //展开点击节点
    },
    //移除节点
    nodeDelete(node, data) {
        let that = this;
        if(data.children && data.children.length !== 0){
            this.$message.error("此节点有子级，不可删除！")
            return false;
        }else{
            //新增节点可直接删除，已存在的节点要二次确认
            //删除操作函数
            let DelFun = () => {
                let _list = node.parent.data.children || node.parent.data;//节点同级数据
                let _index = _list.map((c) => c.id).indexOf(data.id);
                //const index = children.findIndex(d => d.id === data.id);
                _list.splice(_index, 1);

                // 判断删除的数据是否存在于添加和修改的数组中
                let appendLen = this.appendList.length
                let editLen = this.editList.length
                if(appendLen>0){
                    for(var i =0;i<this.appendList.length;i++){
                        if (this.appendList[i].id = _index.id){
                            this.appendList[i].splice(i,1)
                        }
                    }
                }
                if(editLen>0){
                    for(var i =0;i<this.editList.length;i++){
                        if (this.editList[i].id = _index.id){
                            this.editList[i].splice(i,1)
                        }
                    }
                }
                this.removeList.push(_index.id)

                this.$message.success("删除成功！")
            }
            //二次确认
            let ConfirmFun = () => {
                this.$confirm("是否删除此节点？","提示",{
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    DelFun()
                }).catch(() => {})
            }
            //判断是否是新增节点
            data.id > this.maxId ? DelFun() : ConfirmFun()
        }
    },
    //点击节点 移除默认选中节点
    nodeClick(data) {
      let userMtree = document.getElementById("userMtree");
      userMtree.firstElementChild.classList.remove("is-current");
      this.checkedID = data.id;
      this.$emit("emitClickNode", data);
    }
  }
};
</script>

<style lang="less">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.tree-edit input {
  display: none;
  height: 21px;
  line-height: 21px;
  width: 100px;
}

.tree_node_op{
    i{
        margin-right: .3rem;
    }
}
</style>

