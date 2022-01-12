<template>
  <div id="log" class="logContent">
    <div class="logHeader"><span></span>操作日志</div>
    <div class="logTable">
      <el-table
        :data="tableData"
        :columns="columns"
        style="width: 100%"
        :header-cell-style="{ background: '#F3F6FA', color: '#464646' }"
        max-height="700"
        header-align="center"
      >
        <!-- <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column> -->
        <el-table-column
          prop="enterprise_name"
          align="center"
          label="企业名称"
          width="220"
          show-overflow-tooltip="true"
        >
        </el-table-column>
        <!-- <el-table-column
          prop="operator"
          align="center"
          label="操作人"
          width="100"
        >
        </el-table-column> -->
        <el-table-column
          prop="logcontent"
          align="center"
          show-overflow-tooltip="true"
          label="操作日志"
          width="330"
        >
        </el-table-column>
        <el-table-column
          prop="createtime"
          align="center"
          label="操作时间"
          width="160"
        >
          <template slot-scope="scope">
            {{ changeTimeDate1(scope.row.createtime) }}
          </template>
        </el-table-column>
        <!-- <el-table-column prop="operationState" label="邮编" width="120"> </el-table-column> -->
        <el-table-column
          label="操作状态"
          align="center"
          prop="status_message"
          width="120"
        >
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row)"
              type="text"
              size="small"
              >{{ scope.row.status_message }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="logPagination">
        <el-pagination background layout="prev, pager, next" :total="pagination.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "log",
  data() {
    return {
      tableData: [],
      pagination: {
        current_page: 1,
        last_page: 0,
        per_page: 0,
        total: 0,
      },
    };
  },
  mounted() {
    let token = this.$store.state.token;
    this.actionlog(token);
  },
  methods: {
    actionlog(val) {
      this.$axios({
        // 操作日志接口
        url: "/api/mechanism/actionlog",
        headers: val,
      }).then((res) => {
        let { data, code } = res.data;
        this.pagination.current_page = data.current_page;
        this.pagination.last_page = data.last_page;
        this.pagination.per_page = data.per_page;
        this.pagination.total = data.total;
        this.tableData = data.data;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.logContent {
  margin-left: 24px;
  width: 894px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(187, 87, 87, 0.06);
  opacity: 1;
  border-radius: 8px;
  padding: 25px 40px 0 20px;
  .logHeader {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      margin-right: 15px;
      width: 6px;
      height: 18px;
      background: #387bf0;
    }
  }
  // .logTable {
  // }
  .logPagination {
    padding: 24px 0;
    text-align: right;
  }
}
</style>