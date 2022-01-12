import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index/index'
import logIn from '@/view/logIn/logIn' //登录
import Management from '@/view/Management/index' //操作日志
import Home from '@/view/Home/Home'
import Loan from '@/view/Loan/Loan'
import FinanceMarket from '@/view/FinanceMarket/FinanceMarket'
import FinanceOrganization from '@/view/FinanceOrganization/FinanceOrganization'
import FinanceCase from '@/view/FinanceCase/FinanceCase'
import PolicyGuidelines from '@/view/PolicyGuidelines/PolicyGuidelines'
import Connect from '@/view/Connect/Connect' 
import NewsInformation from '@/view/Home/newsInformation' 
import NewsInformation1 from '@/view/Home/newsInformation1' 
import Notice from '@/view/Home/notice' 
import Jigou from '@/view/Home/jigou' 
import ProductDetail from '@/view/components/productDetail'
import NoticeDetail from '@/view/components/noticeDetail'
import RegisteredEnterprise from '@/view/RegisteredEnterprise/index' // 注册企业列表
import RegisteredDetail from '@/view/RegisteredEnterprise/detail' // 注册企业详情
import GreatDetail from '@/view/GreatDetail/greatDetail' // 重大项目建设
const originalPush = Router.prototype.push;
Router.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/loan',
          name: 'loan',
          component: Loan
        },
        {
          path: '/financeMarket',
          name: 'financeMarket',
          component: FinanceMarket
        },
        {
          path: '/financeOrganization',
          name: 'financeOrganization',
          component: FinanceOrganization
        },
        {
          path: '/registeredEnterprise',
          name: 'registeredEnterprise',
          component: RegisteredEnterprise
        },
        {
          path: '/registeredDetail',
          name: 'registeredDetail',
          component: RegisteredDetail
        },
        {
          path: '/financeCase',
          name: 'financeCase',
          component: FinanceCase
        },
        {
          path: '/policyGuidelines',
          name: 'policyGuidelines',
          component: PolicyGuidelines
        },
        {
          path: '/connect',
          name: 'connect',
          component: Connect
        },
        {
          path: '/newsInformation',
          name: 'newsInformation',
          component: NewsInformation
        },
        {
          path: '/newsInformation1',
          name: 'newsInformation1',
          component: NewsInformation1
        },
        {
          path: '/notice',
          name: 'notice',
          component: Notice
        },
        {
          path: '/jigou',
          name: 'jigou',
          component: Jigou
        },
        {
          path: '/productDetail',
          name: 'productDetail',
          component: ProductDetail
        },
        {
          path: '/noticeDetail',
          name: 'noticeDetail',
          component: NoticeDetail
        },
        {
          path: '/greatDetail',
          name: 'greatDetail',
          component: GreatDetail // 重大项目建设
        }
      ]
    },
    
    { //登录
      path: '/login',
      name: 'login',
      component: logIn
    }, 
    { //注册机构
      path: '/register',
      name: 'register',
      component: () => import('@/view/logIn/register-new.vue'),
    }, 
    { //注册企业
      path: '/register1',
      name: 'register1',
      component: () => import('@/view/logIn/register1.vue'),
    }, 
    
    { // 机构登录
      path: '/management',
      name: 'management',
      component: Management,
      redirect: '/management/apply',
      children: [
        {
          path: 'apply', //申请中
          name: 'apply',
          component: () => import('@/view/Management/components/apply.vue')
        },
        {
          path: 'survey', //调查
          name: 'survey',
          component: () => import('@/view/Management/components/survey.vue')
        },
        {
          path: 'examine', // 审批
          name: 'examine',
          component: () => import('@/view/Management/components/examine.vue')
        },
        {
          path: 'makeLoans', //已驳回
          name: 'makeLoans',
          component: () => import('@/view/Management/components/makeLoans.vue')
        }, 
        {
          path: 'reject', //已驳回
          name: 'reject',
          component: () => import('@/view/Management/components/reject.vue')
        },
        
        {
          path: 'organization', //机构信息
          name: 'organization',
          component: () => import('@/view/Management/components/organization.vue')
        },
        {
          path: 'log', // 操作日志
          name: 'log',
          component: () => import('@/view/Management/components/log.vue')
        }
      ]
    },
    { // 企业登录
      path:'/institution',
      name: 'institution',
      component: () => import('@/view/Institution/index.vue'),
      redirect: '/institution/apply',
      children: [
        {
          path: 'apply', //申请中
          name: 'apply',
          component: () => import('@/view/Institution/components/apply.vue')
        },
        {
          path: 'survey', //调查
          name: 'survey',
          component: () => import('@/view/Institution/components/survey.vue')
        },
        {
          path: 'examine', // 审批
          name: 'examine',
          component: () => import('@/view/Institution/components/examine.vue')
        },
        {
          path: 'makeLoans', //已放款
          name: 'makeLoans',
          component: () => import('@/view/Institution/components/makeLoans.vue')
        }, 
        {
          path: 'reject', //已驳回
          name: 'reject',
          component: () => import('@/view/Institution/components/reject.vue')
        },
        {
          path: 'organization', //机构信息
          name: 'organization',
          component: () => import('@/view/Institution/components/organization.vue')
        }
      ]
    }
    
     // {
    //   path: '/submitSuccessFully',
    //   name: 'submitSuccessfFully',
    //   component: submitSuccessFully
    // }
  ]
})
