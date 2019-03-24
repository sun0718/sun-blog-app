<template>
    <div>
        <div class="container">
            <div class="form-box w-100">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="账号">
                        <el-input type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input type="email"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="等级">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="supperAdmin" label="超级管理员" value="cgl"></el-option>
                            <el-option key="admin" label="管理员" value="gl"></el-option>
                            <el-option key="guest" label="来访者" value="fk"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="启用">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="朋友" name="type"></el-checkbox>
                            <el-checkbox label="同学" name="type"></el-checkbox>
                            <el-checkbox label="同事" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="签名">
                        <el-input type="textarea" rows="3" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function(){
            return {
                options:[
                    {
                        value: 'guangdong',
                        label: '广东省',
                        children: [
                            {
                                value: 'guangzhou',
                                label: '广州市',
                                children: [
                                    {
                                        value: 'tianhe',
                                        label: '天河区'
                                    },
                                    {
                                        value: 'haizhu',
                                        label: '海珠区'
                                    }
                                ]
                            },
                            {
                                value: 'dongguan',
                                label: '东莞市',
                                children: [
                                    {
                                        value: 'changan',
                                        label: '长安镇'
                                    },
                                    {
                                        value: 'humen',
                                        label: '虎门镇'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'hunan',
                        label: '湖南省',
                        children: [
                            {
                                value: 'changsha',
                                label: '长沙市',
                                children: [
                                    {
                                        value: 'yuelu',
                                        label: '岳麓区'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>
</template>


<style>

</style>
