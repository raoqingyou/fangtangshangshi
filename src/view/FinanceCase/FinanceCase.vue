<template>
  <div id="financeCase">
        <main class="page-content ant-layout-content">
          <div class="finacing-wrap">
            <div class="financing-case">融资案例</div>
            <div class="financing-table-wrap">
              <div class="financing-table">
                <div class="ant-table-wrapper">
                  <div class="ant-spin-nested-loading">
                    <div class="ant-spin-container">
                      <div class="ant-table ant-table-default ant-table-scroll-position-left">
                        <div class="ant-table-content">
                          <div class="ant-table-body">
                            <table class="">
                              <colgroup>
                                <col />
                                <col style="width: 200px; min-width: 200px" />
                              </colgroup>
                              <thead class="ant-table-thead">
                                <tr>
                                  <th class="">
                                    <span class="ant-table-header-column">
                                      <div>
                                        <span class="ant-table-column-title">融资案例名称</span>
                                        <span class="ant-table-column-sorter"></span>
                                      </div>
                                    </span>
                                  </th>
                                  <th class="ant-table-row-cell-break-word ant-table-row-cell-last">
                                    <span class="ant-table-header-column">
                                      <div>
                                        <span class="ant-table-column-title">发布时间</span>
                                        <span class="ant-table-column-sorter"></span>
                                        </div>
                                      </span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="ant-table-tbody">
                                <tr class="ant-table-row ant-table-row-level-0" data-row-key="index" v-for="(item,index) in pagination.data" :key="index" @click="skip(item.id)">
                                  <td class="">
                                    <div style="cursor: pointer">
                                      {{item.title}}
                                    </div>
                                  </td>
                                  <td class="ant-table-row-cell-break-word">
                                  {{changeTimeDate(item.createtime)}}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div v-if='jumperShow' class="ant-pagination-options-quick-jumper ant-pagination ant-table-pagination">
                          跳至<input style="text-align: center;" type="text" value="1" />页
                      </div>
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
                <span class="financing-table-total">共{{pagination.total}}条记录</span>
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
  name: "financeCase",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      jumperShow: true,
      pagination: [],
    };
  },
  mounted () {
    this.getNewsList({type:'financing',page:1})
  },
  methods: {
    handleCurrentChange (val) {
      this.getNewsList({type:'financing',page:val})
    },
    getNewsList(data) {
      for (let key in data) {
        if (data[key] == undefined || data[key] == "") {
          delete data[key];
        }
      }
    this.$axios({  //机构列表
      method: 'POST',
      url: '/api/index/getNewsList',
      data: data
    }).then(res=>{
      let { data } = res.data
      this.pagination = data
      if (this.pagination.total <= 10) {
        this.jumperShow = false
      }
    })
  },
  skip (val) { //跳转新闻详情
    this.$router.push({path:'/noticeDetail', query:{newsid:val}})
    }
  }
 
};
</script>