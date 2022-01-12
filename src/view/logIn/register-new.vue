<template>
  <div id="root" class="main-layout ant-layout">
    <div class="page-content ant-layout-content">
      <section class="login-form-container">
        <h2 class="login-form-title">
          <img
            src="@/assets/home/data/data01/49dc9f0720eaec57162c44464b7cad6b.png"
            type="rollback"
            class="go-back"
            @click="cancel"
          />
        </h2>
        <div class="login-form">
          <div class="login-title">
            <img
              src="@/assets/home/data/data01/4ca6bff0fc6b53dfe9146f23b55d332b.png"
            />
            <span>企业注册</span>
            <img
              src="@/assets/home/data/data01/7e0344cf720548081c5c2c5c4997a657.png"
            />
          </div>
          <el-form class="class-form" ref="form" :model="personalFrom">
          <el-form-item label="企业名称：">
            <el-input v-model="personalFrom.name"></el-input>
          </el-form-item>
          <el-form-item label="法人姓名：">
            <el-input v-model="personalFrom.xingming"></el-input>
          </el-form-item>
           <el-form-item label="手机号：">
            <el-input v-model="personalFrom.phone"></el-input>
          </el-form-item>
          <el-form-item label="登录密码：">
            <el-input type="password" v-model="personalFrom.password"></el-input>
          </el-form-item>
          <el-form-item label="企业logo：">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              ref="upload4"
              :class="{ hide: hideUpload4 }"
              :on-change="onChange4"
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
                    @click="handlePictureCardPreview4(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled3"
                    class="el-upload-list__item-delete"
                    @click="handleRemove4(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible4">
              <img width="100%" :src="dialogImageUrl4" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="营业执照：">
            <el-upload
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
          </el-form-item>
          <el-form-item label="身份证正面：">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              ref="upload2"
              :class="{ hide: hideUpload2 }"
              :on-change="onChange2"
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
                    @click="handlePictureCardPreview2(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled3"
                    class="el-upload-list__item-delete"
                    @click="handleRemove2(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible2">
              <img width="100%" :src="dialogImageUrl2" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="身份证反面：">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              ref="upload3"
              :class="{ hide: hideUpload3 }"
              :on-change="onChange3"
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
                    @click="handlePictureCardPreview3(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled3"
                    class="el-upload-list__item-delete"
                    @click="handleRemove3(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible3">
              <img width="100%" :src="dialogImageUrl3" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item>
            <div class="btnA">
              <div class="personal-btn" @click="cancel">
                <span>取消</span>
              </div>
              <div class="personal-btn" @click="save">
                <span>注册</span>
              </div>
            </div>
          </el-form-item>
        </el-form>

          <div class="login-decorate"></div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";
export default {
  name: "login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
     editForm: {
        pics: [], // 上传的图片临时路径（对象）
      },
      personalFrom: {
        logo: "", // logo
        xingming: "", //法人名字
        name: "", // 企业名称
        password: '',
        zhizhao_image: "", //
        idcardz_image: "",
        idcardf_image: "",
      },
      compile: false,
      zhizhao_image: "", //
      idcardz_image: "",
      idcardf_image: "",
      token: {},
      productData: [{}, {}],
      dialogImageUrl1: "",
      dialogImageUrl2: "",
      dialogImageUrl3: "",
      dialogImageUrl4: "",
      files1: [],
      files2: [],
      files3: [],
      files4: [],
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      hideUpload1: false,
      hideUpload2: false,
      hideUpload3: false,
      hideUpload4: false,
      limitCount: 1,
    };
  },
  mounted() {
    this.token = this.$store.state.token;
  },
  methods: {
     onChange4(file, fileList) {
      this.files4.push(file);
      this.hideUpload4 = this.files4.length >= this.limitCount;
      this.files4 = file.raw;
      let formData = new FormData();
      formData.append("file", this.files4);
      this.upload(this.token, formData, "4");
    },
    onChange1(file, fileList) {
      this.files1.push(file);
      this.hideUpload1 = this.files1.length >= this.limitCount;
      this.files1 = file.raw;
      let formData = new FormData();
      formData.append("file", this.files1);
      this.upload(this.token, formData, "1");
    },
    onChange2(file, fileList) {
      this.files2.push(file);
      this.hideUpload2 = this.files2.length >= this.limitCount;
      this.files2 = file.raw;
      let formData = new FormData();
      formData.append("file", this.files2);
      this.upload(this.token, formData, "2");
    },
    onChange3(file, fileList) {
      this.files3.push(file);
      this.hideUpload3 = this.files3.length >= this.limitCount;
      this.files3 = file.raw;
      let formData = new FormData();
      formData.append("file", this.files3);
      this.upload(this.token, formData, "3");
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
        } else if (cont == 4) {
          this.personalFrom.logo = code.url;
        }
      });
    },
    handleRemove4(file, fileList) {
      this.$refs.upload4.clearFiles();
      this.files4 = [];
      this.personalFrom.zhizhao_image = "";
      this.hideUpload4 = this.files1.length >= this.limitCount;
    },
    handleRemove1(file, fileList) {
      this.$refs.upload1.clearFiles();
      this.files1 = [];
      this.personalFrom.zhizhao_image = "";
      this.hideUpload1 = this.files1.length >= this.limitCount;
    },
    handleRemove2(file, fileList) {
      this.$refs.upload2.clearFiles();
      this.files2 = [];
      this.personalFrom.idcardz_image = "";
      this.hideUpload2 = this.files2.length >= this.limitCount;
    },
    handleRemove3(file, fileList) {
      this.$refs.upload3.clearFiles();
      this.files3 = [];
      this.personalFrom.idcardf_image = "";
      this.hideUpload3 = this.files3.length >= this.limitCount;
    },
     handlePictureCardPreview4(file) {
      this.dialogImageUrl4 = file.url;
      this.dialogVisible4 = true;
    },
    handlePictureCardPreview1(file) {
      this.dialogImageUrl1 = file.url;
      this.dialogVisible1 = true;
    },
    handlePictureCardPreview2(file) {
      this.dialogImageUrl2 = file.url;
      this.dialogVisible2 = true;
    },
    handlePictureCardPreview3(file) {
      this.dialogImageUrl3 = file.url;
      this.dialogVisible3 = true;
    },
    save() {
      this.$axios({
        // 获取用户详情
        method: "POST",
        url: "/api/enterprise/register",
        data: this.personalFrom,
      }).then((res) => {
        let { data, code, msg } = res.data;
        if (code == 1) {
          this.$store.state.enterpriseIndex = 0;
          this.$store.state.myIndex = -1;
          this.$store.state.token = data;
          this.$store.state.logIndex = 1;
          this.$message({
              message: msg,
              type: 'success'
            });
            this.$router.push({ path: "/institution" });
        } else {
          this.$message({
              message: msg,
              type: 'error'
            });
        }
      });
    },
    cancel() {
      this.$router.push({path:'/login', query: {logIndex: 1}})
    }
  },
};
</script>
<style>
.hide .el-upload--picture-card {
  display: none !important;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 0px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
    border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 0, 0, 0.4);
}
</style>
<style lang="less">
// .applyContent {
//   .leftDetails {
    // .personal {
      .el-upload--picture-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 104px;
        // background: rgba(0, 0, 0, 0);
        // border: 1px solid #d9baba;
        // opacity: 1;
        border-radius: 4px;
      }
      .el-upload-list--picture-card {
        .el-upload-list__item {
          width: 100%;
          // height: 104px;
          // background: rgba(0, 0, 0, 0);
          // border: 1px solid #d9baba;
          // opacity: 1;
          // border-radius: 4px;
        }
      }
    // }
