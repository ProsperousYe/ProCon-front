<script setup lang="ts">
// import LeftColumn from './layout/LeftColumn.vue'
import MainLayout from './components/MainLayout.vue'
import LoginLayout from './components/LoginLayout.vue'
import { useLogStore } from './stores/logStore'
const logStore = useLogStore()
</script>

<template>
  <div id="drag-bar"></div>
  <MainLayout v-if="logStore.logged === 0" />
  <LoginLayout v-else />
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>
