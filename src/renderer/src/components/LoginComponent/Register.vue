<template>
  <div id="container">
    <ProInput v-model="username" placeholder="用户名" />
    <ProInput v-model="password" placeholder="密码" type="password" />
    <ProInput v-model="password2" placeholder="请确认密码" type="password" />
    <div id="captcha-row">
      <ProInput v-model="captcha" placeholder="验证码" />
      <ProButton style="margin-right: 0">获取验证码</ProButton>
    </div>
    <ProButton @click="onRegister()"> 注册 </ProButton>
    <ProButton @click="backToLogin()"> 返回 </ProButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProInput from '../GeneralComponent/ProInput.vue'
import ProButton from '../GeneralComponent/ProButton.vue'
import { useLogStore } from '../../stores/logStore'
const logStore = useLogStore()
function backToLogin(): void {
  logStore.changeLogged(1)
}

const username = ref('')
const password = ref('')
const password2 = ref('')
const captcha = ref('')

interface registerInfo {
  username: string
  password: string
  captcha: string
}

function onRegister(): void {
  if (checkPassword()) {
    const data: registerInfo = {
      username: username.value,
      password: password.value,
      captcha: captcha.value
    }
    registerAction(data).then((res) => {
      console.log(res)
    })
  } else {
    console.log('password not match')
  }
}

function checkPassword(): boolean {
  if (password.value !== password2.value) {
    return false
  }
  return true
}

function registerAction(data: registerInfo): Promise<T> {
  return new Promise((resolve) => {
    console.log(data)
    setTimeout(() => {
      resolve('success')
    }, 1000)
  })
}
</script>

<style lang="less" scoped>
#captcha-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>
