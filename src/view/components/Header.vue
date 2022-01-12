<template>
  <div id="header">
    <div class="header-top">
      <div class="ant-carousel">
        <div class="slick-slider banner-wrap slick-initialized" dir="ltr">
          <div class="slick-list">
            <div class="slick-track">
              <div class="block">
                <el-carousel height="500px" :interval="5000">
                  <el-carousel-item v-for="item in homebanner" :key="item">
                    <div>
                      <img
                        :src="domainName + item"
                        style="width: 100%; display: inline-block"
                      />
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="show">
        <BannerLinks @fromChild="fromChild"></BannerLinks>
      </div>
      <div class="layout-top-bar">
        <div class="banner-layout">
          <img src="@/assets/home/data/data01/20210806130209.png" />
        </div>
        <div class="login-btns-wrapper">
          <div class="login-btns" v-if="logIndex != 1&&logIndex !=2">
            <i aria-label="图标: shop" class="anticon anticon-shop"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="shop"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z"
                ></path></svg></i
            ><span @click="logIn(1)">企业登录</span>
          </div>
           <div class="login-btns" v-if="logIndex == 1">
              <span
                @click="personalCenter(1)"
                style="white-space: nowrap"
                >{{ corporationName }}</span
              >
            </div>
             <div class="login-btns" v-if="logIndex == 2">
              <span
                @click="personalCenter(2)"
                style="white-space: nowrap"
                >{{ organizationName }}</span
              >
            </div>
          <div class="login-devide-line"></div>
          <div class="login-btns" v-if="logIndex != 1&&logIndex !=2">
            <i aria-label="图标: bank" class="anticon anticon-bank"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="bank"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"
                ></path></svg
            ></i>
            <span @click="logIn(2)">金融机构登录</span>
          </div>
          <div class="login-btns" v-if="logIndex == 1">
              <span @click="logIn1(1)">退出</span>
          </div>
          <div class="login-btns" v-if="logIndex == 2">
              <span v-if="logIndex == 2" @click="logIn1(2)">退出</span>
          </div>
        </div>
        <div class="top-phone-num">
          <span class="text">服务电话</span
          ><img
            src="@/assets/home/data/data01/d6447e749db2bf41336c22af21604a8e.png"
            class="phone-icon"
          /><span class="phone-num">0795-5215110</span>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-items">
          <ul
            class="ant-menu ant-menu-light ant-menu-root ant-menu-horizontal"
            role="menu"
          >
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li
              class="ant-menu-item ant-menu-item-selected"
              role="menuitem"
              @click="showHome(0, '/')"
            >
              <router-link class="menulink" to="/"> 首页</router-link>
              <div
                v-if="heaedShow == 0"
                class="menu-down-line"
                style="top: 28px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li class="ant-menu-item" role="menuitem" @click="showHome(1, '/loan')">
              <router-link class="menulink" to="/loan">
                <img
                  src="@/assets/home/data/data01/4398f6fb49414ab4b643ff137207cb43.png"
                  style="width: 100px"
                />
              </router-link>
              <div
                v-if="heaedShow == 1"
                class="menu-down-line"
                style="top: 40px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li class="ant-menu-item" role="menuitem" @click="showHome(2, '/financeMarket')">
              <router-link class="menulink" to="/financeMarket"
                >金融超市</router-link
              >
              <div
                v-if="heaedShow == 2"
                class="menu-down-line"
                style="top: 28px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li class="ant-menu-item" role="menuitem" @click="showHome(3,'/financeOrganization')">
              <router-link class="menulink" to="/financeOrganization"
                >金融机构</router-link
              >
              <div
                v-if="heaedShow == 3"
                class="menu-down-line"
                style="top: 28px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li class="ant-menu-item" role="menuitem" @click="showHome(4,'/financeCase')">
              <router-link class="menulink" to="/financeCase"
                >融资案例</router-link
              >
              <div
                v-if="heaedShow == 4"
                class="menu-down-line"
                style="top: 28px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li class="ant-menu-item" role="menuitem" @click="showHome(5,'/policyGuidelines')">
              <router-link class="menulink" to="/policyGuidelines"
                >政策指南</router-link
              >
              <div
                v-if="heaedShow == 5"
                class="menu-down-line"
                style="top: 28px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
            <li class="ant-menu-item" role="menuitem" @click="showHome(6,'/connect')">
              <router-link class="menulink" to="/connect">联系我们</router-link>
              <div
                v-if="heaedShow == 6"
                class="menu-down-line"
                style="top: 28px; width: 100%"
              ></div>
            </li>
            <li
              class="
                ant-menu-submenu
                ant-menu-submenu-horizontal
                ant-menu-overflowed-submenu
              "
              role="menuitem"
              style="visibility: hidden; position: absolute; display: none"
            >
              <div
                class="ant-menu-submenu-title"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span>···</span><i class="ant-menu-submenu-arrow"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BannerLinks from "./BannerLinks";
export default {
  name: "header",
  components: {
    BannerLinks,
  },
  data() {
    return {
      show: true,
      homebanner: [],
      heaedShow: 0,
      logIndex: "",
      corporationName: "",
      organizationName: "",
    };
  },
  computed: {
    heaedShow1 () {
      return this.$route.query.heaedShow
    },
    callBack() {
      return this.$store.state.show;
    },
    corporationName1() {
      return this.$store.state.corporationName;
    },
    organizationName1() {
      return this.$store.state.organizationName;
    },
  },
  watch: {
    heaedShow1 () {
      this.heaedShow = this.$route.query.heaedShow
    },
    callBack(val) {
      this.show = this.$store.state.show;
    },
    corporationName1() {
      this.corporationName = this.$store.state.corporationName;
    },
    organizationName1() {
      this.organizationName = this.$store.state.organizationName;
    },
  },
  mounted() {
    this.corporationName = this.$store.state.corporationName;
    this.organizationName = this.$store.state.organizationName;
    this.logIndex = this.$store.state.logIndex;
    this.heaedShow = this.$route.query.heaedShow
    this.homeInitData();
  },
  methods: {
    logIn(val) {
      this.$router.push({ path: "/login", query: { logIndex: val } });
    },
    logIn1(val) {
      this.$store.state.logIndex = 3;
      this.$message({
        message: '退出成功',
        type: 'success'
      });
      this.logIndex = this.$store.state.logIndex;
      this.$router.push({ path: "/" });
    },
    personalCenter(val) {
      if (val == 1) {
        this.$store.state.enterpriseIndex = 0;
        this.$store.state.myIndex = -1;
        this.$store.state.callBack = 0
        this.$router.push({ path: "/institution" });
      } else if (val == 2) {
        this.$store.state.enterpriseIndex = 0;
        this.$store.state.myIndex = -1;
        this.$store.state.callBack = 0
        this.$router.push({ path: "/management" });
      }
    },
    fromChild(val) {
      this.heaedShow = val;
      // this.show = false
    },
    showHome(price, path) {
      // this.show = val
      if (price != 0) {
        this.$store.state.show = false;
      }
      this.$router.push({ path: path, query: { heaedShow: price } });
      this.heaedShow = price;
    },
    homeInitData() {
      this.$axios({
        //首页新闻
        method: "POST",
        url: "/api/index/homeInitData",
      }).then((res) => {
        let { data } = res.data;
        this.homebanner = data.homebanner;
      });
    },
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>