<template>
    <div class="post-article">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>新建文章</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-switch
                v-model="switchValue"
                active-color="#ff4949"
                inactive-color="#13ce66"
                active-text="markdown"
                inactive-text="富文本"
                class="d-inline-block mb-1x">
            </el-switch>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="文章标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
            </el-form>
                
            <quill-editor v-if="!switchValue" ref="myTextEditor" v-model="form.quillCon" @change="onEditorChange($event)" :options="editorOption" ></quill-editor>
            <mavon-editor v-else ref="md" v-model="mavonCon" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
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
                    mavonhtml: ''  // markdown
                },
                // markdown初始
                mavonCon: '',
                configs: {
                }
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
                var formdata = new FormData();
                formdata.append('file', $file);
                // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
                this.$axios({
                    url: '/common/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((url) => {
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            change(value, render){
                // render 为 markdown 解析后的结果
                this.form.mavonhtml = render;
            },
            submit(){
                console.log(this.quillCon);
                console.log(this.mavonhtml);
                if(switchValue){
                    this.params.con = this.form.mavonhtml
                }else{
                    this.params.con = this.form.quillCon
                }
                this.$message.success('提交成功！');
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
