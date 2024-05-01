<template>
  <div>
    <h1>Dynamic Slot</h1>
    <p>使用 dynamic slot（動態插槽）可以在父層動態指定插槽</p>

    <!--    父層-->
    <div v-for="area in areas" :key="area">
      <input type="radio" :id="area" :value="area" v-model="chosenArea">
      <label :for="area"> {{ area }} </label>
    </div>
    <button @click="testClick">test click</button>
    <slot2 :message="testMessage">
      <!--      父層決定要插入哪個子層  -->
      <template v-slot:[chosenArea]>
        <span>1.我現在在： {{ chosenArea }}</span>
      </template>
    </slot2>

    <!--    父層透過 prop 傳遞參數到子層-->
    <slot3 :propColors="areas">
      <template v-slot:[chosenArea]>
        <span>2. 我現在在： {{ chosenArea }}</span>
      </template>
    </slot3>
  </div>
</template>

<script>
import { ref } from "vue";
import Slot2 from '@/components/SlotSample/Slot2.vue';
import Slot3 from '@/components/SlotSample/Slot3.vue';
export default ({
  components: {
    Slot2, Slot3
  },
  setup() {
    const chosenArea = ref('red');
    const areas = ref(["red", "black", "blue", "aa"]);
    const testMessage = ref('');

    const testClick = () => {
      testMessage.value = 'test' + Math.random();
    }

    return {
      testClick, chosenArea, areas, testMessage
    }
  }
})
</script>

<style scoped>

</style>
