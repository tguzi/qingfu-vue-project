const prefix = '[eastown] - '

export default {
  namespace: '',
  setNamespace (namespace) {
    this.namespace = namespace
  },
  set (name, value) {
    window.localStorage.setItem(prefix + name, JSON.stringify({type: typeof value, value}))
  },
  get (name) {
    name = this.namespace ? this.namespace + '/' + name : name
    const jsonStr = window.localStorage.getItem(prefix + name)
    if (jsonStr) {
      let obj = JSON.parse(jsonStr)
      return obj.value
    }
  }
}
