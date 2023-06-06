import { defineStore } from 'pinia'

//使用pinia来记录状态，这里的状态id为main，记录的是当前的功能id
export const useFuncStore = defineStore({
  id: 'main',
  state: () => {
    return {
      funcId: 0
    }
  },
  actions: {
    changeFuncId(funcId: number) {
      this.funcId = funcId
    },
  },
  getters: {
    getFuncId(): number {
      return this.funcId
    },

  }
})
