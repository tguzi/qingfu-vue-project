import divisions from '@/utils/divisions'
const citys = (function() {
  let arr = []
  for (let key in divisions) {
    let obj = {
      value: key,
      label: key,
      children: []
    }
    for (let it of divisions[key]) {
      obj.children.push({
        value: it,
        label: it
      })
    }
    arr.push(obj)
  }
  return arr
})();

export default citys;