//   }
// }
.btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btnPass {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    background: #387bf0;
    border-radius: 4px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #ffffff;
  }
  .btnOn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #999999;
    margin-left: 16px;
  }
}
</style>
<style lang="less" scoped>
 .btnA {
        display: flex;
        // margin-left: 40px;
        justify-content: space-between;
         .personal-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 147px;
        height: 48px;
        background: #387bf0;
        border-radius: 4px;
        cursor: pointer;
        span {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 21px;
          color: #ffffff;
        }
      }
      }
.imgUpload {
  width: 268px;
  height: 104px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #d9baba;
  opacity: 1;
  border-radius: 4px;
}
.login-form-container {
  .class-form {
    height: 460px;
    overflow: auto;
  }
}
.applyContent {
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  .leftDetails {
    margin: 0 auto;
    width: 588px;
    background: #ffffff;
    padding: 0 0 20px 0;
    // box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
    opacity: 1;
    border-radius: 8px;
    .head-portrait {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
      span {
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 21px;
        color: #000;
      }
    }
    .personal {
      padding: 0 59px;
      .btnA {
        display: flex;
        margin-left: 40px;
        justify-content: space-between;
      }
      .personal-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 147px;
        height: 48px;
        background: #387bf0;
        border-radius: 4px;
        cursor: pointer;
        span {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 21px;
          color: #ffffff;
        }
      }
    }
  }
  .rightDetails {
    .rightMessage {
      width: 282px;
      height: 120px;
      padding: 24px 16px;
      background: #ffffff;
      border-radius: 8px;
      display: flex;
      margin-bottom: 24px;
      img {
        width: 72px;
        height: 72px;
        background: #ffffff;
        border: 1px solid #707070;
        border-radius: 50%;
        margin-right: 20px;
      }
      .monicker {
        display: flex;
        flex-direction: column;
        .span1 {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #333333;
        }
        .span2 {
          margin-top: 10px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #666666;
        }
      }
    }
    .product {
      background: #ffffff;
      border-radius: 8px;
      .span-product {
        display: block;
        width: 282px;
        height: 8px;
        background: #387bf0;
        opacity: 0.6;
        border-radius: 8px 8px 0px 0px;
      }
      .change {
        padding: 16px 28px 0 16px;
        display: flex;
        justify-content: space-between;
        .span-change1 {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          line-height: 27px;
          color: #333333;
          opacity: 1;
        }
        .span-change2 {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 20px;
          color: #999999;
          i {
            margin-left: 10px;
          }
        }
      }
      .ul-product {
        .li-product {
          padding: 24px 19px 24px 16px;
          border-bottom: 1px solid #eeeeee;
          .productName {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              font-size: 16px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              line-height: 27px;
              color: #333333;
            }
            img {
              width: 83px;
              height: 23px;
            }
          }
          .product-condition {
            margin: 16px 0;
          }
        }
        .li-product:last-of-type {
          border-bottom: none;
        }
      }
    }
  }
}
</style>