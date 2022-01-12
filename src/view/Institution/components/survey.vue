<template>
  <div id="apply" class="applyContent">
    <div class="leftDetails">
      <ul>
        <li v-if="pagination.total == 0" style="border-bottom: none">
          <el-empty description="暂无数据" ></el-empty>
        </li>
        <li v-for="(item, index) in tableData" :key="index">
          <div class="enterprise">
            <div class="liName">
              <span class="liTitle">{{ item.mechanism.name }}</span
              ><span class="liState">调查</span>
            </div>
            <div class="logo">
              <img :src="domainName + item.mechanism.mechanism_image" alt="" />
            </div>
            <!-- <div class="btn">
              <div class="btnPass" @click="open"><span>通过</span></div>
              <div class="btnOn"><span>驳回</span></div>
            </div> -->
          </div>
          <!-- <span class="productName"></span> -->
          <div class="message">
            <span>{{ item.product.product_charact }}</span>
            <!-- <span>企业联系电话：15179900009</span>
              <span>申请贷款期限：12月</span> -->
          </div>
        </li>
      </ul>
      <div class="applyPagination">
         <el-pagination background layout="prev, pager, next" :total="pagination.total">
        </el-pagination>
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
          <li class="li-product" v-for="(item, index) in productData" :key="index">
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
      tableData: [],
      pagination: {
        current_page: 1,
        last_page: 0,
        per_page: 0,
        total: 0,
      },
      token: {},
      page: 1,
      productData: [
        {},{}
      ]
    };
  },
  mounted() {
    this.token = this.$store.state.token;
    this.applylist(this.token);
  },
  methods: {
     applylist(val) {
      this.$axios({
        // 获取产品申请列表
        method: "POST",
        url: "/api/enterprise/applylist",
        headers: val,
        data: {
          status: 1,
          page: this.page
        },
      }).then((res) => {
        let { data, code } = res.data;
        if (code == 1) {
          this.pagination.current_page = data.current_page;
          this.pagination.last_page = data.last_page;
          this.pagination.per_page = data.per_page;
          this.pagination.total = data.total;
          this.tableData = data.data;
        }
      });
    },
    handleCurrentChange (val) {
      this.page = val
      this.applylist(this.token);
    }
  },
};
</script>
<style lang="less">
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
.applyContent {
  margin-left: 24px;
  width: 894px;
  display: flex;
  justify-content: space-between;
  .leftDetails {
    width: 894px;
    background: #ffffff;
    padding: 0 0 20px 0;
    box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
    opacity: 1;
    border-radius: 8px;
    ul {
      max-height: 760px;
      min-height: 300px;
      overflow-y: scroll;
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
      border-radius: 8px;
      li {
        border-bottom: 1px solid #eeeeee;
        .enterprise {
          padding: 25px 40px 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .liName {
            display: flex;
            align-items: center;
            .liTitle {
              font-size: 24px;
              font-family: Source Han Sans CN;
              font-weight: 500;
              line-height: 41px;
              color: #333333;
            }
            .liState {
               display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 16px;
              width: 77px;
              height: 27px;
              background: rgba(56, 123, 240, 0.1);
              border-radius: 14px;
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              line-height: 24px;
              color: rgba(56, 123, 240, 1);
            }
          }
          .logo {
            img {
              width: 107px;
              height: 29px;
            }
          }
        }
        .productName {
          margin: 24px 0;
          display: inline-block;
          padding: 14px 15px 14px 32px;
          background: #f5f5f9;
          opacity: 1;
          border-radius: 4px;
        }
        .message {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 24px 24px 24px;
        }
      }
    }
    .applyPagination {
      padding: 20px 40px 0 0;
      text-align: right;
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