<template>
  <div id="financeMarket">
    <main class="page-content ant-layout-content">
      <div>
        <div class="fnproduct-wrap">
          <div class="fnproduct-content">
            <div class="product-screening">产品筛选</div>
            <div class="select-information">
              <span class="organization-name">机构名称：</span>
              <el-select
                v-model="mechanism_name"
                placeholder="请选择"
                @change="pitchOn(mechanism_name)"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
              <span class="product-name">产品名称：</span>
              
              <div
                class="ant-select ant-select-enabled ant-select-allow-clear"
                style="width: 272px; height: 32px"
              >
              <el-input v-model="getfrom.product_name" placeholder="请输入产品名称"></el-input>
              </div>
              <button
                type="button"
                class="ant-btn ant-btn-primary"
                style="margin-left: 19px"
                @click="searchOn"
              >
                <span>搜 索</span></button
              >
              <button type="button" class="ant-btn" style="float: right" @click="Collect">
                <span>收起筛选</span
                ><i
                  aria-label="图标: down"
                  class=" anticon anticon-down collapsed-btn-icon"
                  :class=" showCollect ? '': 'collapsed-btn-icon-up'"
                  ><svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    class=""
                    data-icon="down"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                    ></path></svg
                ></i>
              </button>
            </div>
            <div v-if="showCollect">
              <div class="filter-section-container">
                <div class="filter-item">
                  <div class="f-section-name">适用区市：</div>
                  <div class="f-section-items-wrap">
                    <el-radio-group
                      v-model="getfrom.regionlist"
                      :border="false"
                      size="mini"
                      @change="searchOn"
                    >
                      <el-radio-button
                        class="f-item"
                        v-for="(item, index) in regionlist"
                        :key="index"
                        v-model="getfrom.regionlist"
                        :label="item.code"
                        >{{ item.name }}</el-radio-button
                      >
                    </el-radio-group>
                  </div>
                </div>
                <div class="filter-item">
                  <div class="f-section-name">机构类型：</div>
                  <div class="f-section-items-wrap">
                    <el-radio-group
                      v-model="getfrom.mechanism_type"
                      :border="false"
                      size="mini"
                      @change="searchOn"
                    >
                      <el-radio-button
                        class="f-item"
                        v-for="(item, index) in mechanism"
                        :key="index"
                        v-model="getfrom.mechanism_type"
                        :label="item.code"
                        >{{ item.name }}</el-radio-button
                      >
                    </el-radio-group>
                  </div>
                </div>
                <div class="filter-item">
                  <div class="f-section-name">担保方式：</div>
                  <div class="f-section-items-wrap">
                    <el-radio-group
                      v-model="getfrom.guaranteeType"
                      :border="false"
                      size="mini"
                      @change="searchOn"
                    >
                      <el-radio-button
                        class="f-item"
                        v-for="(item, index) in naturelist"
                        :key="index"
                        v-model="getfrom.guaranteeType"
                        :label="item.code"
                        >{{ item.name }}</el-radio-button
                      >
                    </el-radio-group>
                  </div>
                </div>
                <div class="filter-item">
                  <div class="f-section-name">融资期限：</div>
                  <div class="f-section-items-wrap">
                    <el-radio-group
                      v-model="term"
                      :border="false"
                      size="mini"
                      @change="pitchOn1('term')"
                    >
                      <el-radio-button
                        class="f-item"
                        v-for="(item, index) in financing"
                        :key="index"
                        v-model="term"
                        :label="item"
                        >{{ item.name }}</el-radio-button
                      >
                    </el-radio-group>
                  </div>
                </div>
                <div class="filter-item">
                  <div class="f-section-name">额度区间：</div>
                  <div class="f-section-items-wrap">
                    <el-radio-group
                      v-model="loan_price"
                      :border="false"
                      size="mini"
                      @change="pitchOn1('price')"
                    >
                      <el-radio-button
                        class="f-item"
                        v-for="(item, index) in lineOfLimit"
                        :key="index"
                        v-model="loan_price"
                        :label="item"
                        >{{ item.name }}</el-radio-button
                      >
                    </el-radio-group>
                  </div>
                </div>
              </div>
              <div class="fnproduct-footer-clear">
                <span class="fnproduct-footer-clear-btn" @click="empty"
                  >清空筛选条件</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="fnproduct-table-wrap">
          <div class="fnproduct-table">
            <div class="ant-table-wrapper">
              <div class="ant-spin-nested-loading">
                <div class="ant-spin-container">
                  <div
                    class="
                      ant-table ant-table-default ant-table-scroll-position-left
                    "
                  >
                    <div class="ant-table-content">
                      <div class="ant-table-body">
                        <table class="">
                          <colgroup>
                            <col />
                            <col style="width: 440px; min-width: 440px" />
                            <col style="width: 130px; min-width: 130px" />
                            <col style="width: 130px; min-width: 130px" />
                          </colgroup>
                          <thead class="ant-table-thead">
                            <tr>
                              <th class="">
                                <span class="ant-table-header-column"
                                  ><div>
                                    <span class="ant-table-column-title"
                                      >产品名称</span
                                    ><span
                                      class="ant-table-column-sorter"
                                    ></span></div
                                ></span>
                              </th>
                              <th class="ant-table-row-cell-break-word">
                                <span class="ant-table-header-column"
                                  ><div>
                                    <span class="ant-table-column-title"
                                      >产品明细</span
                                    ><span
                                      class="ant-table-column-sorter"
                                    ></span></div
                                ></span>
                              </th>
                              <th class="ant-table-row-cell-break-word">
                                <span class="ant-table-header-column"
                                  ><div>
                                    <span class="ant-table-column-title"
                                      >成功率</span
                                    ><span
                                      class="ant-table-column-sorter"
                                    ></span></div
                                ></span>
                              </th>
                              <th
                                class="
                                  ant-table-row-cell-break-word
                                  ant-table-row-cell-last
                                "
                              >
                                <span class="ant-table-header-column"
                                  ><div>
                                    <span class="ant-table-column-title"
                                      >操作</span
                                    ><span
                                      class="ant-table-column-sorter"
                                    ></span></div
                                ></span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="ant-table-tbody">
                            <tr
                              class="
                                ant-table-row
                                fnproduct-table-tr
                                ant-table-row-level-0
                              "
                              v-for="(item, index) in pagination.data"
                              :key="index"
                            >
                              <td class="">
                                <div class="productname">
                                  <div class="logo">
                                    <img
                                      :src="
                                        domainName +
                                        item.mechanism.mechanism_image
                                      "
                                      alt="logo"
                                    />
                                  </div>
                                  <div class="text">
                                    <div class="text-title">
                                      {{ item.product_name }}
                                    </div>
                                    <div class="text-cont">
                                      适用区市：
                                      <span>{{ item.regionlist2 }}</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td class="ant-table-row-cell-break-word">
                                <div>
                                  <div class="productdetails">
                                    <div class="productdetails-rate-amount">
                                      <div>
                                        利率区间：
                                        <span class="red-text"
                                          >{{ item.min_interest_rate }}%~{{
                                            item.max_interest_rate
                                          }}%</span
                                        >
                                      </div>
                                      <div class="productdetails-left">
                                        融资期限：
                                        <span class="red-text"
                                          >{{ item.min_term }}月~{{
                                            item.max_term
                                          }}月</span
                                        >
                                      </div>
                                    </div>
                                    <div class="productdetails-guarantee">
                                      <div>
                                        额度区间：
                                        <span class="red-text"
                                          >{{ item.min_loan_price }}万~{{
                                            item.max_loan_price
                                          }}万</span
                                        >
                                      </div>
                                      担保方式：保证
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td class="ant-table-row-cell-break-word">
                                <div class="success">
                                  <div class="success-rate-text">
                                    撮合成功率：
                                  </div>
                                  <div class="success-logo">
                                    <ul
                                      class="ant-rate ant-rate-disabled"
                                      tabindex="-1"
                                      role="radiogroup"
                                    >
                                    <li
                                        class="ant-rate-star ant-rate-star-zero"
                                        v-for="(item, index) in item.ratesuccess"
                                        :key="index"
                                      >
                                        <div
                                          role="radio"
                                          aria-checked="true"
                                          aria-posinset="2"
                                          aria-setsize="5"
                                          tabindex="0"
                                        >
                                          <div class="ant-rate-star-first">
                                            <i
                                              aria-label="图标: star"
                                              class="anticon anticon-star"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                class=""
                                                data-icon="star"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                                                ></path></svg
                                            ></i>
                                          </div>
                                          <div class="">
                                            <i
                                              aria-label="图标: star"
                                              class="anticon anticon-star"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                class=""
                                                data-icon="star"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                                                ></path></svg
                                            ></i>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        class="ant-rate-star ant-rate-star-zero"
                                        v-for="(item, index) in 5-item.ratesuccess"
                                        :key="index"
                                      >
                                        <div
                                          role="radio"
                                          aria-checked="true"
                                          aria-posinset="2"
                                          aria-setsize="5"
                                          tabindex="0"
                                        >
                                          <div class="ant-rate-star-first">
                                            <i
                                              aria-label="图标: star"
                                              class="anticon anticon-star"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                class=""
                                                data-icon="star"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                                                ></path></svg
                                            ></i>
                                          </div>
                                          <div class="ant-rate-star-second">
                                            <i
                                              aria-label="图标: star"
                                              class="anticon anticon-star"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                class=""
                                                data-icon="star"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
                                                ></path></svg
                                            ></i>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td class="ant-table-row-cell-break-word">
                                <div @click="viewDetails(item.id)">
                                  <a>查看</a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-global-body-pagination">
              <!-- <div
                v-if="jumperShow"
                class="
                  ant-pagination-options-quick-jumper
                  ant-pagination
                  ant-table-pagination
                "
              >
                跳至<input style="text-align: center" type="text" value="1" />页
              </div> -->
              <span class="count">共 {{ pagination.total || 0 }} 条记录</span>
              <div class="block ant-pagination ant-table-pagination">
                <el-pagination
                  background
                  @current-change="handleCurrentChange"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="pagination.total"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="product-market-footer">
          <!-- <img
            src="@/assets/home/data/data01/2340ba936cb210e1619fb5fd1aa474a7.png"
          /> -->
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";
import getProductList from "@/api/api";
export default {
  name: "loan",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      options: [],
      showCollect: false,
      jumperShow: true,
      mechanism_name: "",
      pagination: {},
      term: "", //融资期限
      loan_price: "", //融资金额
      getfrom: {
        mechanism_id: "", //机构id
        guaranteeType: "", //担保方式
        regionlist: "", //适用区市
        mechanism_type: "", //机构类型
        min_term: "", //最小融资期限
        max_term: "", //最大融资期限
        min_loan_price: "", //最小融资金额
        max_loan_price: "", //最大融资金额
        page: "",
        product_name: "",
      },
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
      mechanism: [
        //机构类型
        { code: 0, name: "银行" },
        { code: 1, name: "担保机构" },
        { code: 2, name: "融租机构" },
        { code: 3, name: "保险机构" },
        { code: 4, name: "保理机构" },
        { code: 5, name: "区域性股权交易市场" },
      ],
      naturelist: [
        //担保方式
        { code: 0, name: "信用" },
        { code: 1, name: "保证" },
        { code: 2, name: "质押" },
        { code: 3, name: "抵押" },
        { code: 4, name: "保险" },
      ],
      financing: [
        //融资期限
        { code: 0, name: "0-3个月", min: 0, max: 3 },
        { code: 1, name: "3-6个月", min: 3, max: 6 },
        { code: 2, name: "6-12个月", min: 6, max: 12 },
        { code: 3, name: "12-36个月", min: 12, max: 36 },
        { code: 4, name: "36+个月", min: 36, max: "" },
      ],
      lineOfLimit: [
        //额度区间
        { code: 0, name: "0-100万", min: 0, max: 100 },
        { code: 1, name: "200万以下", min: 0, max: 200 },
        { code: 2, name: "300万以下", min: 0, max: 300 },
        { code: 3, name: "500万以下", min: 0, max: 500 },
        { code: 4, name: "1000万以下", min: 0, max: 1000 },
        { code: 5, name: "1000万以上", min: 1000, max: "" },
      ],
    };
  },
  computed: {
    mechanism1() {
      return this.$store.state.mechanism
    }
  },
   watch: {
    mechanism1() {
      // this.show = this.$store.state.show;
      // console.log(val)
      this.getfrom.mechanism_type = String(this.$store.state.mechanism - 1)
      this.getProductList(this.getfrom);
      this.getMechanism();
      document.documentElement.scrollTop = 0
    }
  },
  mounted() {
    this.getfrom.mechanism_type = this.$route.query.mechanism_type;
    this.getfrom.mechanism_id = this.$route.query.mechanism_id;
    this.mechanism_name = this.$route.query.mechanism_name;
    this.getProductList(this.getfrom);
    this.getMechanism();
    
  },
  methods: {
    Collect () {
      this.showCollect = !this.showCollect
    },
    handleCurrentChange(val) {
      this.getfrom.page = val;
      this.getProductList(this.getfrom);
    },
    pitchOn1(val) {
      if (val == "term") {
        this.getfrom.min_term = this.term.min; //最小融资期限
        this.getfrom.max_term = this.term.max; //最大融资期限
      } else if (val == "price") {
        this.getfrom.min_loan_price = this.loan_price.min; //最小融资金额
        this.getfrom.max_loan_price = this.loan_price.max; //最大融资金额
      }
      this.searchOn();
    },
    searchOn() {
      // 搜索
      this.getProductList(this.getfrom);
    },
    empty() {
      // 清空
      this.mechanism_name = ""
      this.getfrom.mechanism_id = ""; //机构id
      this.getfrom.guaranteeType = ""; //担保方式
      this.getfrom.regionlist = ""; //适用区市
      this.getfrom.mechanism_type = ""; //机构类型
      this.getfrom.min_term = ""; //最小融资期限
      this.getfrom.max_term = ""; //最大融资期限
      this.getfrom.min_loan_price = ""; //最小融资金额
      this.getfrom.max_loan_price = ""; //最大融资金额
      this.term = ""; //融资期限
      this.loan_price = ""; //融资金额
      this.getProductList(this.getfrom);
    },
    pitchOn(val) {
      // 选中
      this.getfrom.mechanism_id = val;
    },
    getProductList(data) {
      for (let key in data) {
          if (data[key] == undefined || data[key] == "") {
              delete data[key]; 
          }
      }
      this.$axios({
        //首页新闻
        method: "POST",
        url: "/api/index/getProductList",
        data: data,
      }).then((res) => {
        let { data } = res.data;
        this.pagination = data;
        this.pagination.data.map((item) => {
          item.regionlist1 = [];
          item.regionlist2 = "";
          if (item.ratesuccess == "") {
            item.ratesuccess = 0;
          }
          let a = item.regionlist.split(",");
          a.map((item2) => {
            this.regionlist.map((item3) => {
              if (item3.code == item2) {
                item.regionlist1.push(item3.name);
              }
            });
          });
          item.regionlist2 = item.regionlist1.join(",");
        });
        if (this.pagination.total <= 10) {
          this.jumperShow = false;
        }
      });
    },
    getMechanism() {
      this.$axios({
        //首页新闻
        method: "POST",
        url: "/api/index/getMechanism",
      }).then((res) => {
        let { data } = res.data;
        this.options = data;
      });
    },
    viewDetails(val) {
      //跳转产品详情
      this.$router.push({ path: "/productDetail", query: { productid: val } });
    },
  },
};
</script>
<style>
.f-section-items-wrap .el-radio-button:first-child .el-radio-button__inner {
  border-left: none;
}
.f-section-items-wrap .el-radio-button__inner {
  border: none;
  /* background: #2b6bf3; */
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background: #2b6bf3;
  border-radius: 4px;
}
</style>