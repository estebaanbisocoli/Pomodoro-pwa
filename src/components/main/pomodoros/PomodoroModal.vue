<template>
<div>

</div>


</template>
<script>
import PomodoroItem from './PomodoroItem';
export default {
  props: ['modal'],
  components: {
    PomodoroItem
  },
  computed: {
    pomodoros() {
      return this.$store.state.pomodoros;
    }
  }
};
</script>
