import { defineStore } from 'pinia'

//使用pinia来记录状态，这里的状态id为main，记录的是当前的功能id
/*
  0: 主页
  1: 登录
  2: 注册
*/
export const useLogStore = defineStore({
  id: 'log',
  state: () => {
    return {
      logged: 1
    }
  },
  actions: {
    changeLogged(logged: number) {
      this.logged = logged
    }
  },
  getters: {
    getLogged(): number {
      return this.logged
    }
  }
})
