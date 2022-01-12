<template>
<div id='BannerLinks'>
  <div class="banner-links">
          <div class="banner-links-container">
              <div class="banner-link" @click="byValue(1, 2)">
                  <img src="@/assets/home/data/data01/ca24f0edeb6a6638cceb8c0028aa96ba.png"/>
                  <span>我要贷款</span>
              </div>
            <div class="banner-link-line"></div>
              <div class="banner-link" @click="byValue(2, 2)">
                <img src="@/assets/home/data/data01/a62f9c04ff3c3a344a60206401282536.png"/>
                <span>我要担保</span>
              </div>
            <div class="banner-link-line"></div>
              <div class="banner-link" @click="byValue(3, 2)">
                <img src="@/assets/home/data/data01/07666146468ac7290cfe8bf02c10e195.png"/>
                <span>我要融资</span>
              </div>
            <div class="banner-link-line"></div>
              <div class="banner-link" @click="byValue(4, 2)">
                  <img src="@/assets/home/data/data01/b935060acc0c7f3b8bcbabeaff7d3231.png"/>
                  <span>我要保险</span>
              </div>
            <!-- <div class="banner-link-line"></div>
            <div class="banner-link"> 
              <img src="@/assets/home/data/data01/cb1a73bab83e9db2a43cd8afe96e5ea0.png"/>
              <span>我要服务</span>
            </div> -->
          </div>
        </div>
</div>
</template>
<script>
export default {
  name: 'BannerLinks',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    byValue (val, val1) {
      // console.log(val)
      // console.log(val1)
      if (val == 4) {
        this.$store.state.show = true
        this.$router.push({ path: "/newsInformation1" });
        // this.$emit('fromChild', val1)
      } else {
        this.$store.state.mechanism = val
        // console.log(this.$store.state.mechanism)
        this.$router.push({path:'/financeMarket', query:{mechanism_type: val-1}})
        this.$emit('fromChild', val1)
      }
      
    }
  }

}
</script>