<template>
  <!--  子層-->
  <p v-for="color in propColors" :key="color" :class="color">
    <slot :name="color"></slot>
  </p>
</template>

<script>
export default({
  props: {
    propColors: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped>

</style>
