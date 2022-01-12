<template>
  <div id="NoticeDetail">
    <div class="page-content ant-layout-content">
      <div class="page-body-wrapper publish-product-wrapper">
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
              <span
                ><span class="ant-breadcrumb-link"
                  ><span class="title">首页</span></span
                ><span class="ant-breadcrumb-separator">/</span></span
              ><span
                ><span class="publish-product">新闻资讯详情</span
                ><span class="ant-breadcrumb-separator">/</span></span
              >
            </div>
          </div>
          <div class="notice-detail-body">
            <div class="notice-detail-head">
              <h2 class="notice-detail-title">{{ particulars.title }}</h2>
            </div>
            <div v-if="particulars.zcwj_data">
              <div class="ant-row" style=" margin-left: -12px; margin-right: -12px; margin-bottom: 14px; ">
                <div class="ant-col ant-col-12" style="padding-left: 12px; padding-right: 12px">
                  <span>发文主题:</span><span>{{particulars.zcwj_data.fwzt}}</span>
                </div>
                <div class="ant-col ant-col-12" style="padding-left: 12px; padding-right: 12px">
                  <span>发布时间:</span><span>{{particulars.zcwj_data.cwrq}}</span>
                </div>
              </div>
              <div class="ant-row" style=" margin-left: -12px; margin-right: -12px; margin-bottom: 14px; " >
                <div class="ant-col ant-col-12" style="padding-left: 12px; padding-right: 12px">
                  <span>发文机关:</span><span>{{particulars.zcwj_data.fwjg}}</span>
                </div>
                <div class="ant-col ant-col-12" style="padding-left: 12px; padding-right: 12px">
                  <span>发布机构:</span><span>{{particulars.zcwj_data.fwjigou}}</span>
                </div>
              </div>
              <div class="ant-row" style=" margin-left: -12px; margin-right: -12px; margin-bottom: 14px;">
                <div class="ant-col ant-col-12" style="padding-left: 12px; padding-right: 12px" >
                  <span>成文日期:</span><span>{{particulars.zcwj_data.cwrq}}</span>
                </div>
                <div class="ant-col ant-col-12" style="padding-left: 12px; padding-right: 12px">
                  <span>发文字号:</span><span>{{particulars.zcwj_data.fwzh}}</span>
                </div>
              </div>
            </div>
            <div class="notice-detail-body">
              <p v-if="!particulars.zcwj_data" v-html="particulars.content_data.content"></p>
              <p v-if="particulars.zcwj_data" v-html="particulars.zcwj_data.content"></p>
              <!-- <p style="text-align: justify; text-indent: 2em">
                <strong>一、债券市场发行情况</strong>
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月份，债券市场共发行各类债券4.9万亿元。其中，国债发行4764.1亿元，地方政府债券发行7948.7亿元，金融债券<sup>1</sup>发行9067.1亿元，公司信用类债券<sup>2</sup>发行11495.9亿元，信贷资产支持证券发行313.1亿元，同业存单发行1.5万亿元。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                截至6月末，债券市场托管余额为123.6万亿元。其中，国债托管余额20.7万亿元，地方政府债券托管余额27.4万亿元，金融债券托管余额29.4万亿元，公司信用类债券托管余额29.3万亿元，信贷资产支持证券托管余额2.3万亿元，同业存单托管余额12.4万亿元。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                <strong>二、货币市场运行情况</strong>
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月份，银行间货币市场成交共计97.1万亿元，同比减少6.6%，环比增加15%。其中，质押式回购成交87.2万亿元，同比增加11.6%，环比增加16.3%；买断式回购成交3324.8亿元，同比减少48.0%，环比增加8.3%；同业拆借成交9.6万亿元，同比减少21.9%，环比增加4.7%。交易所标准券回购成交29.4万亿元，同比增加26.1%，环比增加21.0%。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月份，同业拆借月加权平均利率为2.13%，环比上升4个基点；银行间质押式回购月加权平均利率为2.17%，环比上升11个基点。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                <strong>三、债券市场运行情况</strong>
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月份，银行间债券市场现券成交18.5万亿元，日均成交8822.6亿元，同比减少21.1%，环比增加6.7%。交易所债券市场现券成交2.2万亿元，日均成交1028亿元，同比增加49.3%，环比减少18.3%。6月末，银行间债券总指数为208.0点，环比上升0.4点。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                <strong>四、股票市场运行情况</strong>
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月末，上证综指收于3591.2点，较上月末下跌24.3点，跌幅为0.7%；深证成指收于15161.7点，较上月末上涨165.3点，涨幅为1.1%。6月份，沪市日均交易量为4442.1亿元，环比增加10.8%；深市日均交易量为5515.5亿元，环比增加14.3%。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                <strong>五、银行间债券市场持有人结构情况</strong>
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月末，按法人机构（管理人维度）统计，非金融企业债务融资工具<sup>3</sup>持有人共计1824家。从持债规模看，前50名投资者持债占比58.85%，前200名投资者持债占比86.54%，主要集中在基金公司和股份制商业银行。单只非金融企业债务融资工具持有人数量最大值、最小值、平均值和中位值分别为75、1、10、9家，持有人20家以内的非金融企业债务融资工具只数占比为93%。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月份，从交易规模看，非金融企业债务融资工具前50名投资者交易占比68.7%，前200名投资者交易占比94%，主要集中在证券公司、股份制商业银行、基金公司和城市商业银行。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                6月份，银行间债券市场现券单笔成交量主要分布在500-5000万元，单笔平均成交量5031万元。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                （资料来源：中国证券监督管理委员会、中央国债登记结算有限责任公司、全国银行间同业拆借中心、银行间市场清算所股份有限公司、上海证券交易所、深圳证券交易所、北京金融资产交易所）
              </p>
              <p style="text-align: justify; text-indent: 2em"></p>
              <p style="text-align: justify; text-indent: 2em">
                注：1.金融债券包括国开行及政策性银行债、券商短融、银行间金融债和交易所金融债等。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                2.公司信用类债券包括非金融企业债务融资工具、资产支持票据、企业债券、公司债券、交易所资产支持证券等。
              </p>
              <p style="text-align: justify; text-indent: 2em">
                3.仅统计上清所托管的非金融企业债务融资工具。
              </p> -->
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
        newsid: "",
      },
      particulars: "",
    };
  },
  mounted() {
    this.getFrom.newsid = this.$route.query.newsid;
    this.getNewsInfo(this.getFrom);
  },
  methods: {
    getNewsInfo(data) {
      for (let key in data) {
        if (data[key] == undefined || data[key] == "") {
          delete data[key];
        }
      }
      this.$axios({
        //新闻详情
        method: "POST",
        url: "/api/index/getNewsInfo",
        data: data,
      }).then((res) => {
        let { data } = res.data
        this.particulars = data
      });
    },
  },
};
</script>