<template>
  <div id="login" class="main-layout ant-layout">
    <section class="main-layout ant-layout">
      <Header></Header>
        <div style="width: 100%;transform: translateY(-245px);background: #f6faff;">
          <div class="leftContent">
          <div class="leftTab">
            <div class="head">
              <div class="message">
                <img :src="domainName + dataImg" alt="" />
              </div>
              <div class="message-name">
                <span>{{ dataName }}</span>
              </div>
            </div>

            <div class="tabHeader"><span>我的申请</span></div>
            <ul class="tabUl">
              <li
                class="tabLi"
                @click="enterpriseOn(index, item)"
                v-for="(item, index) in enterpriseList"
                :key="index"
                :class="index == enterpriseIndex ? 'tabliOn' : ''"
              >
                <span class="span-message1">{{ item.name }}</span>
                <span class="span-message2" v-if="item.messageNum != 0">{{
                  item.messageNum
                }}</span>
              </li>
            </ul>
            <div class="tabHeader"><span>我的信息</span></div>
            <ul class="tabUl">
              <li
                class="tabLi"
                @click="myOn(index, item)"
                v-for="(item, index) in myList"
                :key="index"
                :class="index == myIndex ? 'tabliOn' : ''"
              >
                <span class="span-message1">{{ item.name }}</span>
                <span class="span-message2" v-if="item.messageNum != 0">{{
                  item.messageNum
                }}</span>
              </li>
            </ul>
          </div>
          <div class="rightcontent">
            <router-view />
          </div>
        </div>
        </div>


      <Footer></Footer>
    </section>
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
      enterpriseList: [
        { name: "申请中", messageNum: 0, roeter: "apply" },
        { name: "调查", messageNum: 0, roeter: "survey" },
        { name: "审批", messageNum: 0, roeter: "examine" },
        { name: "放款", messageNum: 0, roeter: "makeLoans" },
        { name: "已驳回", messageNum: 0, roeter: "reject" },
      ],
      myList: [{ name: "企业信息", messageNum: 0, roeter: "organization" }],
      enterpriseIndex: -1,
      myIndex: -1,
      dataImg: "",
      dataName: "",
      token: {},
    };
  },
  computed: {
    callBack() {
      return this.$store.state.callBack;
    },
  },
  watch: {
    callBack(val) {
      this.token = this.$store.state.token;
      this.getuserinfo(this.token);
      this.getstatuscount(token);
    },
  },
  mounted() {
    this.$store.state.show = false;
    this.enterpriseIndex = this.$store.state.enterpriseIndex;
    this.myIndex = this.$store.state.myIndex;
    let token = this.$store.state.token;
    this.getuserinfo(token);
    this.getstatuscount(token);
  },
  methods: {
    getuserinfo(val) {
      this.$axios({
        // 获取用户详情
        url: "/api/enterprise/getuserinfo",
        headers: val,
      }).then((res) => {
        let { data, code } = res.data;
        this.dataImg = data.logo;
        this.dataName = data.name;
        this.$store.state.callBack = 1;
        this.$store.state.corporationName = data.name;
      });
    },
    getstatuscount(val) {
      this.$axios({
        // 企业的各个状态的数量
        url: "/api/enterprise/getstatuscount",
        headers: val,
      }).then((res) => {
        let { data, code } = res.data;
        this.enterpriseList.map((item, index) => {
          item.messageNum = data[index].count;
        });
      });
    },
    enterpriseOn(index, item) {
      this.enterpriseIndex = index;
      this.$store.state.enterpriseIndex = index;
      this.myIndex = -1;
      this.$store.state.myIndex = -1;
      this.$router.push({ path: item.roeter });
    },
    myOn(index, item) {
      this.myIndex = index;
      this.$store.state.myIndex = index;
      this.enterpriseIndex = -1;
      this.$store.state.enterpriseIndex = -1;
      this.$router.push({ path: item.roeter });
    },
  },
};
</script>
<style lang="less" scoped>
.main-layout {
  background: #f6faff;
}
.leftContent {
  display: flex;
  width: 1200px;
  padding: 40px 0 52px 0;
  margin: 0 auto;
  // transform: translateY(-245px);
  background: #f6faff;
  opacity: 1;
  height: 690px;

  .leftTab {
    width: 282px;
    height: 835px;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
    opacity: 1;
    border-radius: 8px;
    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      .message {
        margin: 40px 0 26px 0;
        img {
          width: 100px;
          height: 100px;
          background: rgba(0, 0, 0, 0);
          border-radius: 50%;
        }
      }
      .message-name {
        margin: 0 0 40px 0;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 27px;
        color: #333333;
        opacity: 1;
      }
    }

    .tabHeader {
      padding: 20px 0 20px 32px;
      width: 282px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #387bf0;
      opacity: 1;
      border-top: 1px solid #eeeeee;
      border-bottom: 1px solid #eeeeee;
    }
    .tabUl {
      .tabLi {
        cursor: pointer;
        padding: 24px 32px 24px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .span-message1 {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #666666;
          opacity: 1;
        }
        .span-message2 {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 24px;
          background: #ff7a6f;
          opacity: 1;
          border-radius: 12px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          opacity: 1;
        }
      }
      .tabliOn {
        width: 282px;
        background: rgba(56, 123, 240, 0.1);
        .span-message1 {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #387bf0;
          opacity: 1;
        }
      }
    }
  }
}
</style>