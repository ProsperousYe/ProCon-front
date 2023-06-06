<template>
  <div id="container">
    <Login v-if="logStore.logged === 1" />
    <Register v-if="logStore.logged === 2" />
  </div>
</template>

<script setup lang="ts">
import Login from './LoginComponent/Login.vue'
import Register from './LoginComponent/Register.vue'
import { useLogStore } from '../stores/logStore'
const logStore = useLogStore()
</script>

<style lang="less" scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
