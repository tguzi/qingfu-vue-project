const prefix = 'hexing-'
export function get(name) {
  const value = window.sessionStorage.getItem(prefix + name)

  return value ? JSON.parse(window.unescape(window.atob(value))) : null
}
export function set(name, value) {
  const value2 = value ? window.btoa(window.escape(JSON.stringify(value))) : null

  return window.sessionStorage.setItem(prefix + name, value2)
}
export function remove(name) {
  return window.sessionStorage.removeItem(prefix + name)
}
