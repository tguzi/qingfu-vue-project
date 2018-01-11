import $$ from './local'

const localStoragePlugin = store => {
  // 注册监听 store 的 mutation
  // 在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态作为参数
  store.subscribe((mutation, state) => {
    $$.set(mutation.type, mutation.payload)
  })
}

export default [localStoragePlugin]
