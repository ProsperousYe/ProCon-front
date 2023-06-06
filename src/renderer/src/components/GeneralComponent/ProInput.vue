<template>
  <div id="container" :style="sizeStyle">
    <div id="input">
      <div id="title">{{ title }}</div>
      <input v-model="value" :type="type" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  size: {
    type: String,
    default: () => {
      return 'default'
    }
  },
  placeholder: {
    type: String,
    default: () => {
      return '请输入...'
    }
  },
  modelValue: {
    type: String,
    default: () => {
      return ''
    }
  },
  title: {
    type: String,
    default: () => {
      return ''
    }
  },
  type: {
    type: String,
    default: () => {
      return 'text'
    }
  }
})
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
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
@color: rgba(235, 228, 233, 0.8);

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
}
#title {
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @color;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
}
input:focus {
  outline: none;
}
#input {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: @color;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
</style>
