<template>
        <div class="box">
          <span class="title has-text-black">Configuracion</span>
          <b-field  label="Duraccion de los pomodoros">
            <b-input v-model="duration" type="number"></b-input>
          </b-field>
          <b-field label="Duraccion del descanso">
            <b-input v-model="restDuration" type="number"></b-input>
          </b-field>
          <span class="is-size-7">*La duracion en minutos</span>
          <div class="has-text-right">
                <a class="button is-info"  @click="onSubmit">
            Guardar
          </a>
          </div>
        </div>
</template>
<script>
export default {
  props: ['closeModal'],
  data() {
    return {
      duration: this.$store.state.pomodoro.duration,
      restDuration: this.$store.state.pomodoro.restDuration
    };
  },
  methods: {
    onSubmit() {
      if (this.duration != 0) {
        this.$store.commit('updateDuration', this.duration);
      }
      if (this.restDuration != 0) {
        this.$store.commit('updateRestDuration', this.restDuration);
      }
      this.closeModal();
    }
  }
};
</script>
