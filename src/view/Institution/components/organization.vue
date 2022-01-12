<template>
  <div id="apply" class="applyContent">
    <div class="leftDetails">
      <div class="head-portrait">
        <img
          class="imgLogo"
          :src="domainName + personalFrom.logo"
          alt=""
          v-if="modification"
        />
        <el-upload
          class="imgLogo"
          v-if="!modification"
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
                @click="handlePictureCardPreview1(file)"
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
        <div class="img-btn" @click="compile1(1)" v-if="modification">
          <span>修改头像</span>
        </div>
        <div class="img-btn" @click="save" v-if="!modification">
          <span>保存</span>
        </div>
      </div>
      <div class="personal">
        <el-form ref="form" :model="personalFrom" label-width="100px">
          <el-form-item label="企业名称：">
            <span v-if="!compile">{{ personalFrom.xingming }}</span>
            <el-input v-if="compile" v-model="personalFrom.xingming"></el-input>
          </el-form-item>
          <el-form-item label="法人姓名：">
            <span v-if="!compile">{{ personalFrom.name }}</span>
            <el-input v-if="compile" v-model="personalFrom.name"></el-input>
          </el-form-item>
          <el-form-item label="营业执照：">
            <img
              :src="domainName + zhizhao_image"
              alt=""
              v-if="!compile"
              class="imgUpload"
            />
            <el-upload
              v-if="compile"
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
            <img
              :src="domainName + idcardz_image"
              alt=""
              v-if="!compile"
              class="imgUpload"
            />
            <el-upload
              v-if="compile"
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
            <img
              :src="domainName + idcardf_image"
              alt=""
              v-if="!compile"
              class="imgUpload"
            />
            <el-upload
              v-if="compile"
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
              <div class="personal-btn" @click="compile1(2)" v-if="!compile">
                <span>编辑</span>
              </div>
              <div class="personal-btn" @click="cancel" v-if="compile">
                <span>取消</span>
              </div>
              <div class="personal-btn" @click="save" v-if="compile">
                <span>保存</span>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- <div class="rightDetails">
      <div class="rightMessage">
        <img src="" alt="" />
        <div class="monicker">
          <span class="span1">企业融资服务平台</span>
          <span class="span2">微信扫码即可使用小程序申请融资</span>
        </div>
      </div>
      <div class="product">
        <span class="span-product"></span>
        <div class="change">
          <span class="span-change1">为你推荐</span>
          <span class="span-change2"
            >换一换<i class="el-icon-refresh"></i
          ></span>
        </div>
        <ul class="ul-product">
          <li
            class="li-product"
            v-for="(item, index) in productData"
            :key="index"
          >
            <div class="productName">
              <span>融易贷（抵押）</span> <img src="" alt="" />
            </div>
            <div class="product-condition">参考利率 3.85% ~ 4.05%</div>
            <div class="product-condition">贷款额度 1.00~300.00万元</div>
            <div class="product-condition">担保方式 信用</div>
            <div class="product-condition">贷款期限 6个月及以下</div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "apply",
  data() {
    return {
      modification: true,
      editForm: {
        pics: [], // 上传的图片临时路径（对象）
      },
      personalFrom: {
        logo: "", // logo
        xingming: "", //企业名称
        name: "", // 法人名字
        zhizhao_image: "", //
        idcardz_image: "",
        idcardf_image: "",
      },
      personalRed: {},
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
    this.getuserinfo(this.token);
  },
  methods: {
    getuserinfo(val) {
      this.$axios({
        url: "/api/enterprise/getuserinfo",
        headers: val,
      }).then((res) => {
        let { data, code } = res.data;
        this.personalFrom = data;
        this.zhizhao_image = data.zhizhao_image;
        this.idcardz_image = data.idcardz_image;
        this.idcardf_image = data.idcardf_image;
      });
    },
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
    save(val) {
      this.$axios({
        method: "POST",
        url: "/api/enterprise/changeuserinfo",
        headers: this.token,
        data: this.personalFrom,
      }).then((res) => {
        let { data, code, msg } = res.data;
        if (code == 1) {
          this.$message({
            message: msg,
            type: "success",
          });
          this.getuserinfo(this.token);
          this.$store.state.callBack = 0
          this.modification = true;
          this.compile = false;
        } else {
          this.$message({
            message: msg,
            type: "error",
          });
        }
      });
    },
    compile1(val) {
      if (val == 1) {
        this.modification = false;
      } else if (val == 2) {
        this.personalRed = this.deepCopy(this.personalFrom);
        this.compile = true;
      }
    },
    cancel() {
      this.personalFrom = this.personalRed;
      this.compile = false;
    },
  },
};
</script>
<style>
.hide .el-upload--picture-card {
  display: none !important;
}
</style>
<style lang="less">
.applyContent {
  .leftDetails {
    .personal {
      .el-upload--picture-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 268px;
        height: 104px;
        background: rgba(0, 0, 0, 0);
        border: 1px solid #d9baba;
        opacity: 1;
        border-radius: 4px;
      }
      .el-upload-list--picture-card {
        .el-upload-list__item {
          width: 268px;
          height: 104px;
          background: rgba(0, 0, 0, 0);
          border: 1px solid #d9baba;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
}
.btn {
  display: flex;
  justify-content: center;
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
.imgUpload {
  width: 268px;
  height: 104px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #d9baba;
  opacity: 1;
  border-radius: 4px;
}
.applyContent {
  margin-left: 24px;
  width: 894px;
  display: flex;
  justify-content: space-between;
  .leftDetails {
    width: 588px;
    background: #ffffff;
    padding: 0 0 20px 0;
    box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
    opacity: 1;
    border-radius: 8px;
    .head-portrait {
      display: flex;
      flex-direction: column;
      align-items: center;
      .imgLogo {
        width: 144px;
        height: 144px;
        background: rgba(0, 0, 0, 0);
        border-radius: 50%;
        margin: 57px 0 33px 0;
      }
      .img-btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        height: 50px;
        background: #ffffff;
        border: 1px solid #707070;
        border-radius: 8px;
        margin-bottom: 49px;
        span {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 21px;
          color: #666666;
        }
      }
    }
    .personal {
      padding: 0 59px;
      .btnA {
        display: flex;
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