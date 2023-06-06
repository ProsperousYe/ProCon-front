<template>
  <div id="container">
    <ProInput placeholder="用户名" type="text" />
    <ProInput placeholder="密码" type="password" />
    <div id="buttons">
      <ProButton @click="onRegister()">注册</ProButton>
      <ProButton @click="onLogin()">登陆</ProButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProInput from '../GeneralComponent/ProInput.vue'
import ProButton from '../GeneralComponent/ProButton.vue'
import { useLogStore } from '../../stores/logStore'

const { setWindowSizeMain } = window.api
const logStore = useLogStore()
function onLogin(): void {
  changeWindow()
}
function changeWindow(): void {
  console.log('changeWindow')
  logStore.changeLogged(0)
  console.log(logStore.logged)
  // 更改窗口大小
  setWindowSizeMain(800, 600)
}
function onRegister(): void {
  console.log('reg')
  logStore.changeLogged(2)
}
</script>

<style>
#buttons {
  width: 100%;
  display: flex;
}
</style>
