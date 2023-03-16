<template>
  <ScopedSlot2 @emitSelectedChange="getEmitSelectedChange">
    <template #result="{ quantity }">
      父層選擇：{{ quantity }}
    </template>
  </ScopedSlot2>
</template>

<script>
import { ref } from "vue";
import ScopedSlot2  from '@/components/SlotSample2/ScopedSlot2.vue';
export default ({
  components: {
    ScopedSlot2
  },
  setup() {
    const getEmitSelectedChange = (selected) => {
      console.log('getEmitSelectedChange', selected.value)
    }

    return {
        getEmitSelectedChange
    }
  }
})
</script>

<style scoped>

</style>
