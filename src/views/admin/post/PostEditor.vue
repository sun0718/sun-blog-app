<template>
  <div class="post-article" ref="fo">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 文章管理
        </el-breadcrumb-item>
        <el-breadcrumb-item>新建文章</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-form ref="form" class="showInfo" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章分类">
          <el-cascader placeholder="请输入" :options="cateList" v-model="form.categorie" filterable></el-cascader>
          <a style="cursor:pointer" @click="addCate">
            <i class="fa fa-plus ml-1x" style></i>
            添加分类
          </a>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-autocomplete
            v-model="searchTag"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
          <el-input
            class="input-new-tag"
            v-if="newTagVisible"
            v-model="newTagValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          <p>
              <el-tag
                v-for="tag in tagsName"
                :key="tag"
                class="tags"
                closable
                @close = "tagsClose"
                type="">
                {{tag}}
              </el-tag>
          </p>
        </el-form-item>
        <el-form-item label="文章摘要">
          <el-input type="textarea" v-model="form.preface"></el-input>
        </el-form-item>
        <el-upload
          class="upload-demo"
          action="/api/uploadImage"
          :on-preview="handlePreview"
          :on-change="handleChange"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传封面</el-button>
          <span slot="tip" class="el-upload__tip ml-1x">只能上传jpg/png/gif文件，且不超过500kb</span>
        </el-upload>
      </el-form>
      <el-switch
        v-model="form.switchValue"
        active-color="#ff4949"
        inactive-color="#13ce66"
        active-text="markdown"
        inactive-text="富文本"
        class="d-inline-block mb-1x">
      </el-switch>
      <quill-editor
        v-if="!form.switchValue"
        ref="myTextEditor"
        v-model="quillCon"
        @change="onEditorChange($event)"
        :options="editorOption"
      ></quill-editor>
      <mavon-editor
        v-else
        ref="md"
        v-model="mavonCon"
        :ishljs="true"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 600px"
      />
      <div class="text-right">
        <el-button class="editor-btn mt-1x" type="primary" @click="submit">提交</el-button>
      </div>
    </div>
    <!-- 添加分类 -->
    <el-dialog title="编辑分类" :visible.sync="addCateShow" width="30%" :before-close="handleClose">
      <AddCate :cateList="cateList" :maxId = "maxId" ref="addCate"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCateShow = false">取 消</el-button>
        <el-button type="primary" @click="editCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

import AddCate from "@/views/admin/post/AddCate.vue";

