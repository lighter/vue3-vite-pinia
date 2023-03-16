<template>
  <div id="app">
    <div>
      <router-link :to="{ name: 'ListTodo' }">ListTodo</router-link> |
      <router-link :to="{ name: 'AddTodo' }">AddTodo</router-link> |
      <router-link :to="{ name: 'Slot' }">Slot</router-link> |
      <router-link :to="{ name: 'ScopedSlot' }">Scoped Slot</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { provide } from 'vue'

export default({
  setup() {
    provide('name', 'Jack')
  }
})
</script>
