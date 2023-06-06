<template>
  <div
    id="func-list-container"
    :style="isActive ? activeStyle : inactiveStyle"
    @click="onClick(props.funcId)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useFuncStore } from '../../stores/funcStore'

const funcStore = useFuncStore()
const props = defineProps({
  funcId: Number
})

const activeStyle = reactive({
  backgroundColor: 'rgba(235, 228, 233, 0.8)',
  boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.2)'
})
const inactiveStyle = reactive({
  backgroundColor: 'rgba(235, 228, 233, 0)'
})

function onClick(funcId: number | undefined): void {
  funcId && onChangeState(funcId)
}
function onChangeState(funcId: number): void {
  funcStore.changeFuncId(funcId)
}

const isActive = computed(() => {
  return funcStore.funcId === props.funcId
})
</script>

<style lang="less" scoped>
@length: 3.5rem;
#func-list-container {
  width: @length;
  height: @length;
  border-radius: 0.75rem;
  margin: 0.8rem auto 0 auto;
  transition: background-color 0.2s ease-in-out;
}
#func-list-container:hover {
  background-color: rgba(235, 228, 233, 0.4);
}
</style>
