<template>
  <div id="NoticeDetail">
    <div class="page-content ant-layout-content">
      <div class="page-body-wrapper publish-product-wrapper" style="background: #F6FAFF;">
        <div class="page-body">
          <div class="publish-product-head">
            <i aria-label="图标: home" class="anticon anticon-home"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="home"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                ></path></svg></i
            ><span style="margin-left: 8px">当前位置</span>
            <div class="publish-product-head-text ant-breadcrumb">
                <span>
                   <router-link class="ant-breadcrumb-link" to="/"><span>首页</span></router-link>
                    <!-- <span class="ant-breadcrumb-link" to="/">
                        <span class="title"></span>
                    </span> -->
                    <span class="ant-breadcrumb-separator">/</span>
                </span>
                <span>
                    <span class="title">数据库</span>
                    <span class="ant-breadcrumb-separator">/</span>
                </span>
                <span>
                    <span class="title" @click="change">企业基本情况数据库</span>
                    <span class="ant-breadcrumb-separator">/</span>
                </span>
                <span>
                    <span class="publish-product">{{ particulars.name }}</span>
                </span>
            </div>
          </div>
          <div class="company">
            <div class="company-name">
              {{ particulars.name }}
            </div>
            <div class="company-content" v-if="particulars.profile_content">
                <div class="content-header"><span>企业简况</span></div>
                <p v-if="particulars.profile_content" v-html="particulars.profile_content"></p>
            </div>
            <div class="company-content" v-if="particulars.operation_content">
                <div class="content-header"><span>生产经营情况</span></div>
                <p v-if="particulars.operation_content" v-html="particulars.operation_content"></p>
            </div>
            <div class="company-content" v-if="particulars.development_content">
                <div class="content-header"><span>发展规划有关情况</span></div>
                <p v-if="particulars.development_content" v-html="particulars.development_content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "NoticeDetail",
  data() {
    return {
      getFrom: {
        id: "",
      },
      particulars: "",
    };
  },
  mounted() {
    this.getFrom.id = this.$route.query.id;
    this.getNewsInfo(this.getFrom);
  },
  methods: {
    getNewsInfo(data) {
      this.$axios({  //企业详情
      method: 'POST',
        url: '/api/index/getEnterpriseInfo',
        data: data
        }).then(res=>{
        let { data } = res.data
        this.particulars = data
        })
    },
    change () {
      this.$store.state.show = false
      this.$router.push({ path: "/registeredEnterprise"});
    }
  },
};
</script>
<style lang="less" scoped>
.company {
    .company-name {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #333333;
        margin-bottom: 40px;
    }
    .company-content {
        background: #FFFFFF;
        box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
        border-radius: 8px;
        padding: 24px 0 40px 0;
        margin-bottom: 24px;
        .content-header {
            border-bottom: 1px solid #EEEEEE;
            span {
                display: inline-block;
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: 500;
                line-height: 1;
                color: #333333;
                border-left: 4px solid #387BF0;
                padding-left: 8px;
                margin:0 0 24px 24px;  
            }
            
        }
        p {
            margin-top: 24px;
            padding: 0 24px;
        }
    }
}
</style>