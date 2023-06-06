<template>
  <div id="container" :style="sizeStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: () => {
      return 'default'
    }
  }
})
let sizeStyle = reactive({})
if (props.size === 'default') {
  sizeStyle = {
    width: '100%'
  }
}
</script>

<style lang="less" scoped>
@color: rgba(235, 228, 233, 1);
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: @color;
  margin: 0.5rem;
  border-radius: 0.5rem;
  height: 2rem;
}
#container:hover {
  background-color: rgba(255, 252, 243, 1);
  cursor: pointer;
}
</style>
