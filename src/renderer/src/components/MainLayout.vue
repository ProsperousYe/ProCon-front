<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div id="column_left" class="column">
      <FunctionList />
    </div>
    <div id="column_mid" class="column">
      <ContactList />
    </div>
    <div id="column_right" class="column">
      <ChatWin />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatWin from './ChatWin.vue'
import ContactList from './ContactList.vue'
import FunctionList from './FunctionComponent/FunctionList.vue'
</script>

<style lang="less" scoped>
@left_width: 4.5rem;
@mid_width: 20%;
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.column {
  height: 100%;
}
#column_left {
  width: @left_width;
}
#column_mid {
  width: @mid_width;
}
#column_right {
  width: calc(100% - @left_width - @mid_width);
}
</style>
