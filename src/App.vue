<template>
  <div id="app">
    <div>
      <router-link :to="{ name: 'ListTodo' }">ListTodo</router-link> |
      <router-link :to="{ name: 'AddTodo' }">AddTodo</router-link>
    </div>
    <router-view />
  </div>
</template>
