<template>
  <div>
    <label>子層數量：</label>
    <select name="quantity" v-model="quantity">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <p class="result">
      <!-- 使用 slotProps 把 quantity 傳出去 -->
      <slot name="result" :quantity="quantity"></slot>
    </p>

    <label>子曾的元件操作(emit)</label>
    <select @change="selectChange" v-model="selected">
      <option v-for="item in options">{{ item }}</option>
    </select>
  </div>
</template>

<script>
import { ref, inject } from "vue";
export default ({
  setup(props, {emit}) {
    const name = inject('name');
    const quantity = ref(0);
    const options = ref(['a', 'b', 'c']);

    let selected = ref();
    const selectChange = () => {
      emit('emitSelectedChange', selected);
    }

    console.log('name', name);

    return {
      quantity, options, selectChange, selected
    };
  }
})
</script>

<style scoped>

</style>
