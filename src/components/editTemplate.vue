<template>
  <div class="edit-wrap">
    <div class="edit-box">
      <h2 class="text-center edit-box-title">活动编辑</h2>
      <div class="text-center">
        <p class="text-center edit-box-title-underline"></p>
      </div>

        <el-form :label-position="labelPosition" :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div class="edit-content">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <h3 class="text-center edit-content-title">活动基本信息</h3>
                </div>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动名称" prop="name" :rules="{required: true, message: '请输入活动名称1', trigger: 'blur'}">
                  <el-input placeholder="请选择活动名称" v-model="ruleForm.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动时间" required>
                  <el-form-item prop="time">
                    <el-date-picker type="date" placeholder="请选择活动时间" v-model="ruleForm.time" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-form-item>
              </el-col>
              <el-form-item label="活动地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
              </el-form-item>
            </el-row>


            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <h3 class="text-center edit-content-title">活动议程</h3>
                </div>
              </el-col>
              <el-col :span="12" v-for="(x, index) in ruleForm.outlines" :key="x.id">
                <el-form-item :label="'议程' + Number(index+1)"
                              :key="x.key"
                              :prop="'outlines.' + index + '.title'"
                              :rules="{required: true, message: '不能为空', trigger: 'blur'}">
                  <el-input v-model="x.title"></el-input>
                  <div class="delete-btn-wrap">
                    <a v-if="index>1" @click.prevent="removeStep(x)">删除</a>
                  </div>
                </el-form-item>
                <el-form-item
                  :key="x.key"
                  :prop="'outlines.' + index + '.content'"
                  :rules="{required: true, message: '不能为空', trigger: 'blur'}">
                  <el-input type="textarea" v-model="x.content"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <a class="add-btn" @click="addStep">新增</a>
              </el-col>
            </el-row>


            <div class="activity-sign-wrap">
              <el-row>
                <el-col :span="24">
                  <div class="grid-content bg-purple-dark">
                    <h3 class="text-center edit-content-title">活动报名</h3>
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-input
                    placeholder="姓名"
                    v-model="demo.name"
                    :disabled="true">
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-select v-model="demo.jobPosition" disabled placeholder="职位">
                    <el-option
                      v-for="item in demo.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="12">
                  <el-input
                    placeholder="企业名称"
                    v-model="demo.enterpriseName"
                    :disabled="true">
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input
                    placeholder="电子邮箱"
                    v-model="demo.email"
                    :disabled="true">
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input
                    placeholder="联系电话"
                    v-model="demo.phoneNumber"
                    :disabled="true">
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input
                    placeholder="手机验证码"
                    v-model="demo.verificationCode"
                    :disabled="true">
                    <template slot="append">获取验证码</template>
                  </el-input>
                </el-col>
                <el-col :span="12" v-for="(x, index) in ruleForm.forms" :key="x.id">
                  <el-form-item
                    :key="x.key"
                    :prop="'forms.' + index + '.displayName'"
                    :rules="{required: true, message: '不能为空', trigger: 'blur'}">
                    <el-input v-model="x.displayName"></el-input>
                    <div class="delete-btn-wrap">
                      <a href="javascript:;" @click.prevent="removeCustom(x)">删除</a>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <a href="javascript:;" class="add-btn" @click="addCustom">新增</a>
                </el-col>
              </el-row>
            </div>

            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <h3 class="text-center edit-content-title">更多体验</h3>
                </div>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动名称" prop="productName" :rules="{required: true, message: '请输入活动名称', trigger: 'blur'}">
                  <el-input placeholder="请输入活动名称" v-model="ruleForm.productName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="产品URL" prop="productUrl" :rules="{required: true, message: '请输入产品URL', trigger: 'blur'}">
                  <el-input placeholder="请输入产品URL" v-model="ruleForm.productUrl"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

          </div>
          <el-form-item>
            <div class="text-center edit-content-bottom">
              <a class="submit-btn" type="primary" @click="submitForm('ruleForm',0)">保存</a>
              <a class="submit-btn" type="primary" @click="submitForm('ruleForm',1)">发布</a>
              <!--<a class="reset-btn" @click="resetForm('ruleForm')">重置</a>-->
            </div>
          </el-form-item>
        </el-form>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "edit-template",
      data() {
        return {
          labelPosition: 'top',
          ruleForm: {
            templateid: '',
            name: '',
            time: '',
            address: '',
            outlines:[{title:'',content:''},{title:'',content:''}],
            forms:[{displayName:''}],
            productName: '',
            productUrl: ''
          },
          demo: {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            jobPosition: '',
            enterpriseName: '',
            email: '',
            phoneNumber: '',
            verificationCode: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            time: [
              { type: 'date', required: true, message: '活动日期', trigger: 'change' }
            ],
          },
        };
      },
      methods: {
        submitForm(formName, type) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');


            } else {
              console.log(JSON.stringify(this.ruleForm));
              console.log('error submit!!');
              axios({
                method:'post',
                url:'/event/event/',
                data: this.ruleForm
              })
                .then(function(response) {
                  console.log(response)
                  if(response.data) {
                    if(response.data.code === '0000') { //已登陆状态

                    }else if (response.data.code === '0302'){

                    }else {

                    }
                  }
                });
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        removeStep(item) {
          var index = this.ruleForm.outlines.indexOf(item)
          if (index !== -1) {
            this.ruleForm.outlines.splice(index, 1)
          }
        },
        addStep() {
          this.ruleForm.outlines.push({
            title:'',
            content:''
          });
        },
        addCustom(){
          this.ruleForm.forms.push({
            displayName:''
          });
        },
        removeCustom(item) {
          var index = this.ruleForm.forms.indexOf(item)
          if (index !== -1) {
            this.ruleForm.forms.splice(index, 1)
          }
        },
      },
      created() {
        console.log(this.$route.query.templateid)
        this.ruleForm.templateid = this.$route.query.templateid
      },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @bg-gray: #e8eae9;
  @deloitte-text-green: #03b02a;
  .edit-wrap {
    width: 100%;
    background: @bg-gray;
    padding: 40px 0 56px 0;
    .edit-box {
      max-width: 1200px;
      margin: 0 auto;
      background: #ffffff;
      padding: 41px 43px;
      .edit-box-title {

      }
      .edit-box-title-underline {
        width: 122px;
        height: 1px;
        background-color: @deloitte-text-green;
        display: inline-block;
        margin: 0 auto;
      }
      .edit-content {
        border: solid 1px rgba(220, 224, 226, 1);
        padding: 30px 145px 39px;
        overflow: hidden;
        margin-top: 40px;
        .edit-content-title {
          color: @deloitte-text-green;
          font-size: 20px;
          margin-bottom: 30px;
          margin-top: 20px;
        }
      }
    }
  }
  .edit-content-bottom {
    margin-top: 40px;
  }
  .submit-btn {
    font-size: 16px;
    line-height: 16px;
    display: inline-block;
    cursor: pointer;
    padding: 18px 84px;
    color: @deloitte-text-green;
    background-color: transparent;
    border: 1px solid @deloitte-text-green;
    margin-right: 20px;
    &:hover {
      color: #ffffff;
      background-color: @deloitte-text-green;
    }
  }
  .reset-btn {
    font-size: 16px;
    line-height: 16px;
    display: inline-block;
    cursor: pointer;
    padding: 18px 84px;
    color: @deloitte-text-green;
    background-color: transparent;
    border: 1px solid @deloitte-text-green;
    &:hover {
      color: #ffffff;
      background-color: @deloitte-text-green;
    }
  }
  label {
    padding: 0;
    line-height: 20px;
  }
  .el-form--inline .el-form-item {
    width: 95%;
  }
  .is-disabled,.el-select {
    width: 95%;
  }
  .is-disabled input {
    margin-bottom: 30px;
  }
  .activity-sign-wrap .el-col {
    margin-bottom: 30px;
  }
  .delete-btn-wrap {
    width: 100%;
    position: relative;
  }
  .delete-btn-wrap>a {
    cursor: pointer;
    position: absolute;
    top: -40px;
    right: 0;
  }
  .el-input-group__append {
    background-color: @deloitte-text-green;
  }
  .add-btn {
    font-size: 16px;
    line-height: 16px;
    display: inline-block;
    cursor: pointer;
    padding: 8px 44px;
    color: @deloitte-text-green;
    background-color: transparent;
    border: 1px solid @deloitte-text-green;
    &:hover {
      color: #ffffff;
      background-color: @deloitte-text-green;
    }
  }
  .clear {
    clear:both;
  }
</style>
