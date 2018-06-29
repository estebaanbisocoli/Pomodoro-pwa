<template>
    <nav class="tabs has-text-centered is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <button @click="onClick" class="button is-large" :class="{'is-info': isInfo, 'is-primary': isPrimary, 'is-danger': isDanger, 'is-warning': isWarning}">
              <i v-if="!running" class="fas fa-play"></i>
              <i v-else-if="running" class="fas fa-pause"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  props: ['running', 'rest'],
  methods: {
    onClick() {
      if (!this.running) {
        this.$store.dispatch('startClock');
      } else {
        this.$store.commit('pauseClock');
      }
    }
  },
  computed: {
    isInfo() {
      if (this.running && !this.rest) {
        return true;
      } else {
        return false;
      }
    },
    isPrimary() {
      if (!this.running && !this.rest) {
        return true;
      } else {
        return false;
      }
    },
    isDanger() {
      if (this.rest && !this.running) {
        return true;
      } else {
        return false;
      }
    },
    isWarning() {
      if (this.rest && this.running) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
