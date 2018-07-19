import $$ from './local'

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    $$.set(mutation.type, mutation.payload)
  })
}

export default [localStoragePlugin]
