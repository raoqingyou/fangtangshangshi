<template>
  <div class="home">
    <main class="page-content ant-layout-content">
      <div class="tourist-home-wrap">
        <div class="tourist-home-body">
          <div class="dynamic-info-wrapper">
            <div class="left-box dynamic-info-item">
              <img
                src="@/assets/home/data/data01/80c7813ae3a1f96f66d7011d020697fa.png"
              />
              <div
                class="slick-slider slick-vertical slick-initialized"
                dir="ltr"
              >
                <button
                  type="button"
                  data-role="none"
                  class="slick-arrow slick-prev"
                  style="display: block"
                >
                  Previous
                </button>
                <div class="slick-list" style="height: 55px">
                  <div class="slick-track" style="height: 660px">
                    <div class="block">
                      <el-carousel :interval="5000" direction="vertical">
                        <el-carousel-item v-for="item in 8" :key="item">
                          <div
                            data-index="-1"
                            tabindex="-1"
                            class="slick-slide slick-cloned"
                            aria-hidden="true"
                            style="width: 540px"
                          >
                            <div>
                              <div
                                class="dynamic-info"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                <span class="title"
                                  >高安***有限公司成功入驻金融服务平台</span
                                ><span class="time">2021-07-31</span>
                              </div>
                            </div>
                          </div>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-role="none"
                  class="slick-arrow slick-next"
                  style="display: block"
                >
                  Next
                </button>
              </div>
            </div>
            <div class="right-box dynamic-info-item">
              <img
                src="@/assets/home/data/data01/80c7813ae3a1f96f66d7011d020697fa.png"
              />
              <div
                class="slick-slider slick-vertical slick-initialized"
                dir="ltr"
              >
                <button
                  type="button"
                  data-role="none"
                  class="slick-arrow slick-prev"
                  style="display: block"
                >
                  Previous
                </button>
                <div class="slick-list" style="height: 55px">
                  <div class="slick-track" style="height: 660px">
                    <div class="block">
                      <el-carousel :interval="5000" direction="vertical">
                        <el-carousel-item v-for="item in 8" :key="item">
                          <div
                            data-index="-1"
                            tabindex="-1"
                            class="slick-slide slick-cloned"
                            aria-hidden="true"
                            style="width: 540px"
                          >
                            <div>
                              <div
                                class="dynamic-info"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                              >
                                <span class="title"
                                  >高安***有限公司成功入驻金融服务平台</span
                                ><span class="time">2021-07-31</span>
                              </div>
                            </div>
                          </div>
                        </el-carousel-item>
                      </el-carousel>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-role="none"
                  class="slick-arrow slick-next"
                  style="display: block"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div class="nav-data-wrap">
            <div class="nav-data-boxs">
              <div class="nav-data-box change" @click="Registered(1)">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.zcqy }}</span
                    ><span class="unit">家</span>
                  </div>
                  <div class="display-text">注册企业</div>
                </div>
                <img
                  src="@/assets/home/data/data01/42a6312a290ccbe83e0d0eb5131a1fb6.png"
                />
              </div>
              <div class="nav-data-box">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.sqrzqy }}</span
                    ><span class="unit">家</span>
                  </div>
                  <div class="display-text">申请融资企业</div>
                </div>
                <img
                  src="@/assets/home/data/data01/1fdf72c266494ba486be929331c10fce.png"
                />
              </div>
              <div class="nav-data-box">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.hzjg }}</span
                    ><span class="unit">家</span>
                  </div>
                  <div class="display-text">合作机构</div>
                </div>
                <img
                  src="@/assets/home/data/data01/1227e3a4faaa8789bfa1b4ae1e162fe0.png"
                />
              </div>
              <div class="nav-data-box">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.fbproductnumber }}</span
                    ><span class="unit">个</span>
                  </div>
                  <div class="display-text">发布产品</div>
                </div>
                <img
                  src="@/assets/home/data/data01/152039b5dd57e5d0e22fd257a6038cbb.png"
                />
              </div>
              <div class="nav-data-box">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.rzmoney }}</span
                    ><span class="unit">亿</span>
                  </div>
                  <div class="display-text">融资金额</div>
                </div>
                <img
                  src="@/assets/home/data/data01/195976796d3bca90fd3982915685e15d.png"
                />
              </div>
              <div class="nav-data-box">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.xuqiumoney }}</span
                    ><span class="unit">亿</span>
                  </div>
                  <div class="display-text">融资需求</div>
                </div>
                <img
                  src="@/assets/home/data/data01/14f043fa222d1560d569f01dca2850f9.png"
                />
              </div>
              <div class="nav-data-box" @click="Registered(2)">
                <div class="nav-data-text">
                  <div class="num-text">
                    <span class="num">{{ this.majproduct }}</span
                    ><span class="unit">个</span>
                  </div>
                  <div class="display-text">亿元以上的重大项目</div>
                </div>
                <img
                  src="@/assets/home/data/data01/great.png"
                />
              </div>
            </div>
          </div>
          <div class="product-cards-wrapper">
            <div class="home-box-title">
              <img
                src="@/assets/home/data/data01/4ca6bff0fc6b53dfe9146f23b55d332b.png"
              />
              <h2>金融产品</h2>
              <img
                src="@/assets/home/data/data01/7e0344cf720548081c5c2c5c4997a657.png"
              />
            </div>
            <div class="product-cards-body">
              <div
                class="ant-row"
                style="margin-left: -5px; margin-right: -5px"
              >
                <div
                  class="ant-col ant-col-6 left-box-wrapper"
                  style="padding-left: 5px; padding-right: 5px"
                >
                  <img
                    src="@/assets/home/data/data01/d390e4943a39cd35de662357e240e029.png"
                    class="left-box-img"
                  />
                  <div class="left-box">
                    <div class="left-box-title">特色产品</div>
                    <div class="more-product" @click="skipMore">
                      <span class="more-product-text">查看更多</span>
                      <img
                        src="@/assets/home/data/data01/bd17e92863f20738794c47d20d07ad21.png"
                        class="more-product-icon"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="ant-col ant-col-6 product-box-wrapper"
                  style="padding-left: 5px; padding-right: 5px"
                  v-for="(item, index) in special"
                  :key="index"
                >
                  <div class="product-box">
                    <img
                      :src="domainName + item.mechanism.mechanism_image"
                      alt="logo"
                      class="product-card-logo"
                    />
                    <div class="product-card-title">
                      {{ item.product_name }}
                    </div>
                    <div class="product-card-loan">
                      {{ item.min_interest_rate }}%-{{
                        item.max_interest_rate
                      }}%
                    </div>
                    <div class="product-card-loan-text">年化贷款利率</div>
                    <div class="product-card-info-wrapper">
                      <div class="prod-card-info-section">
                        <span>额度区间：</span
                        ><span
                          >{{ item.min_loan_price }}万-{{
                            item.max_loan_price
                          }}万</span
                        >
                      </div>
                      <div class="product-card-hr"></div>
                      <div class="prod-card-info-section">
                        <span>贷款期限：</span
                        ><span>{{ item.min_term }}-{{ item.max_term }}月</span>
                      </div>
                    </div>
                    <!-- <router-link
                      class="view-detail-btn"
                      to="/productDetail"
                      tag="div"
                    >
                      查看详情</router-link
                    > -->
                    <div class="view-detail-btn" @click="viewDetails(item.id)">查看详情</div>
                    <div class="product-card-success">
                      成功对接<span class="product-card-success-num">{{
                        item.apply_count
                      }}</span
                      >项需求
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ant-row"
                style="margin-left: -5px; margin-right: -5px"
              >
                <div
                  class="ant-col ant-col-6 left-box-wrapper"
                  style="padding-left: 5px; padding-right: 5px"
                >
                  <img
                    src="@/assets/home/data/data01/66b3fccbaca2cd02a9cf314212022e36.png"
                    class="left-box-img"
                  />
                  <div class="left-box">
                    <div class="left-box-title">畅销产品</div>
                    <div class="more-product" @click="skipMore">
                      <span class="more-product-text yellow-text">查看更多</span
                      ><img
                        src="@/assets/home/data/data01/bc52c2c82fbcc47a0f65ddf1b61874ba.png"
                        class="more-product-icon"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="ant-col ant-col-6 product-box-wrapper"
                  style="padding-left: 5px; padding-right: 5px"
                  v-for="(item, index) in bestSeller"
                  :key="index"
                >
                  <div class="product-box">
                    <img
                      :src="domainName + item.mechanism.mechanism_image"
                      alt="logo"
                      class="product-card-logo"
                    />
                    <div class="product-card-title">
                      {{ item.product_name }}
                    </div>
                    <div class="product-card-loan">
                      {{ item.min_interest_rate }}%-{{
                        item.max_interest_rate
                      }}%
                    </div>
                    <div class="product-card-loan-text">年化贷款利率</div>
                    <div class="product-card-info-wrapper">
                      <div class="prod-card-info-section">
                        <span>额度区间：</span
                        ><span
                          >{{ item.min_loan_price }}万-{{
                            item.max_loan_price
                          }}万</span
                        >
                      </div>
                      <div class="product-card-hr"></div>
                      <div class="prod-card-info-section">
                        <span>贷款期限：</span
                        ><span>{{ item.min_term }}-{{ item.max_term }}月</span>
                      </div>
                    </div>
                    <div class="view-detail-btn" @click="viewDetails(item.id)">查看详情</div>
                    <div class="product-card-success">
                      成功对接<span class="product-card-success-num">{{
                        item.apply_count
                      }}</span
                      >项需求
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="policy-product-cards">
          <div class="home-box-title">
            <img
              src="@/assets/home/data/data01/4ca6bff0fc6b53dfe9146f23b55d332b.png"
            />
            <h2>政策性产品</h2>
            <img
              src="@/assets/home/data/data01/7e0344cf720548081c5c2c5c4997a657.png"
            />
          </div>
          <div
            class="ant-row detail"
            style="margin-left: -5px; margin-right: -5px"
          >
            <div
              class="product-box-wrapper"
              v-for="(item, index) in policy"
              :key="index"
            >
              <div class="logo">
                <img
                  :src="domainName+ item.mechanism.mechanism_image"
                  alt="logo"
                />
              </div>
              <div class="name">{{ item.product_name }}</div>
              <div class="rate">
                {{ item.min_interest_rate }}%-{{ item.max_interest_rate }}%
              </div>
              <div class="rateName">保费费率范围</div>
              <div class="interval">
                <div class="left">
                  <div class="unit">{{ item.min_loan_price }}万</div>
                  <div class="title">最低承保险额</div>
                </div>
                <div class="right">
                  <div class="unit">
                    {{ item.min_term }}-{{ item.max_term }}月
                  </div>
                  <div class="title">承保期限</div>
                </div>
              </div>
              <div class="itemDetail" @click="viewDetails(item.id)">查看产品</div>
            </div>
          </div>
          <div class="more" @click="skipMore">
            查看更多
            <img
              src="@/assets/home/data/data01/67e7ac587800953bdf3726e657fa6bd5.png"
            />
          </div>
        </div>
        <div class="four-steps-wrap">
          <div class="home-box-title">
            <img
              src="@/assets/home/data/data01/4ca6bff0fc6b53dfe9146f23b55d332b.png"
            />
            <h2>轻松贷款，仅需4步</h2>
            <img
              src="@/assets/home/data/data01/7e0344cf720548081c5c2c5c4997a657.png"
            />
          </div>
          <div class="four-step-box-wrapper">
            <div
              class="four-step-box"
              :class="fourShow == index ? 'four-step-box-hover' : ''"
              v-for="(item, index) in fourList"
              :key="index"
              @mouseenter="enter(index, 'four')"
            >
              <div class="step-image">
                <img :src="item.src1" />
              </div>
              <div class="circle-num">{{ index + 1 }}</div>
              <span class="step-name">{{ item.name }}</span>
            </div>
            <hr class="step-line" />
          </div>
        </div>
        <div class="footer-body">
          <img
            src="@/assets/home/data/data01/b0a1e431c46b87135645bcf92f6c0f60.png"
            class="footer-body-image"
          />
          <div class="content-policy-information">
            <div class="content-policy-cont">
              <div
                class="content-policy-information-box financing-information-box"
              >
                <div class="tabchange-box">
                  <ul>
                    <li
                      :class="classShow == index ? 'active' : ''"
                      v-for="(item, index) in tabchange"
                      :key="index"
                      @mouseenter="enter(index, 'tabchange')"
                    >
                      <router-link :to="item.router" tag="span">{{
                        item.name
                      }}</router-link>
                    </li>
                  </ul>
                  <div class="content-policy-information-content">
                    <div
                      class="slick-slider slick-vertical slick-initialized"
                      dir="ltr"
                    >
                      <button
                        type="button"
                        data-role="none"
                        class="slick-arrow slick-prev"
                        style="display: block"
                      >
                        Previous
                      </button>
                      <div
                        v-if="classShow == 0"
                        class="slick-list"
                        style="height: 312px"
                      >
                        <div class="slick-track" style="opacity: 1">
                          <div
                            data-index="0"
                            class="slick-slide"
                            tabindex="-1"
                            aria-hidden="true"
                            style="outline: none; width: 522px"
                             v-for="(item, index) in getNews"
                            :key="index"
                          >
                            <div>
                              <div
                                class="info-section"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                                @click="skip(item.id)"
                              >
                                <div class="info-section-title-wrap">
                                  <h2 class="info-section-title">
                                     {{ item.title }}
                                  </h2>
                                  <div class="info-section-time">
                                    {{ changeTimeDate(item.publishtime) }}
                                  </div>
                                </div>
                                <div class="info-section-content" style="">
                                  {{item.description}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="classShow == 1"
                        class="slick-list"
                        style="height: 312px"
                      >
                        <div class="slick-track" style="opacity: 1">
                          <div
                            data-index="0"
                            class="slick-slide"
                            tabindex="-1"
                            aria-hidden="true"
                            style="outline: none; width: 522px"
                             v-for="(item, index) in getPolicy"
                            :key="index"
                          >
                            <div>
                              <div
                                class="info-section"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                                @click="skip(item.id)"
                              >
                                <div class="info-section-title-wrap">
                                  <h2 class="info-section-title">
                                     {{ item.title }}
                                  </h2>
                                  <div class="info-section-time">
                                    {{ changeTimeDate(item.publishtime) }}
                                  </div>
                                </div>
                                <div class="info-section-content" style="">
                                  {{item.description}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="classShow == 2"
                        class="slick-list"
                        style="height: 312px"
                      >
                        <div class="slick-track" style="opacity: 1">
                          <div
                            data-index="0"
                            class="slick-slide"
                            tabindex="-1"
                            aria-hidden="true"
                            style="outline: none; width: 522px"
                             v-for="(item, index) in getJigou"
                            :key="index"
                          >
                            <div>
                              <div
                                class="info-section"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                                @click="skip(item.id)"
                              >
                                <div class="info-section-title-wrap">
                                  <h2 class="info-section-title">
                                     {{ item.title }}
                                  </h2>
                                  <div class="info-section-time">
                                    {{ changeTimeDate(item.publishtime) }}
                                  </div>
                                </div>
                                <div class="info-section-content" style="">
                                  {{item.description}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="classShow == 3"
                        class="slick-list"
                        style="height: 312px"
                      >
                        <div class="slick-track" style="opacity: 1">
                          <div
                            data-index="1"
                            class="slick-slide"
                            tabindex="-1"
                            aria-hidden="true"
                            style="outline: none; width: 522px"
                            v-for="(item, index) in getNotice"
                            :key="index"
                          >
                            <div>
                              <div
                                class="financing-item"
                                tabindex="-1"
                                style="width: 100%; display: inline-block"
                                @click="skip(item.id)"
                              >
                                <div class="financing-item-head">
                                  {{ changeTimeDate(item.publishtime) }}
                                </div>
                                <div
                                  class="financing-item-content"
                                  style="cursor: pointer"
                                >
                                  {{ item.title }}
                                </div>
                                <div class="financing-item-line"></div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <button
                        type="button"
                        data-role="none"
                        class="slick-arrow slick-next"
                        style="display: block"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scroll-wrap">
                <div class="scroll">
                  <div class="ant-carousel">
                    <div class="slick-slider slick-initialized" dir="ltr">
                      <div class="slick-list">
                        <div
                          class="slick-track"
                          style="
                            width: 3430px;
                            opacity: 1;
                          "
                        >
                               <el-carousel height='313px' :interval='5000' >
                                <el-carousel-item v-for="item in imageNews" :key="item" @click.native="skip(item.id)">
                                          <div
                                              data-index="-1"
                                              tabindex="-1"
                                              class="slick-slide slick-cloned"
                                              aria-hidden="true"
                                              style="width: 490px"
                                          >
                                        <div>
                                        <div
                                          tabindex="-1"
                                          style="width: 100%; display: inline-block;  position: relative;"
                                        >
                                        <img :src="domainName+item.image"  style="width: 100%; display: inline-block"/>
                                        <div class="scroll-info1 scroll-info2">
                                          <span class="scroll-title1"
                                            >{{item.title}}</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </el-carousel-item>
                              </el-carousel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-logo-wrap">
            <div class="footer-logo-body">
              <div class="home-box-title">
                <img
                  src="@/assets/home/data/data01/4ca6bff0fc6b53dfe9146f23b55d332b.png"
                />
                <h2>合作机构</h2>
                <img
                  src="@/assets/home/data/data01/7e0344cf720548081c5c2c5c4997a657.png"
                />
              </div>
              <div class="footer-logo-body">
                <div class="ant-carousel">
                  <div
                    class="slick-slider backLogo slick-initialized"
                    dir="ltr"
                  >
                    <div class="slick-list">
                      <div
                        class="slick-track"
                        style="
                          width: 16200px;
                          opacity: 1;
                          transform: translate3d(0px, 0px, 0px);
                        "
                      >
                        <div
                          v-if="butShow == 1"
                          data-index="0"
                          class="slick-slide slick-active slick-current"
                          tabindex="-1"
                          aria-hidden="false"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper" v-for="(item,index) in Cooperation" :key="index">
                                <img
                                  :src="domainName+item.mechanism_image"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- <div
                          v-if="butShow == 2"
                          data-index="1"
                          class="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/ad76ae1a66d659df3f84019fda01a98a.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/0e3fd8ee09666662e7317fa1e03c4420.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/94f5a492dc0dea7f6a270fbc4d161442.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/4725bd3962b836a68c585771eb7b3d2e.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/1f7f399dcd558467bf4f752f6d64d870.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/a73a2d32085af65f7bca0a024702ffaf.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/32ab0049058100f32373108c289192ad.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/1072c8a6e5b0f9d1fa8c6937fbfa0cc0.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/8c5c1f1e7ea7361f495227b1c57e4026.png"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="butShow == 3"
                          data-index="2"
                          class="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/947b6c640f5818e4f35ce1e14bdbfc82.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/0d7e7ce300ce07b7b1158bb9df18706b.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/0b0477b4357bc0769897e7ebe9178720.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/acf307c2408c6f133e61a5bb113d69b8.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/62c000db29e1a7cb3102117b1a7356c0.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/ec384830e2e1d5a1ff1a6e9b4f3554af.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/8b0666e4fcd7a8c56a12ffd25b43ae91.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/033c408fa5cf578e156d0c6572979959.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/f02096684498b106518ed6e5a5add5fd.png"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="butShow == 4"
                          data-index="3"
                          class="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/cbb39f6d83b252b9cf88462adc02b5ff.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/4c177cc24a75f79efbdeec295c3e8300.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/79679f1996a9287fb8ae874eac2890e2.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/e21d12b4bb690dd0d72bedaf9e6ec8b6.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/b65ad5475263d824af5db4062a6c972e.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/1c32366f733460fb98ce2b56bc06e4fa.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/11e8d80739f4415e8e54990479037f64.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/a6aa15b114f58a8a4a8f4243359e6224.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/19c56482997501411572a1638cb7d1fc.png"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="butShow == 5"
                          data-index="4"
                          class="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/c0f5954a889e7ab9b90c2f265bc77b8e.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/4fe981a769c46f3b26b41878f7bb5567.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/7e6dc6554f77673330bc3223cde67948.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/a40df47f3d8021ef780b666bb54f8e2f.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/28b8b871205cd4f8bdeb30c16a57e671.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/19c56482997501411572a1638cb7d1fc.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/a081cfe68fa91906d9b9e4201b16442c.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/70d9366ed67370bdbba8aae283069237.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/721d09ee597fda2a35953790041c6f59.png"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="butShow == 6"
                          data-index="5"
                          class="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/e05979ed3eeb7efdd36d004b55a7d671.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/34f0ad070f4ee1ccd2d5d8bd3968974b.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/53db576d10c67abdfe86d361685585c1.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/25009a0a74abe577cb3d9605ffe55cb7.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/b539bd0a6c76d900a8faa0024145c455.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/14524f0066da3672b6252d76624e7a61.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/1eb4941bb24fab15a340ff9af38bdae1.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/4fe981a769c46f3b26b41878f7bb5567.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/3694f3568d07912434c8f754a601e81f.png"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="butShow == 7"
                          data-index="6"
                          class="slick-slide"
                          tabindex="-1"
                          aria-hidden="true"
                          style="outline: none; width: 1080px"
                        >
                          <div>
                            <div
                              tabindex="-1"
                              class="ant-row"
                              style="width: 100%; display: inline-block"
                            >
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/6aa292143e793f93fa63981e5144510b.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/28c9d74c65d60ac5970c964855f220b3.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/6913d712581ec0c72cabe16012b67006.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/d46ce2445cc44ff68db8980f3af53a45.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/0061b5228732946ddc5d01bb425164a7.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/0616927f58ed8520799a8c44817c542d.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/c7a2f7183db7ae59e1d8826984cc1b86.png"
                                  class="bank-img"
                                />
                              </div>
                              <div class="ant-col ant-col-8 bank-img-wrapper">
                                <img
                                  src="@/assets/home/data/data01/341ec6f9e4128945b2252816f33e0175.png"
                                  class="bank-img"
                                />
                              </div>
                            </div>
                          </div>
                        </div> -->
                      </div>
                    </div>
                    <ul
                      class="slick-dots slick-dots-bottom"
                      style="display: block"
                    >
                      <li
                        :class="butShow == 1 ? 'slick-active' : ''"
                        @click="but(1)"
                      >
                        <button>1</button>
                      </li>
                      <!-- <li
                        :class="butShow == 2 ? 'slick-active' : ''"
                        @click="but(2)"
                      >
                        <button>2</button>
                      </li>
                      <li
                        :class="butShow == 3 ? 'slick-active' : ''"
                        @click="but(3)"
                      >
                        <button>3</button>
                      </li>
                      <li
                        :class="butShow == 4 ? 'slick-active' : ''"
                        @click="but(4)"
                      >
                        <button>4</button>
                      </li>
                      <li
                        :class="butShow == 5 ? 'slick-active' : ''"
                        @click="but(5)"
                      >
                        <button>5</button>
                      </li>
                      <li
                        :class="butShow == 6 ? 'slick-active' : ''"
                        @click="but(6)"
                      >
                        <button>6</button>
                      </li>
                      <li
                        :class="butShow == 7 ? 'slick-active' : ''"
                        @click="but(7)"
                      >
                        <button>7</button>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div>
          <div class="right-fixed-container">
            <div class="right-fixed-box-wrapper">
              <div class="right-fixed-box">
                <img
                  src="@/assets/home/data/data01/d2e153ea3785fac40334804298350b64.png"
                />
                <div>下载中心</div>
              </div>
              <div class="divide-line"></div>
              <div class="right-fixed-box">
                <img
                  src="@/assets/home/data/data01/8f43af6f3a40c08dc94417307d210958.png"
                />
                <div>反馈意见</div>
              </div>
              <div class="divide-line"></div>
              <a
                target="_blank"
                href="http://wpa.qq.com/msgrd?v=3&amp;uin=2909288329&amp;site=qq&amp;menu=yes"
                class="right-fixed-box"
                style="display: inline-block; width: 100%"
                ><img
                  src="@/assets/home/data/data01/4abcb048f99d6b804bcab9125dc626de.png"
                />
                <div style="color: rgb(255, 255, 255)">在线客服</div></a
              >
              <div class="divide-line"></div>
              <div class="right-fixed-box">
                <img
                  src="@/assets/home/data/data01/a88cf295012fcc83c46d0c83e039a7df.png"
                />
                <div>打开省平台</div>
              </div>
            </div>
            <div
              style="
                width: 140px;
                text-align: center;
                margin-left: -50px;
                position: relative;
                margin-bottom: 20px;
                margin-top: 10px;
              "
            >
              <img
                src="@/assets/home/data/data01/6dc4a05e0682b39106051704d27171b1.png"
                style="width: 80px; position: absolute; left: -40px"
              /><img
                src="@/assets/home/data/data01/25995fb8e1c6cfe6a98023b844c6fea8.png"
                style="width: 125px"
              /><img
                src="@/assets/home/data/data01/e04c35a031fe645e821499b3907af1e7.png"
                style="
                  width: 175px;
                  position: absolute;
                  bottom: -44px;
                  left: -20px;
                "
              />
            </div>
            <div class="pdf-container">
              <div class="feedBack-pdf">
                <img
                  src="@/assets/home/data/data01/3b4c8c49e1d5b2cb62b17db1aa3f4337.png"
                />
              </div>
              <div class="feedBack-pdf">
                <img
                  src="@/assets/home/data/data01/5d8266e99c3237b68fd6136445c97c64.png"
                />
              </div>
            </div>
            <i
              aria-label="图标: close-circle"
              tabindex="-1"
              class="anticon anticon-close-circle"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="close-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                ></path>
                <path
                  d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                ></path></svg></i
            ><video controls="" class="divide-video" autoplay="autoplay">
            </video>
          </div>
        </div> -->
      </div>
    </main>
    <GoBack></GoBack>
  </div>
</template>

<script>
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";
import GoBack from "@/view/components/goBack";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    GoBack
  },
  data() {
    return {
      fourShow: "",
      fourList: [
        {
          src1: require("@/assets/home/data/data01/c0c893af577afc319698297f8776b939.png"),
          name: "发起申请",
        },
        {
          src1: require("@/assets/home/data/data01/6711b14e54fc940af2068d79e47d2873.png"),
          name: "对接成功",
        },
        {
          src1: require("@/assets/home/data/data01/93cf74cc4932f5dcc89353586b178d21.png"),
          name: "金融审批",
        },
        {
          src1: require("@/assets/home/data/data01/81db018e68348df89f6363133064f536.png"),
          name: "融资成功",
        },
      ],
      classShow: 0,
      tabchange: [
        { router: "/newsInformation", name: "新闻资讯" },
        { router: "/policyGuidelines", name: "政策指南" },
        { router: "/jigou", name: "机构动态" },
        { router: "/notice", name: "公告台" },
      ],
      special: [], //特设产品
      bestSeller: [], //畅销产品
      policy: [], //政策性产品
      zcqy: "", //注册企业
      sqrzqy: "", //申请融资企业
      hzjg: "", //合作机构
      fbproductnumber: "", //发布产品
      rzmoney: "", // 融资金额
      xuqiumoney: "", // 融资需求
      butShow: 1,
      getNews: [], //新闻资讯
      getPolicy: [], //政策指南
      getJigou: [], //机构动态
      getNotice: [], //公告栏
      imageNews: [],
      Cooperation: [] // 合作机构
    };
  },
  mounted() {
    
    this.$store.state.show = true
    this.homeGetProductList(); //首页产品列表
    this.homeGetNews();
    this.homeInitData();
    this.homeCooperation(); //合作机构
  },
  methods: {
    skipMore () {
      this.$router.push({ path: "/financeMarket", query: { heaedShow: 2 } });
    },
    homeGetProductList() {
      this.$axios({
        //首页产品列表
        method: "POST",
        url: "/api/index/homeGetProductList",
      }).then((res) => {
        let { data } = res.data;
        this.special = data.special; //特色产品
        this.bestSeller = data.bestSeller; //畅销产品
        this.policy = data.policy; //政策性产品
      });
    },
    homeGetNews() {
      this.$axios({
        //首页新闻
        method: "POST",
        url: "/api/index/homeGetNews",
      }).then((res) => {
        let { data } = res.data;
        this.getNews = data.news; //新闻资讯
        this.getPolicy = data.policy; //政策指南
        this.getJigou = data.jigou; //机构动态
        this.getNotice = data.notice; //公告栏
        this.imageNews = data.imageNews
      });
    },
    homeInitData() {
      this.$axios({
        //首页新闻
        method: "POST",
        url: "/api/index/homeInitData",
      }).then((res) => {
        let { data } = res.data;
        this.zcqy = data.zcqy; //注册企业
        this.sqrzqy = data.sqrzqy; //申请融资企业
        this.hzjg = data.hzjg; //合作机构
        this.fbproductnumber = data.fbproductnumber; //发布产品
        this.rzmoney = data.rzmoney; // 融资金额
        this.xuqiumoney = data.xuqiumoney; // 融资需求
        this.majproduct = data.majproduct // 重大项目建设
      });
    },
    enter(val, name) {
      if (name == "tabchange") {
        this.classShow = val;
      } else if (name == "four") {
        this.fourShow = val;
      }
    },
    homeCooperation() {
        this.$axios({  //合作机构
          method: 'POST',
          url: '/api/index/homeCooperation',
        }).then(res=>{
          let { data } = res.data
          this.Cooperation = data
        })
    },
    but(val) {
      this.butShow = val;
    },
    Registered (val) { // 注册企业
      if (val == 1) {
        this.$store.state.show = false
        this.$router.push({ path: "/registeredEnterprise"});
      } else if (val == 2) {
        this.$store.state.show = false
        this.$router.push({ path: "/greatDetail"});
      }
      
    },
    skip(val) {
      //跳转新闻详情
      this.$store.state.show = false
      this.$router.push({ path: "/noticeDetail", query: { newsid: val } });
    },
    viewDetails(val) {
      //跳转产品详情
      this.$store.state.show = false
      this.$router.push({ path: "/productDetail", query: { productid: val } });
    }
  },
};
</script>

<style>
.el-carousel__item--card {
  width: 100% !important;
  
}
.el-carousel__item.is-active {
  z-index: 0;
}
.scroll-info2 {
 
  position: absolute;
  bottom: 20px;
  color: #fff;
  left: 5px;
}
</style>