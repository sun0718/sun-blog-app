<template>
    <div class="post-article" ref="fo">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>新建文章</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-form ref="form" class="showInfo" :model="form" label-width="80px">
                <el-row style="width:60%">
                    <el-col>
                        <el-form-item label="文章标题">
                            <el-input v-model="form.title"></el-input>
                        </el-form-item>
                        <el-form-item label="文章摘要">
                            <el-input type="textarea" v-model="form.summary"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-upload
                            class="upload-demo"
                            action="/apis/uploadImage"
                            :on-preview="handlePreview"
                            :on-change="handleChange"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传封面</el-button>
                            <span slot="tip" class="el-upload__tip ml-1x">只能上传jpg/png/gif文件，且不超过500kb</span>
                        </el-upload>
                    </el-col>
                </el-row>
            </el-form>
            <el-switch
                v-model="form.switchValue"
                active-color="#ff4949"
                inactive-color="#13ce66"
                active-text="markdown"
                inactive-text="富文本"
                class="d-inline-block mb-1x">
            </el-switch>
            <quill-editor v-if="!form.switchValue" ref="myTextEditor" v-model="form.quillCon" @change="onEditorChange($event)" :options="editorOption" ></quill-editor>
            <mavon-editor v-else ref="md" v-model="form.mavonCon" :ishljs = "true" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
            <div class="text-right">
                <el-button class="editor-btn mt-1x" type="primary" @click="submit">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    import { ImageDrop } from 'quill-image-drop-module'
    import ImageResize from 'quill-image-resize-module'
    Quill.register('modules/imageDrop', ImageDrop)
    Quill.register('modules/imageResize', ImageResize)

    export default {
        name: 'editor',
        data: function(){
            return {
                switchValue:false,
                editorOption: {
                    placeholder: '输入任何内容，支持html',
                    imageDrop: true,
                    imageResize: {
                        displayStyles: {
                            backgroundColor: 'black',
                            border: 'none',
                            color: 'white'
                        },
                        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
                    }
                },
                form:{
                    title:'',
                    con:'',
                    autor:'',
                    createTime:'',
                    quillCon: '',  // 富文本
                    mavonhtml: '',  // markdown
                    mavonCon: '',
                    preface:'',
                    imageShow: ''
                },
                // markdown初始
                configs: {
                },
                fileList: [],
                formData:''
            }
        },
        components: {
            quillEditor,mavonEditor
        },
        methods: {
            onEditorChange(e){
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
            $imgAdd(pos, $file){
                var formData = new FormData();
                formData.append('file', $file);
                console.log('file', formData.get('file'));
                this.formData = formData
                this.$post('/uploadImage',formData,{
                    headers:{'Content-Type': 'multipart/form-data'}
                }).then((res) => {
                    this.$refs.md.$img2Url(pos, res.result.path);
                })
            },
            change(value, render){
                // render 为 markdown 解析后的结果
                this.form.mavonhtml = render;
            },
            // 文章主图片上传-----------------------------------------------------------
            // 文件列表移除文件时的钩子
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            // 点击文件列表中已上传的文件时的钩子
            handlePreview(file) {
                console.log('点击：',file);
            },
            // 上传图片
            handleChange(file, fileList) {
                this.fileList = fileList.slice(-1);
                this.form.imageShow = file.url;
            },
            submit(){
                let params = {
                    title: this.form.title,
                    author: 'sun',
                    like: 0,
                    discuss: [],
                    categorie : 'NODEJS',
                    tags:[],
                    imageShow: '',
                    oldEditTimeAndEvent:[],
                    mavonCon:this.mavonCon,
                    goTop:false
                }
                if(this.switchValue){
                    params.con = this.form.mavonhtml
                }else{
                    params.con = this.form.quillCon
                }
                this.$post('/postArticle',params).then((res)=>{
                    console.log(res)
                    this.$message.success('提交成功！');
                    this.$router.push('/admin/post')
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .post-article{
        .editor-btn{
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
    .auto-textarea-input{
        background-color:#fff!important;
    }

    .showInfo{
        margin-bottom:2rem;
        .el-upload-list--picture{
            overflow: hidden;
            .el-upload-list__item{
                cursor: pointer;
                width: 200px;
                height: 200px;
                padding: 10px;
                transition: none;
                &:hover a{
                    color:red;
                }
                img{
                    margin-left: 0px;
                    width:100%;
                    height: 80%;
                    z-index: -1;
                }
                a{
                    line-height: 1.5rem;
                    padding-top: 10%;
                }
            }
        }
    }
}

/*VueEditor*/

.ql-container {
    min-height: 400px;
}

.ql-snow .ql-tooltip {
    transform: translateX(117.5px) translateY(10px) !important;
}

.editor-btn {
    margin-top: 20px;
}

/*markdown*/

.v-note-wrapper .v-note-panel {
    min-height: 500px;
}
</style>
