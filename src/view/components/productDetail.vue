<template>
<div id="productDetail">
<div class="page-content ant-layout-content">
    <div class="product-detail-wrapper">
        <div class="product-detail-banner"></div>
        <div class="product-detail">
            <div class="product-detail-title">
                <i aria-label="图标: home" class="anticon anticon-home">
                    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                    </svg>
                </i>
                <div class="product-detail-title-text ant-breadcrumb">
                    <span>
                        <span class="ant-breadcrumb-link">
                            <span class="title">首页</span>
                        </span>
                        <span class="ant-breadcrumb-separator">/</span>
                    </span>
                    <span>
                        <span class="ant-breadcrumb-link">
                            <span class="title">金融超市</span>
                        </span>
                        <span class="ant-breadcrumb-separator">/</span>
                    </span>
                    <span>
                        <span class="ant-breadcrumb-link">产品详情</span>
                        <span class="ant-breadcrumb-separator">/</span>
                    </span>
                </div>
            </div>
            <div class="product-detail-body">
                <div class="left-box product-detail-box">
                    <div class="box-title first-box-title">
                        <img alt="logo" :src="domainName+ productDetail.mechanism.mechanism_image">
                        <div class="box-title-logo">{{productDetail.mechanism.name}}</div>
                    </div>
                    <div class="box-content">
                        <h2 class="product-name">{{productDetail.product_name}}</h2>
                        <div>
                            <div class="product-info-box-wrapper">
                                <div class="product-info-box">
                                    <span>额度区间</span>
                                    <div class="red-text">{{productDetail.min_loan_price}}万元~{{productDetail.max_loan_price}}万元</div>
                                </div>
                                <div class="divide-line ant-divider ant-divider-vertical" role="separator"></div>
                                <div class="product-info-box">
                                    <span>利率区间</span>
                                    <div class="red-text">{{productDetail.min_interest_rate}}%~{{productDetail.max_interest_rate}}%</div>
                                </div>
                                <div class="divide-line ant-divider ant-divider-vertical" role="separator"></div>
                                <div class="product-info-box">
                                    <span>贷款期限</span>
                                    <div class="red-text">{{productDetail.min_term}}个月~{{productDetail.max_term}}个月</div>
                                </div>
                             </div>
                            <div class="product-info-form">
                                <div class="ant-row" style="margin-left: -5px; margin-right: -5px;">
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;">
                                        <span class="form-label">融资类型：</span>
                                         <span class="form-content" v-for="(item, index) in financinglist" :key="index">
                                            <span v-if="item.code == productDetail.financinglist">{{item.name}}</span>
                                        </span>
                                    </div>
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;" v-if='productDetail.financinglist == 2&& productDetail.is_zhengce==1'>
                                        <span class="form-label">产品类型：</span>
                                        <span class="form-content">
                                            <span>政策性产品</span>
                                        </span>
                                    </div>
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;" v-if='productDetail.financinglist == 0'>
                                        <span class="form-label">担保方式：</span>
                                        <span class="form-content" v-for="(item, index) in naturelist" :key="index">
                                            <span v-if="item.code == productDetail.naturelist">{{item.name}}</span>
                                        </span>
                                    </div>
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;" v-if='productDetail.financinglist == 1'>
                                        <span class="form-label">担保公司性质：</span>
                                        <span class="form-content" v-for="(item, index) in guaranteelist" :key="index">
                                            <span v-if="item.code == productDetail.guaranteelist">{{item.name}}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="ant-row" style="margin-left: -5px; margin-right: -5px;">
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;" v-if='productDetail.financinglist == 0'>
                                        <span class="form-label">是否政策性产品：</span>
                                        <span class="form-content" v-for="(item, index) in whether" :key="index">
                                            <span v-if="item.code == productDetail.is_zhengce">{{item.name}}</span>
                                        </span>
                                    </div>
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;">
                                        <span class="form-label">是否互联网直联：</span>
                                        <span class="form-content" v-for="(item, index) in whether" :key="index">
                                            <span v-if="item.code == productDetail.is_hulianw">{{item.name}}</span>
                                        </span>
                                    </div>
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;" v-if='productDetail.financinglist == 1'>
                                        <span class="form-label">反担保方式：</span>
                                        <span class="form-content" v-for="(item, index) in fanguaranteelist" :key="index">
                                            <span v-if="item.code == productDetail.fanguaranteelist">{{item.name}}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="ant-row" style="margin-left: -5px; margin-right: -5px;">
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;">
                                        <span class="form-label">币种：</span>
                                        <span class="form-content" v-for="(item, index) in bizhonglist" :key="index">
                                            <span v-if="item.code == productDetail.bizhonglist">{{item.name}}</span>
                                        </span>
                                    </div>
                                    <div class="ant-col ant-col-12" style="padding-left: 5px; padding-right: 5px;" v-if='productDetail.financinglist == 2'>
                                        <span class="form-label">反担保方式：</span>
                                        <span class="form-content" v-for="(item, index) in fanguaranteelist" :key="index">
                                            <span v-if="item.code == productDetail.fanguaranteelist">{{item.name}}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="ant-row" style="margin-left: -5px; margin-right: -5px;">
                                    <div class="ant-col ant-col-24" style="padding-left: 5px; padding-right: 5px;">
                                        <span class="form-label">适用区市：</span><span class="form-content-row">{{productDetail.regionlist2}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divide ant-divider ant-divider-horizontal" role="separator"></div>
                        <div class="product-footer-info"><div class="product-footer-info-item">
                            <h2>产品介绍</h2>
                            <p><p v-html="productDetail.product_content"><br> <br></p></p>
                        </div>
                        <div class="product-footer-info-item">
                                <h2>产品特点</h2>
                                <p><p><span style="color:#474747"><span style="font-size:16px">{{productDetail.product_charact}}</span></span></p></p>
                        </div>
                        <button type="button" class="ant-btn apply-btn" @click="immediately"><span>立即申请</span></button>
                    </div>
                        </div>
                            <div class="box-title  more-info">补充说明</div>
                            <div class="box-content">
                                <div class="product-footer-info">
                                    <div class="product-footer-info-item">
                                        <h2>申请条件</h2><p><p>{{productDetail.conditions}}<br> <br> </p></p>
                                    </div>
                                    <div class="product-footer-info-item"><h2>提交材料</h2><p><p>{{productDetail.science}}<br> <br> </p></p></div></div></div></div>
                                    <div class="right-box product-detail-box">
                                        <div class="box-title">相关推荐</div>
                                        <div class="box-content" style="padding: 0px 20px 24px;">
                                            <ul class="more-product-list">
                                                <li class="more-product-item" v-for="(item, index) in ProductList" :key="index">
                                                    <div class="more-product-item-img">
                                                        <!-- <img src="/uriel/file/downloadCompanyFile?uid=common&amp;targetName=1575534645114F3DEBB1D&amp;type=0&amp;fileName=1575534645114F3DEBB1D" alt="logo"> -->
                                                        <img alt="logo" :src="domainName+ item.mechanism.mechanism_image">

                                                        </div>
                                                        <div class="more-product-item-text"><h2>{{item.product_name}}</h2><div class="more-product-item-info"><label>申请次数：</label><span class="red-text">{{item.apply_count}}次</span></div>
                                                        <div class="more-product-item-info"><label>贷款额度：</label><span class="red-text">{{item.min_loan_price}}万元~{{item.max_loan_price}}万元</span></div></div>      
                                                </li>
                                            </ul>
                                            <div class="more-product-footer">
                                                <span class="more-product-footer-text" @click="skipMore">更多产品<img src="@/assets/home/data/data01/7731531f3940ef004c55cc217d9cd4d4.svg" class="more-product-footer-img"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <Modal
        v-model="modal1"
        :title="'申请'+productDetail.product_name+'产品'"
        :mask-closable="false"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="modal-span">
            <span>贷款金额(万元)</span>
        <Input v-model="getFrom.price" placeholder="请输入贷款金额" style="width: 300px" />
        </div>
        <div class="modal-span">
            <span> 贷款时间(月)</span>
        <Input v-model="getFrom.repayment" placeholder="请输入贷款期限" style="width: 300px" />
        </div>
        
        
    </Modal>

</div>
</template>
<script>
export default {
  name: "productDetail",
  data() {
    return {
      modal1: false,
      getFrom: {
        product_id: "",
        price: "", // 贷款金额
        repayment: "", // 贷款期限
      },
      getFrom1: {
        product_id: "",
        price: "", // 贷款金额
        repayment: "", // 贷款期限
      },
      productDetail: {},
      regionlist: [
        //适用区市
        { code: 0, name: "瑞州街道" },
        { code: 1, name: "筠阳街道" },
        { code: 2, name: "蓝坊镇" },
        { code: 3, name: "荷岭镇" },
        { code: 4, name: "黄沙岗镇" },
        { code: 5, name: "新街镇" },
        { code: 6, name: "八景镇" },
        { code: 7, name: "独城镇" },
        { code: 8, name: "太阳镇" },
        { code: 9, name: "建山镇" },
        { code: 10, name: "田南镇" },
        { code: 11, name: "相城镇" },
        { code: 12, name: "灰埠镇" },
        { code: 13, name: "石脑镇" },
        { code: 14, name: "龙潭镇" },
        { code: 15, name: "杨圩镇" },
        { code: 16, name: "村前镇" },
        { code: 17, name: "伍桥镇" },
        { code: 18, name: "祥符镇" },
        { code: 19, name: "大城镇" },
        { code: 20, name: "上湖乡" },
        { code: 21, name: "汪家圩乡" },
        { code: 22, name: "华林山镇" },
      ],
      naturelist: [
        //担保方式
        { code: 0, name: "信用" },
        { code: 1, name: "保证" },
        { code: 2, name: "质押" },
        { code: 3, name: "抵押" },
        { code: 4, name: "保险" },
      ],
      guaranteelist: [
        //担保公司性质
        { code: 0, name: "私企" },
        { code: 1, name: "国企" },
      ],
      financinglist: [
        //融资类型
        { code: 0, name: "贷款服务" },
        { code: 1, name: "担保服务" },
        { code: 2, name: "保险服务" },
      ],
      fanguaranteelist: [
        //反担保方式
        { code: 0, name: "不限" },
        { code: 1, name: "抵押" },
        { code: 2, name: "信用" },
      ],
      whether: [
        { code: 0, name: "否" },
        { code: 1, name: "是" },
      ],
      bizhonglist: [
        { code: 0, name: "人民币" },
        { code: 1, name: "美元" },
      ],
      logIndex: "",
      ProductList: []
    };
  },
  mounted() {
    this.logIndex = this.$store.state.logIndex;
    this.getFrom.product_id = this.$route.query.productid;
    this.getFrom1.product_id = this.$route.query.productid;
    this.getProductInfo(this.getFrom.product_id);
    this.getProductList(this.$route.query.productid)
  },
  methods: {
    skipMore () {
      this.$router.push({ path: "/financeMarket", query: { heaedShow: 2 } });
    },
    immediately() {
      console.log(1)
      if (this.logIndex == 1) {
        this.modal1 = true;
        this.getFrom = JSON.parse(JSON.stringify(this.getFrom1))
      } else if (this.logIndex == 2) {
        this.$message({
          message: "您不是企业用户，无法申请",
          type: "warning",
        });
      } else if (this.logIndex == 3) {
        this.$message({
          message: "请登录企业端",
          type: "warning",
        });
      }
    },
    application() {},
    ok() {
      let token = this.$store.state.token;
      this.$axios({
        //企业申请金融产品
        method: "POST",
        headers: token,
        url: "/api/enterprise/applyproduct",
        data: this.getFrom,
      }).then((res) => {
        let { msg, code } = res.data;
        if (code == 1) {
          this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
        } else {
           this.$message({
              message: msg,
              type: 'error'
            });
        }
      });
      // this.$Message.info('Clicked ok');
    },
    cancel() {
      // this.$Message.info('Clicked cancel');
    },
    getProductInfo(data) {
      for (let key in data) {
        if (data[key] == undefined || data[key] == "") {
          delete data[key];
        }
      }
      this.$axios({
        //机构列表
        method: "POST",
        url: "/api/index/getProductInfo",
        data: { productid: data },
      }).then((res) => {
        let { data } = res.data;
        this.productDetail = data;
        this.productDetail.regionlist1 = [];
        this.productDetail.regionlist2 = "";
        let a = this.productDetail.regionlist.split(",");
        a.map((item) => {
          this.regionlist.map((item1) => {
            if (item1.code == item) {
              this.productDetail.regionlist1.push(item1.name);
            }
          });
        });
        this.productDetail.regionlist2 = this.productDetail.regionlist1.join();
      });
    },
    getProductList (id) {
        this.$axios({
        method: "POST",
        url: "/api/index/getRecommendProduct",
        data: { productid: id },
      }).then((res) => {
        let { data, code, msg } = res.data
        this.ProductList = data.data
        console.log(this.ProductList)
      });
    }
  },
};
</script>
<style lang="less" scoped>
.modal-span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  span {
    width: 100px;
    margin-right: 10px;
  }
}
</style>