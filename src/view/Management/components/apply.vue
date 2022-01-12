<template>
  <div id="apply" class="applyContent">
    <div class="details">
      <ul class="details-ul">
         <li v-if="pagination.total == 0" style="border-bottom: none">
          <el-empty description="暂无数据" ></el-empty>
        </li>
        <li v-for="(item, index) in tableData" :key="index">
          <div class="enterprise">
            <div class="liName">
              <span class="liTitle">{{ item.enterprise.name }}</span
              ><span class="liState">申请中</span>
            </div>
            <div class="btn">
              <div class="btnPass" @click="open(item)"><span>通过</span></div>
              <div class="btnOn" @click="reject(item)"><span>驳回</span></div>
            </div>
          </div>
          <span class="productName"
            >金融产品名称：{{ item.product.product_name }}</span
          >
          <div class="message">
            <span>企业法人：{{ item.enterprise.xingming }}</span>
            <span>企业联系电话：{{ item.enterprise.phone }}</span>
            <span>申请贷款金额：{{ item.price }}万元</span>
            <span>申请贷款期限：{{ item.repayment }}月</span>
          </div>
        </li>
       
      </ul>
      
      <div class="applyPagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="pagination.total"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogFormVisible">
      <el-form>
        <span class="form-span" v-if="!value.show">你确定通过{{ value.name }}申请的{{ value.product_name }}吗</span>
        <span class="form-span" v-if="value.show">你确定驳回{{ value.name }}申请的{{ value.product_name }}吗</span>
        <el-form-item label="驳回理由" v-if="value.show">
          <el-input v-model="message" style="width：80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">  
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </div>
    </el-dialog>
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
      dialogFormVisible: false,
      message: '',
      value: {},
      token: {}
    };
  },
  mounted() {
    this.token = this.$store.state.token;
    this.applylist(this.token.token);
  },
  methods: {
    applylist(val) {
      this.$axios({
        // 机构端信息 产品申请列表
        method: "POST",
        url: "/api/mechanism/applylist",
        headers: { token: val },
        data: {
          status: 0,
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
    open(val) { // 通过
      this.dialogFormVisible = true
      this.value.name = val.enterprise.name
      this.value.product_name = val.product.product_name
      this.value.show = false
      this.value.id = val.id
    },
    reject(val) { // 驳回
      this.dialogFormVisible = true
      this.value.name = val.enterprise.name
      this.value.product_name = val.product.product_name
      this.value.show = true
      this.value.id = val.id
      this.message = ''
    },
    cancel () {
      this.dialogFormVisible = false
    },
    ok () {
      this.$store.state.callBack = 0
      let token = this.$store.state.token;
      if (this.value.show) {
        this.changeapply(token, this.value.id, 4)
      } else {
        this.changeapply(token, this.value.id, 1)
      }
      
    },
    changeapply(token, val, status) {
      let data = {}
      data.status = status
      data.id = val
      console.log(token)
      if (this.value.show) {
        data.message = this.message
      }
      this.$axios({
        // 机构端信息 产品申请列表
        method: "POST",
        url: "/api/mechanism/changeapply",
        headers:token,
        data:data,
      }).then((res) => {
        this.dialogFormVisible = false
        let {data,code,msg} = res.data
        if (code == 1) {
           this.$message({
              message: msg,
              type: 'success'
            });
          this.applylist(this.token.token);
          this.$forceUpdate()
        } else {
          this.$message({
              message: msg,
              type: 'error'
          });
        }
      })
    },
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
    cursor: pointer;
  }
  .btnOn {
    display: flex;
    cursor: pointer;
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
::-webkit-scrollbar{width:0;}
</style>
<style lang="less" scoped>
.applyContent {
  margin-left: 24px;
  width: 894px;
  .details {
    background: #ffffff;
    padding: 0 0 45px 0;
    .details-ul {
      background: #ffffff;
      max-height: 675px;
      min-height: 300px;
      overflow-y: scroll;
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
          padding: 0 216px 24px 24px;
        }
      }
    }
    .applyPagination {
      padding: 40px 40px 0 0;
      text-align: right;
    }
  }
  .form-span {
    display: flex;
    margin-bottom: 10px;
    font-size: 18px;
  }
}
</style>