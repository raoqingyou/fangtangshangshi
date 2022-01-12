<template>
  <div id="login" class="main-layout ant-layout">
    <section class="main-layout ant-layout">
      <Header></Header>
      <div
        style="width: 100%; transform: translateY(-245px); background: #f6faff"
      >
        <div class="leftContent">
          <div class="leftTab">
            <div class="message">
              <span>{{ fromData.name }}</span>
            </div>
            <div class="message-name">
              <span>{{ fromData.phone_name }}</span>
            </div>
            <div class="tabHeader"><span>企业申请</span></div>
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
      myList: [
        { name: "机构信息", messageNum: 0, roeter: "organization" },
        { name: "操作日志", messageNum: 0, roeter: "log" },
      ],
      enterpriseIndex: 0,
      myIndex: -1,
      token: {},
      fromData: {},
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
      this.getstatuscount(this.token);
    },
  },
  mounted() {
    this.enterpriseIndex = this.$store.state.enterpriseIndex;
    this.myIndex = this.$store.state.myIndex;
    this.token = this.$store.state.token;
    this.getstatuscount(this.token);
    this.getuserinfo();
  },
  methods: {
    getuserinfo() {
      this.$axios({
        // 机构端信息 获取用户详情
        url: "/api/mechanism/getuserinfo",
        headers: this.token,
      }).then((res) => {
        let { data, code } = res.data;
        this.fromData = data;
        this.$store.state.organizationName = data.name;
        console.log(data, "获取用户详情");
      });
    },
    getstatuscount(val) {
      this.$axios({
        // 获取申请列表的各个状态的总数
        url: "/api/mechanism/getstatuscount",
        headers: val,
      }).then((res) => {
        let { data, code } = res.data;
        this.$store.state.callBack = -1;
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
  padding: 40px 0 52px 0;
  width: 1200px;
  height: 650px;
  margin: 0 auto;
  background: #f6faff;
  opacity: 1;

  .leftTab {
    width: 282px;
    height: 792px;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
    opacity: 1;
    border-radius: 8px;
    .message {
      padding-top: 33px;
      margin: 0 0 0 32px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 41px;
      color: #333333;
      opacity: 1;
    }
    .message-name {
      margin: 0 0 40px 32px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 27px;
      color: #333333;
      opacity: 1;
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