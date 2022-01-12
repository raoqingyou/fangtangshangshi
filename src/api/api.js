import axios from 'axios'

// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);
export const getProductList = (data) => axios({
            url: '/api/index/getProductList',
            method: 'post',
            data: data
        })
    
    

// export const homeGetProductList = data => axios.request({
//     url: '/api/eam/assetMenual/selectListPage',
//     method: 'POST',
//     data
//   })

//   return axios.request({
//     url: '/api/hr/user/getUserInfoListByOrgGroupPage',
//     method: 'post',
//     data
//   })

// export const homeGetProductList = (data) => {
//     return axios.request({
//       url: '/api/eam/assetMenual/selectListPage',
//       method: 'post',
//       data
//     })
//   }