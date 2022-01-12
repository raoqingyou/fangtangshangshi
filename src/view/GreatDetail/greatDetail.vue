<template>
<div class="great">
    <div class="great-tag"><div class="tag"><span>首页>重大项目建设</span></div></div>
    <div class="great-from">
        <ul>
            <li class="great-li" v-for="(item, index) in pagination.data" :key="index">
                <div class="li-title"><span>{{item.name}}</span><span @click="newlyClick(item)">{{item.nature}}</span></div>
                <div class="li-remark">{{item.product_content}}</div>
                <div class="li-tag">
                    <div class="label"><span>共投资：</span><span>{{item.investment}}万元</span></div>
                    <div class="label"><span>责任单位：</span><span>{{item.company}}</span></div>
                    <div class="label"></div>
                </div>
                <div class="li-tag">
                    <div class="label"><span>开工时间：</span><span>{{changeTimeDate(item.starttime)}}</span></div>
                    <div class="label"><span>预计竣工时间：</span><span>{{changeTimeDate(item.endtime)}}</span></div>
                    <div class="label"><span>挂点领导：</span><span>{{item.leader}}</span></div>
                </div>
            </li>
            <li class="pagination">
                <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :page-size="15"
                    layout="prev, pager, next"
                    :total="pagination.total"
                    >
                </el-pagination>
            </li>
        </ul>
    </div>
    <Modal
        v-model="modal1"
        footer-hide
        :mask-closable="false"
        :width="900"
        class-name="vertical-center-modal"
        >
        <div class="modal-content">
            <p slot="header" class="modal-header">
                <span>{{modalData.name}}</span>
            </p>
            <div class="label"><span>共投资：</span><span>{{modalData.investment}}万元</span></div>
            <div class="label"><span>责任单位：</span><span>{{modalData.company}}</span></div>
            <div class="label"><span>开工时间：</span><span>{{changeTimeDate(modalData.starttime)}}</span></div>
            <div class="label"><span>预计竣工时间：</span><span>{{changeTimeDate(modalData.endtime)}}</span></div>
            <div class="label"><span>建设性质：</span><span>{{modalData.nature}}</span></div>
            <div class="label"><span>挂点领导：</span><span>{{modalData.leader}}</span></div>
            <div class="label" style="width: 100%"><span style="width: 170px"> 建设内容及规模：</span><span>{{modalData.product_content}}</span></div>
        </div>
    </Modal>
</div>
</template>
<script>
export default {
  name: "",
  components: {
  },
  data() {
    return {
      modal1: false,
      pagination: {},
      getFrom: {
        keyword: '',
        page:''
      },
      modalData: {}
      
    };
  },
   mounted() {
     this.$store.state.show = false
    this.getMajorProduct()
  },
  methods: {
    handleCurrentChange (val) {
      this.getFrom.page = val
      this.getMajorProduct(this.getFrom)
    },
    getMajorProduct(data) {
    this.$axios({  //企业列表
      method: 'POST',
      url: '/api/index/getMajorProduct',
      data: data
    }).then(res=>{
      let { data } = res.data
      console.log(data)
      this.pagination = data
    //   if (this.pagination.total <= 10) {
    //     this.jumperShow = false
    //   }
    })
  },
  newlyClick (item) { //跳转企业详情
  this.modal1 = true
  this.modalData = item
   }
  }
};
</script>
<style lang="less" scoped>
/deep/.vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal{
        top: 0;
    }
}
 .modal-content {
        display: flex;
        flex-wrap: wrap;
        .modal-header {
            width: 100%;
            margin: 24px 0;
            padding-left: 32px;
            span {
                font-size: 20px;
                font-weight: 500;
                color: #333333;
            }
        }
        .label {
            width: 50%;
            display: flex;
            margin: 24px 0;
            span {
                font-size: 16px;
                color: #666666;
            }
            span:nth-child(1) {
                display: inline-block;
                text-align: right;
                width: 120px;
            }
        }
    }
.great {
    .great-tag {
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        background: rgba(243, 243, 243, 0.39);
        .tag {
            width: 1200px;
            margin: 0 auto;
            padding-left: 20px;
            span {
                font-size: 14px;
                color: #B8B8B8;
            }
        }
    }
    .great-from {
        width: 1200px;
        margin: 0 auto;
        padding: 40px 0;
        .great-li {
            width: 1200px;
            background: rgba(255, 255, 255, 0.39);
            box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
            border-radius: 8px;
            padding: 32px 56px 40px 32px;
            .li-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span:nth-child(1) {
                    font-size: 20px;
                    font-weight: 500;
                    color: #333333;
                }
                span:nth-child(2) {
                    cursor: pointer;
                    font-size: 26px;
                    font-weight: 500;
                    color: #387BF0;
                }
            }
            .li-remark {
                margin: 24px 0 48px 0;
                font-size: 16px;
                color: rgba(102, 102, 102, 0.6);
            }
            .li-tag {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 38px;
                .label {
                    width: 50%;
                    display: flex;
                    span {
                        font-size: 16px;
                        font-weight: 500;
                        color: #666666;
                    }
                    span:nth-child(1) {
                        display: inline-block;
                        text-align: right;
                        width: 120px;
                    }
                    span:nth-child(2) {
                        display: inline-block;
                    }
                }
            }
        }
        .pagination {
            display: flex;
            justify-content: flex-end;
            margin: 40px 0 0px 0;
        }
    }
   
}
</style>