<template>
<div class="go-back">
    <ul>
        <li>
            <div class="back-content">
                <img class="back-icon"  src="@/assets/home/data/data01/qq-on.png" alt="">
                <div class="content">
                    <span>QQ</span>
                    <span>616599791@qq.com</span>
                </div>
            </div>
            <div class="back">
                <img class="img1" src="@/assets/home/data/data01/qq.png" alt="">
                <img class="img2" src="@/assets/home/data/data01/qq-on.png" alt="">
                <span>QQ咨询</span>
            </div>
        </li>
        <li>
            <div class="back-content">
               <img class="qrCode" src="@/assets/home/data/data01/qrCode.png" alt="">
            </div>
            <div class="back">
                <img class="img1" src="@/assets/home/data/data01/wx.png" alt="">
                <img class="img2" src="@/assets/home/data/data01/wx-on.png" alt="">
                <span>企业微信</span>
            </div>
        </li>
        <li>
            <div class="back-content">
                <img class="back-icon" src="@/assets/home/data/data01/ph-on.png" alt="">
                <div class="content">
                    <span>电话</span>
                    <span>0795-5255110</span>
                </div>
            </div>
            <div class="back">
                <img class="img1" src="@/assets/home/data/data01/ph.png" alt="">
                <img class="img2" src="@/assets/home/data/data01/ph-on.png" alt="">
                <span>联系电话</span>
            </div>
        </li>
        <li>
            <div v-if="topInfo" class="back" @click="goTop" ref="top">
                <img class="img1" src="@/assets/home/data/data01/top-on.png" alt="">
                <img class="img2" src="@/assets/home/data/data01/top-on.png" alt="">
                <span>返回顶部</span>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
        topInfo: false
    }
  },
  mounted () {
      window.addEventListener("scroll",this.showbtn,true);
  },
  methods: {
      showbtn(){
          let that = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          that.scrollTop = scrollTop
          if (scrollTop < 300) {
              this.topInfo = false
          } else {
              this.topInfo = true
          }
       },
      goTop () {
        var timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 20); 
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
            clearInterval(timer);
        }
        },30)
      }
  }
}
</script>

<style lang="less" scoped>
.go-back {
    position: fixed;
    bottom: 100px;
    right: 0;
    z-index: 9999;
    ul {
        li {
            cursor: pointer;
            display: flex;
            justify-content: flex-end;
            position: relative;
            .back {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #ffffff;
                width: 78px;
                height: 78px;
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
                img {
                    width: 25px;
                    height: 25px;
                    margin-bottom: 10px;
                }
                .img1 {
                    display: flex;
                }
                .img2 {
                    display: none;
                }
                span {
                    color: #333;
                    font-size: 14px;
                }
            }
            .back-content {
                position: absolute;
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                right: 78px;
                display: none;
                align-items: center;
                min-width: 200px;
                min-height: 78px;
                background: rgba(246,117,36);
                .back-icon {
                    width: 25px;
                    height: 25px;
                    margin: 0 20px 0 10px;
                }
                .qrCode {
                    width: 200px;
                    height: 200px;
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    span {
                        width: 100%;
                        text-align: left;
                        display: inline-block;
                        color: #ffffff;
                    }
                }
            }
            
        }
        li:hover {
            transition: all .5s;
            .back {
                transition: all .5s;
                background: rgba(246,117,36);
                border-left: 1px solid rgba(246,117,36);
                .img1 {
                    display: none;
                }
                .img2 {
                    display: flex;
                }
                span {
                    color: #ffffff;
                }
            }
            .back-content {
                animation: fadein 1s;
                display: flex;
            }
        }
        li:last-child {
            .back {
                background: rgba(246,117,36);
                border-bottom: 1px solid #ccc;
                span {
                    color: #ffffff;
                }
            }
            
        }
    }
}
</style>