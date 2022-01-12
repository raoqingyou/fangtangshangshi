<template>
  <div id="root" class="main-layout ant-layout">
    <div class="page-content ant-layout-content">
      <section class="login-form-container">
        <h2 class="login-form-title">
          <img
            src="@/assets/home/data/data01/49dc9f0720eaec57162c44464b7cad6b.png"
            type="rollback"
            class="go-back"
            @click="reverse"
          />
        </h2>
        <div class="login-form">
          <div class="login-title">
            <img
              src="@/assets/home/data/data01/4ca6bff0fc6b53dfe9146f23b55d332b.png"
            />
            <span v-if="logIndex == 1">企业用户登录</span>
            <span v-if="logIndex == 2">金融机构用户登录</span>
            <img
              src="@/assets/home/data/data01/7e0344cf720548081c5c2c5c4997a657.png"
            />
          </div>
          <el-form
            ref="form"
            :model="form"
            label-width="80px"
            class="ant-form ant-form-horizontal basic-form login-form-body"
          >
            <div class="form-content">
              <div class="form-header"><span>账户名：</span></div>
              <el-input
                placeholder="请输入密码"
                v-model="form.phone"
              ></el-input>
            </div>
            <div class="form-content">
              <div class="form-header"><span>密码：</span></div>
              <el-input
                placeholder="请输入密码"
                v-model="form.password"
                show-password
              ></el-input>
            </div>
            <div class="form-btn" @click="login"><span>登录</span></div>
            <a v-if="logIndex == 1" @click="register(1)">立即注册账户</a>
            <!-- <a v-if="logIndex == 2" @click="register(2)">立即注册账户</a> -->
            <!-- <a class="forget-password-text">忘记密码</a> -->
          </el-form>

          <div class="login-decorate"></div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from "@/view/components/Header";
import Footer from "@/view/components/Footer";
export default {
  name: "login",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      logIndex: 0,
      form: {
        phone: "", //手机号
        password: "",
      },
    };
  },
  mounted() {
    this.logIndex = this.$route.query.logIndex;
  },
  methods: {
    login() {
      this.$store.state.show = false
      this.$store.state.enterpriseIndex = 0;
      this.$store.state.myIndex = -1;
      if (this.logIndex == 1) {
        this.$axios({
          // 企业端
          method: "POST",
          url: "/api/enterprise/login",
          data: this.form,
        }).then((res) => {
          let { data, code, msg } = res.data;
          if (code == 1) {
            this.$store.state.token = data;
            this.$store.state.logIndex = this.logIndex;
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            this.$router.push({ path: "/institution" });
          } else {
            this.$message({
              message: msg,
              type: 'error'
            });
          }
        });
      } else if (this.logIndex == 2) {
        this.$axios({
          //机构端登录
          method: "POST",
          url: "/api/mechanism/login",
          data: this.form,
        }).then((res) => {
          let { data, code, msg } = res.data;
          if (code == 1) {
            this.$store.state.token = data;
            this.$store.state.logIndex = this.logIndex;
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            this.$router.push({ path: "/management" });
          } else {
            this.$message({
              message: msg,
              type: 'error'
            });
          }
        });
      }
    },
    reverse() {
      this.$router.push({ path: "/" });
    },
    register(val) {
      // if (val == 1) {
      //   this.$router.push({ path: "/register1" });
      // } else if (val ==2) {
        this.$router.push({ path: "/register" });
      // }
      
    },
  },
};
</script>
<style lang="less" scoped>
.form-content {
  margin-bottom: 10px;
  .form-header {
    padding: 10px 0;
    span {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
.form-btn {
  width: 100%;
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border-radius: 4px;
  margin: 40px 0 5px 0;
  cursor: pointer;
  span {
    font-size: 18px;
  }
}
</style>
