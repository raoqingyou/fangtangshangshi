import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// const store = new Vuex.Store({
//     state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
//         //id
//         skillId:'',
//         //技能状态
//         checkStatus:''
//     }
// })
export default new vuex.Store({
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
        token:'',
        logIndex: 3,
        enterpriseIndex: 0,
        myIndex: -1,
        callBack: -1,
        show: false,
        corporationName: '',
        organizationName: '',
        mechanism: '',
    },
    mutations: {
        // token (state, val) {
        //     state.token = val;
        // }
        
    }
})