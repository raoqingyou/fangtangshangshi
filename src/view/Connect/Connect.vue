<template>
  <div id="connect">
    <!-- <div id="root">
      <section class="main-layout ant-layout">
        <Header></Header> -->
        <main class="page-content ant-layout-content">
          <div class="cooperative-agencies-wrap">
            <div class="cooperative-agencies">
              <span class="title">联系我们</span>
            </div>
            <div
              id="container"
              class="area amap-container"
              style="position: relative; background: rgb(252, 249, 242)"
            >
              <object
                style="
                  display: block;
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  overflow: hidden;
                  pointer-events: none;
                  z-index: -1;
                "
                type="text/html"
                data="about:blank"
              ></object>
              <!-- <div class="amap-maps">
                <div class="amap-drags" style="">
                  <div class="amap-layers" style="transform: translateZ(0px)">
                    <canvas
                      class="amap-layer"
                      width="1080"
                      height="400"
                      style="
                        position: absolute;
                        z-index: 0;
                        top: 0px;
                        left: 0px;
                        display: block;
                        height: 400px;
                        width: 1080px;
                      "
                    ></canvas>
                    <div
                      class="amap-markers"
                      style="
                        position: absolute;
                        z-index: 120;
                        top: 200px;
                        left: 540px;
                      "
                    >
                      <div
                        class="amap-marker"
                        style="
                          top: -142px;
                          left: -149px;
                          z-index: 100;
                          transform: rotate(0deg);
                          transform-origin: 13px 30px;
                          display: block;
                        "
                      >
                        <div
                          class="amap-icon"
                          style="
                            position: absolute;
                            overflow: inherit;
                            opacity: 1;
                          "
                        >
                          <img
                            src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png"
                            style="top: 0px; left: 0px"
                          />
                        </div>
                      </div>
                    </div>
                    <canvas
                      class="amap-labels"
                      draggable="false"
                      width="1080"
                      height="400"
                      style="
                        position: absolute;
                        z-index: 99;
                        height: 400px;
                        width: 1080px;
                        top: 0px;
                        left: 0px;
                      "
                    ></canvas>
                  </div>
                  <div class="amap-overlays" style=""></div>
                </div>
              </div> -->
              <div id="container" style="width:800px; height:600px"></div>
              <div style="display: none"></div>
              <div class="amap-controls"></div>
              <a class="amap-logo"
                ><img src="https://webapi.amap.com/theme/v1.3/logo@1x.png"
              /></a>
              <div
                class="amap-copyright"
                style="display: none; visibility: visible"
              >
                <!--v1.4.16-->
                © 2021 AutoNavi <span class="amap-mcode">- GS(2019)6379号</span>
              </div>
            </div>
            <div class="connection-card">
              <div class="connection-card-left">
                <div class="connection-card-title">承办地址</div>
                <div class="connection-text">
                  <div class="connection-text-item">
                    <img
                      src="@/assets/home/data/data01/7792ab5fced196b1eddbd6f47d92368e.svg"
                    /><span class="connection-text-item-text"
                      >江西省高安市锦绣大道瑞阳湖对面行政中心3楼
                    </span>
                  </div>
                </div>
              </div>
              <div class="connection-card-right">
                <div class="connection-card-title">联系方式</div>
                <div class="connection-text">
                  <div
                    class="ant-row"
                    style="margin-left: -5px; margin-right: -5px"
                  >
                    <div
                      class="ant-col ant-col-12"
                      style="padding-left: 5px; padding-right: 5px"
                    >
                      <img
                        src="@/assets/home/data/data01/4f667ff88229bc171924a9c9192acef7.svg"
                        class="connection-text-logo-right"
                      /><span class="connection-text-cont-right"
                        >邮件：gaysb302@163.com</span
                      >
                    </div>
                    <div
                      class="ant-col ant-col-12"
                      style="padding-left: 5px; padding-right: 5px"
                    >
                      <img
                        src="@/assets/home/data/data01/328c901584b7d3efa407193d93fab643.svg"
                        class="connection-text-logo-right"
                      /><span class="connection-text-cont-right"
                        >邮编：330800</span
                      >
                    </div>
                  </div>
                </div>
                <div class="connection-text">
                  <div
                    class="ant-row"
                    style="margin-left: -5px; margin-right: -5px"
                  >
                    <div
                      class="ant-col ant-col-24"
                      style="padding-left: 5px; padding-right: 5px"
                    >
                      <img
                        src="@/assets/home/data/data01/0c1ae4c4fccbcbadb8ebc1a81e235cd5.svg"
                        class="connection-text-logo-right"
                      /><span class="connection-text-cont-right"
                        >电话：0795-5215110</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <!-- <Footer></Footer>
      </section>
    </div> -->
  </div>
</template>
<script>
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";
import AMap from 'AMap'
    export default {
        name: 'connect',
        methods: {
            loadmap(){
                let map = new AMap.Map('container', {
                    center: [115.369863, 28.420129],
                    resizeEnable: true,
                    zoom: 16,
                    // lang: 'en'
                })
                AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                    map.addControl(new AMap.ToolBar())
                    map.addControl(new AMap.Scale())
                })
            }
        },
        mounted() {   // created 方法不行
        this.loadmap();
        },
    }
</script>