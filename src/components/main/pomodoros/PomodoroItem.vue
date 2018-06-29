<template>
  <li>
    <span>{{formatedDate}}| {{message}}</span>
  </li>
</template>
<script>
export default {
  props: ['date', 'message'],
  computed: {
    formatedDate() {
      const newDate = new Date(this.date);
      return `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}-${newDate.getHours()}:${newDate.getMinutes()}`;
    }
  }
};
</script>
