<template>
  <div>
    {{time}}
  </div>
</template>
<script>
export default {
  computed: {
    time() {
      return this.$store.getters.getTime;
    }
  }
};
</script>
