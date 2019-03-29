<template>
  <div>
    <div class="container">
      <div class="form-box w-100">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="管理账号">
            <el-input type="text" v-model="form.acountName"></el-input>
          </el-form-item>
          <el-form-item label="账号密码">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
           <el-form-item label="密码重复">
            <el-input type="password" v-model="form.rePassword"></el-input>
          </el-form-item>
          <el-form-item label="用户姓名">
            <el-input type="text" v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="绑定邮箱">
            <el-input type="email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="用户权限">
            <el-select v-model="form.permissionin" placeholder="请选择">
              <el-option key="supperAdmin" label="超级管理员" value="cg"></el-option>
              <el-option key="admin" label="管理员" value="gl"></el-option>
              <el-option key="guest" label="来访者" value="fk"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="启用账号">
            <el-switch v-model="form.lock"></el-switch>
          </el-form-item>
          <el-form-item label="用户性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input type="textarea" rows="3" v-model="form.signature"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">表单提交</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'adduser',
        data: function(){
            return {
                form: {
                    acountName: '',
                    password: '',
                    rePassword: '',
                    userName:'',
                    email:'',
                    permissionin:'',
                    lock:false,
                    sex:'',
                    signature:''
                }
            }
        },
        methods: {
            onSubmit() {
                delete this.form.rePassword
                console.log(this.hideAdd)
                this.$post('/register',this.form).then((res)=>{
                    this.$message.success('提交成功！');
                    this.$emit('hideAdd','change')
                }).catch((err)=>{
                    this.$message.success('提交失败！');
                })
            },
            onCancel() {
                this.form = {
                    acountName: '',
                    password: '',
                    rePassword: '',
                    userName:'',
                    email:'',
                    permissionin:'',
                    lock:false,
                    sex:'',
                    signature:''
                }
                this.$emit('hideAdd')
            }
        }
    }
</script>


<style>
</style>
