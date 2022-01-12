<template>
  <div id="financeOrganization">
        <main class="page-content ant-layout-content">
          <div class="fnorz-wrap">
            <div class="fnorz-top">
              <div class="query-criteria">查询条件</div>
              <div class="select-information">
                <span class="organization-name">机构名称：</span>
                <input placeholder="请输入金融机构" type="text" class="ant-input" v-model="getFrom.keyword" style="width: 270px" />
                <button type="button" class="ant-btn ant-btn-primary" style="width: 65px; margin-left: 80px" @click="searchOn" >
                  <span>查 询</span>
                </button>
              </div>
            </div>
            <div class="fnorz-table-wrap">
              <div class="fnorz-table">
                <div class="ant-table-wrapper" style="background: rgb(255, 255, 255); margin: 0px auto" >
                  <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                      <div class="ant-table ant-table-default ant-table-scroll-position-left" >
                        <div class="ant-table-content">
                          <div class="ant-table-body">
                            <table class="">
                              <colgroup>
                                <col />
                                <col style="width: 200px; min-width: 200px" />
                                <col style="width: 150px; min-width: 150px" />
                              </colgroup>
                              <thead class="ant-table-thead">
                                <tr>
                                  <th class="">
                                    <span class="ant-table-header-column"><div>
                                        <span class="ant-table-column-title">机构名称</span>
                                        <span class="ant-table-column-sorter"></span>
                                        </div>
                                    </span>
                                  </th>
                                  <th class="ant-table-row-cell-break-word">
                                    <span class="ant-table-header-column"><div>
                                        <span class="ant-table-column-title">发布日期</span>
                                        <span class="ant-table-column-sorter"></span>
                                        </div>
                                    </span>
                                  </th>
                                  <th class="ant-table-row-cell-break-word ant-table-row-cell-last">
                                    <span class="ant-table-header-column">
                                      <div>
                                        <span class="ant-table-column-title">操作</span>
                                        <span class="ant-table-column-sorter"></span>
                                        </div>
                                      </span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="ant-table-tbody">
                                <tr class="ant-table-row ant-table-row-level-0" v-for='(item, index) in pagination.data' :key="index">
                                  <td class="">{{item.name}}</td>
                                  <td class="ant-table-row-cell-break-word">
                                    {{changeTimeDate(item.updatetime)}}
                                  </td>
                                  <td class="ant-table-row-cell-break-word" @click="skip(item.id,item.name)">
                                    <a>申请</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <!-- <div v-if='jumperShow' class="ant-pagination-options-quick-jumper ant-pagination ant-table-pagination">
                            跳至<input style="text-align: center;" type="text" value="1" />页
                      </div> -->
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
                <div class="fnorz-table-total ">共 {{pagination.total || 0}} 条记录</div>
              </div>
              
            </div>
          </div>
        </main>
  </div>
</template>
<script>
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";
export default {
  name: "financeOrganization",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      jumperShow: true,
      pagination: {},
      getFrom: {
        keyword: '',
        page:''
      }
      
    };
  },
   mounted() {
     this.$store.state.show = false
    this.getMechanismList()
  },
  methods: {
    handleCurrentChange (val) {
      this.getFrom.page = val
      this.getMechanismList(this.getFrom)
    },
    searchOn () { //查询
    this.getMechanismList(this.getFrom)
    },
    getMechanismList(data) {
    this.$axios({  //机构列表
      method: 'POST',
      url: '/api/index/getMechanismList',
      data: data
    }).then(res=>{
      let { data } = res.data
      this.pagination = data
      if (this.pagination.total <= 10) {
        this.jumperShow = false
      }
    })
  },
  skip (val,val2) { //跳转产品列表
    this.$router.push({path:'/financeMarket', query:{mechanism_id:val,mechanism_name:val2}})
    }
  }
};
</script>