import config from "@/config/index";
import { setTimeout } from 'timers';
export default {
  name: "editor",
  data: function() {
    return {
      addCateShow: false,
      switchValue: false,
      editorOption: {
        placeholder: "输入任何内容，支持html",
        imageDrop: true,
        imageResize: {
          displayStyles: {
            backgroundColor: "black",
            border: "none",
            color: "white"
          },
          modules: ["Resize", "DisplaySize", "Toolbar"]
        }
      },
      form: {
        title: "",
        con: "",
        autor: sessionStorage.getItem("acountName"),
        categorie: [],
        mavonCon: "",
        preface: "",
        imageShow: "",
        tagsId:[],
      },
      quillCon: "", // 富文本
      mavonhtml: "", // markdown
      // markdown初始配置
      configs: {},
      // 封面图片
      fileList: [],
      addCateShow: false,
      cateList: [],
      maxId:0,
      tagsName:[],
      searchTag:'',
      newTagVisible:false,
      newTagValue:''
    };
  },
  components: {
    quillEditor,
    mavonEditor,
    AddCate
  },
  mounted() {
    this.getCates();
    this.getTags();
  },
  methods: {
    onEditorChange(e) {
      // this.$refs.myTextEditor.quill
      // @blur="onEditorBlur($event)"
      // @focus="onEditorFocus($event)"
      // @ready="onEditorReady($event)"
    },
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    // markdown将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      var formData = new FormData();
      formData.append("file", $file);
      this.$post("/uploadImage", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res => {
        this.$refs.md.$img2Url(pos, res.result.path);
      });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.mavonhtml = render;
    },
    // 文章主图片上传-----------------------------------------------------------
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePreview(file) {
      console.log("点击：", file);
    },
    // 上传图片
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-1);
      if (file.status == "success") {
        this.form.imageShow = file.response.result.path;
      }
    },

    // cate---------
    addCate() {
      this.addCateShow = true;
    },
    editCate() {
      let cates = {
        append: this.$refs.addCate.appendList,
        edit: this.$refs.addCate.editList,
        remove: this.$refs.addCate.removeList
      };
      this.$post("/editCates", cates).then(res => {
        this.addCateShow = false;
        this.getCates()
      });
    },
    getCates() {
      this.$get("/getCates").then(res => {
        this.getListData(res.result.data);
        this.maxId = res.result.maxId
      });
    },
    getListData(list) {
      let dataArray = [];
      list.forEach(function(d) {
        let parentID = d.parentID;
        if (parentID == 0) {
          let objTemp = {
            id: d.id,
            isEdit: d.isEdit,
            level: d.level,
            parentID: parentID,
            value: d.label,
            label: d.label,
            createTime: d.createTime
          };
          dataArray.push(objTemp);
        }
      });
      this.data2treeDG(list, dataArray);
    },
    data2treeDG(datas, dataArray) {
      for (let j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let Id = dataArrayIndex.id;
        for (let i = 0; i < datas.length; i++) {
          let data = datas[i];
          let parentID = data.parentID;
          if (parentID == Id) {
            //判断是否为儿子节点
            let objTemp = {
                id: data.id,
                isEdit: data.isEdit,
                level: data.level,
                value: data.label,
                label: data.label,
                parentID: parentID,
                createTime: data.createTime
            };
            childrenArray.push(objTemp);
          }
        }
        if (childrenArray.length > 0) {
          dataArrayIndex.children = childrenArray;
          //有儿子节点则递归
          this.data2treeDG(datas, childrenArray);
        }
      }
      this.cateList = dataArray;
      return dataArray;
    },

    // 获得tags ---------------
    getTags(){
      this.$get('/tagList').then((res)=>{
        this.restaurants = res.result
      })
    },
    querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants.map((d)=>{
            d['value'] = d.name
            return d
        });
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
        cb(results);
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
        if(this.tagsName.indexOf(item.name) == 0){
          return;
        }
        this.tagsName.push(item.name)
        this.form.tagsId.push(item.id)
    },
    // 删除已选标签
    tagsClose(tag) {
        this.tagsName.splice(this.tagsName.indexOf(tag), 1);
        this.form.tagsId.splice(this.form.tagsId.indexOf(tag), 1);
      },
    showInput() {
      this.newTagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let newTagValue = this.newTagValue;
      if (newTagValue && this.tagsName.indexOf(newTagValue)<0) {
        this.$post('/addTag',{
           name: newTagValue,
           id: new Date().getTime()
        }).then((res)=>{
           this.tagsName.push(newTagValue);
           this.getTags()
        })
      }
      this.newTagVisible = false;
      this.newTagValue = '';
    },

    handleClose(done) {
      this.$confirm("确认关闭？如未保存，数据将丢失！")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submit() {
      this.form.con = this.switchValue ? this.mavonhtml : this.quillCon;
      let params = {
        aId:sessionStorage.getItem('Autor'),
        ...this.form
      };
      this.$post("/postArticle", params).then(res => {
        this.$message.success("提交成功！");
        this.$router.push("/admin/post");
      });
    }
  }
};
</script>
<style lang="less" scoped>
.post-article {
  .editor-btn {
    margin-top: 20px;
  }
}
</style>
<style lang="less">
.post-article {
  .shadow {
    border: 1px solid #ccc !important;
    box-shadow: none !important;
    margin-top: -1px !important;
  }
  .auto-textarea-input {
    background-color: #fff !important;
  }

  .showInfo {
    margin-bottom: 2rem;
    .el-upload-list--picture {
      overflow: hidden;
      .el-upload-list__item {
        cursor: pointer;
        width: 200px;
        height: 200px;
        padding: 10px;
        transition: none;
        &:hover a {
          color: red;
        }
        img {
          margin-left: 0px;
          width: 100%;
          height: 80%;
          z-index: -1;
        }
        a {
          line-height: 1.5rem;
          padding-top: 10%;
        }
      }
    }
  }

  .el-form-item__content{
    line-height: 1;
  }

  .el-tag{
    margin-top: .5rem;
    margin-right: .75rem;
    cursor: pointer;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}

/*VueEditor*/

.ql-container {
  min-height: 400px;
}

.ql-snow .ql-tooltip {
  transform: translateX(117.5px) translateY(10px) !important;
}

.ql-syntax{
    background-color: #f9f9f9;
    border: 0px;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 15px;
    color: #444;
    overflow: auto;
    border-radius: 0px;
}

.editor-btn {
  margin-top: 20px;
}

/*markdown*/

.v-note-wrapper .v-note-panel {
  min-height: 500px;
}
</style>
