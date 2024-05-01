<template>
<!--  子層-->
  <p v-for="area in areas" :key="area" :class="area">
    <slot :name="area"></slot>
  </p>

  <p v-if="showText()">This is prop message: {{ message }}</p>
</template>

<script>
import { ref, watch } from "vue";

export default ({
  props: {
    message: {
      type: String,
      default: '' 
    }
  },
  setup(props) {
    const areas = ref(["red", "black", "blue", "bb"]);

    watch(() => props.message,
          (newVal, oldVal) => console.log('message changed', newVal, oldVal)
    );

    const showText = () => {
      return false
    }

    return {
      areas, showText
    };
  },
});
</script>

<style scoped>
.blue {
  color: green
}
</style>
