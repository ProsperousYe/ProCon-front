<template>
  <div id="func-btn-container">
    <FunctionButton :func-id="1">
      <Icon v-if="funcStore.funcId === 1" class="icon" icon="line-md:mastodon-twotone" />
      <Icon v-else class="icon" icon="line-md:mastodon" />
    </FunctionButton>
    <FunctionButton :func-id="2">
      <Icon v-if="funcStore.funcId === 2" class="icon" icon="line-md:github-twotone" />
      <Icon v-else class="icon" icon="line-md:github-loop" />
    </FunctionButton>
    <FunctionButton :func-id="3">
      <Icon v-if="funcStore.funcId === 3" class="icon" icon="line-md:emoji-smile-wink-twotone" />
      <Icon v-else class="icon" icon="line-md:emoji-smile-wink" />
    </FunctionButton>
    <div style="flex-grow: 1"></div>
    <FunctionButton :func-id="4" style="margin-bottom: 1.8rem">
      <Icon v-if="funcStore.funcId === 4" class="icon" icon="line-md:grid-3-twotone" />
      <Icon v-else class="icon" icon="line-md:grid-3" />
    </FunctionButton>
  </div>
</template>

<script setup lang="ts">
import FunctionButton from './FunctionButton.vue'
import { Icon } from '@iconify/vue'
import { useFuncStore } from '../../stores/funcStore'
const funcStore = useFuncStore()
</script>

<style lang="less" scoped>
#func-btn-container {
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(235, 228, 233, 0.4);
  -webkit-app-region: drag;
  padding-top: 1.5rem;
  flex-direction: column;
}
.icon {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.8rem;
  color: grey;
  transition: color 0.2s ease-in-out;
}
.icon:hover {
  color: black;
}
</style>
