<template>
<!--  子層-->
  <p v-for="area in areas" :key="area" :class="area">
    <slot :name="area"></slot>
  </p>
</template>

<script>
import { ref } from "vue";

export default ({
  setup() {
    const areas = ref(["red", "black", "blue", "bb"]);

    return {
      areas,
    };
  },
});
</script>

<style scoped>
.red {
  color: red;
}

.black {
  color: black;
}

.blue {
  color: blue;
}
</style>
