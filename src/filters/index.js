import key from './key.js'
// 键值对过滤器
export function filter(value, type) {
  let val = value
  if (value) {
    if (!type || !key[type]) {
      for (let t in key) {
        if (key[t][value]) {
          val = key[t][value]
          break;
        }
      }
    } else {
      val = key[type][value] ? key[type][value] : val
    }
  }
  return val
}
// 隐藏手机号
export function hidenPhone(val) {
  if(val){
    return val.replace(/^(\d{4})\d{4}(\d+)/,"$1****$2")
  }else{
    return val
  }
}
// 时间格式化
export function timeFormat(val) {
  if (!val) {
    return ''
  }
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
}
// 字符串截取
export function truncate (text, length, clamp = '…') {
  if (text) {
    if (text.length <= length) return text
    let tcText = text.slice(0, length - clamp.length + 1)
    return tcText + clamp
  }
  else {
    return text
  }
}
