<template>
  <div>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">       
    
      <div class="navbar-brand">
        <div class="navbar-item">
          Pomodorillo
        </div>
      </div>
      
      <div class="navbar-item">
        <button @click="modalPomodoros = true" class="button is-primary">
          <i class="fas fa-th-list"></i> Mis pomodoros
        </button>
      </div>
      <div class="navbar-item">
        <button @click="modalSettings = true" class="button is-warning">
          <i class="fas fa-cog"></i>
          Configuracion
        </button>
      </div>

    </div>
  </nav>
    <b-modal :active.sync="modalPomodoros">
      <div class="box">
        <span v-if="pomodoros.length == 0" class="title has-text-black is-size-6">Todavia no tienes pomodoros</span>
          <ul v-else >
             <pomodoro-item :key="pomodoro.date"  v-for="pomodoro in pomodoros" :date="pomodoro.date" :message="pomodoro.message"></pomodoro-item>
          </ul>
       </div>
      </b-modal>
      <b-modal :active.sync="modalSettings">
        <settings :closeModal="closeSettings"></settings>
      </b-modal>
  </div>

</template>

<script>
import PomodoroModal from './pomodoros/PomodoroModal';
import PomodoroItem from './pomodoros/PomodoroItem';
import Settings from './modal/Settings';
export default {
  components: { PomodoroModal, PomodoroItem, Settings },
  data() {
    return {
      modalPomodoros: false,
      duration: null,
      modalSettings: false
    };
  },
  computed: {
    pomodoros() {
      return this.$store.state.pomodoros ? this.$store.state.pomodoros : [];
    }
  },
  methods: {
    closeSettings() {
      this.modalSettings = false;
    }
  }
};
</script>

<style>
</style>
