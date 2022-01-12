import moment from 'moment'
let changeTimeDate = (val, type = 'YYYY-MM-DD') => { // 时间戳转日期
    let numTest = new RegExp('[0-9]+')
    // console('val',val)
    let values = val ? String(val*1000) : ''
    if (values.indexOf('-') == -1 && values) {
      return moment(Number(values)).format(type)
    } else {
      return val || ''
    }
  }
  let changeTimeDate1 = (val, type = 'YYYY-MM-DD HH:mm:ss') => { // 时间戳转日期
    let numTest = new RegExp('[0-9]+')
    // console('val',val)
    let values = val ? String(val*1000) : ''
    if (values.indexOf('-') == -1 && values) {
      return moment(Number(values)).format(type)
    } else {
      return val || ''
    }
  }
  let deepCopy = (val) => { // 深拷贝
    return JSON.parse(JSON.stringify(val))
  }
  let domainName = 'http://rz.cendo.cn/'
  export default { 
    changeTimeDate,
    changeTimeDate1,
    domainName,
    deepCopy
  }