<template>
  <div id="organization" class="organizationContent">
    <div class="subject">
      <div class="log">
        <div class="logo">机构logo：</div>
        <img class="logImg" v-if="compile" :src="domainName+form.mechanism_image" alt="" />
        <el-upload
            v-if="!compile"
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              ref="upload1"
              :class="{ hide: hideUpload1 }"
              :on-change="onChange1"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview1(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled3"
                    class="el-upload-list__item-delete"
                    @click="handleRemove1(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible1">
              <img width="100%" :src="dialogImageUrl1" alt="" />
            </el-dialog>
      </div>
      <div class="message">
        <el-form ref="form" :model="form" label-width="110px">
          <el-form-item label="联系人姓名：">
            <span v-if="compile">{{form.phone_name}}</span>
            <el-input v-model="form.phone_name" v-if="!compile"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <span v-if="compile">{{form.phone}}</span>
            <el-input v-model="form.phone" v-if="!compile" disabled></el-input>
          </el-form-item>
          <el-form-item label="组织机构代码：" style="margin-bottom: 0px">
            <span v-if="compile">{{form.organization}}</span>
            <el-input v-model="form.organization" v-if="!compile"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div style="display: flex;">
      <div class="btn" v-if="compile" @click="redact">
      <span >编辑</span>
    </div>
    <div class="btn" v-if="!compile" style="margin-right: 20px;" @click="cancel">
      <span >取消</span>
    </div>
    <div class="btn" v-if="!compile" @click="save">
      <span>保存</span>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "organization",
  data() {
    return {
      compile: true,
      form: {
        phone_name: '路人甲',
        phone: '18179458078',
        organization: '110000000014545',
        mechanism_image:''
      },
      dialogImageUrl1: "",
      files1: [],
      dialogVisible1: false,
      disabled1: false,
      hideUpload1: false,
      limitCount: 1,
      formRed: {},
      token: {}
      
    };
  },
  mounted() {
    this.token = this.$store.state.token
    this.getuserinfo(this.token.token)
  },
  methods: {
    getuserinfo (val) {
          this.$axios({ // 机构端信息 获取用户详情
          url: "/api/mechanism/getuserinfo",
          headers:{"token":val}
        }).then((res) => {
          let {data, code} = res.data
          if (code == 1) {
            this.form = data
            // this.logoSrc = data.mechanism_image
          }
            
        });
      },
    redact () {
        this.compile = !this.compile
        this.formRed = this.deepCopy(this.form)
    },
    cancel () {
        this.compile = !this.compile
        this.form = this.formRed
    },
    save () {
      
       this.$axios({
        // 获取用户详情
        method: "POST",
        url: "/api/mechanism/changeuserinfo",
        headers: this.token,
        data: this.form,
      }).then((res) => {
        let { data, code, msg } = res.data;
         if (code == 1) {
          this.$message({
            message: msg,
            type: "success",
          });
          this.compile = !this.compile
          this.getuserinfo(this.token.token);
        } else {
          this.$message({
            message: msg,
            type: "error",
          });
        }
      });
    },
     onChange1(file, fileList) {
      this.files1.push(file);
      this.hideUpload1 = this.files1.length >= this.limitCount;
      this.files1 = file.raw;
      let formData = new FormData();
      formData.append("file", this.files1);
      this.upload(this.token, formData, "1");
    },
     upload(val, formData, cont) {
      this.$axios({
        // 获取用户详情
        method: "POST",
        url: "/api/enterprise/upload",
        headers: val,
        data: formData,
      }).then((res) => {
        let { data, code } = res.data;
        if (cont == 1) {
          this.personalFrom.zhizhao_image = code.url;
        } else if (cont == 2) {
          this.personalFrom.idcardz_image = code.url;
        } else if (cont == 3) {
          this.personalFrom.idcardf_image = code.url;
        }
      });
    },
      handleRemove1(file, fileList) {
      this.$refs.upload1.clearFiles();
      this.files1 = [];
      this.personalFrom.zhizhao_image = "";
      this.hideUpload1 = this.files1.length >= this.limitCount;
    },
    handlePictureCardPreview1(file) {
      this.dialogImageUrl1 = file.url;
      this.dialogVisible1 = true;
    },
  },
};
</script>
<style>
.hide .el-upload--picture-card {
  display: none;
}
</style>
<style lang="less">
.el-upload--picture-card {
  width: 367px;
  height: 172px;
  background: #ffffff;
  border: 1px solid #d9baba;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
// .el-upload--picture-card {
//     display: none;
// }
// /deep/ .hide .el-upload--picture-card {
// 		display: none;
// }
.el-upload-list--picture-card .el-upload-list__item {
  width: 367px;
  height: 172px;
  background: #ffffff;
  border: 1px solid #d9baba;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style lang="less" scoped>
.organizationContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 24px;
  width: 894px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
  opacity: 1;
  border-radius: 8px;
  padding: 59px 113px 0 40px;
  .subject {
    display: flex;
    margin-bottom: 84px;
    .log {
      .logo {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #666666;
        margin-bottom: 24px;
      }
      .logImg {
        width: 367px;
        height: 172px;
        background: #ffffff;
        border: 1px solid #d9baba;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .message {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 40px;
      padding-left: 40px;
      border-left: 1px solid #E4E4E4;
    }
  }
  .btn {
    cursor: pointer;
    width: 147px;
    height: 48px;
    background: #387BF0;
    opacity: 1;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 84px;
    span {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
}
</style>