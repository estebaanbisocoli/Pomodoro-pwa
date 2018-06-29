<template>
<div class="box">
  <b-field label="Mensaje">
    <b-input ref="input" v-model="mensaje" min="1000" placeholder="¿Que aprendiste?" class="input-box" type="textarea"></b-input>
  </b-field>
  <div class="is-size-7">
    Haga click para guardar y continuar con el recreo
    
  </div>
  <div class="has-text-right">
    <a @click="onClick" class="button is-success is-rounded has-text-left">Dale</a>
  </div>
  
  

</div>
</template>
<script>
export default {
  props: ['focus'],
  data() {
    return {
      mensaje: ''
    };
  },
  methods: {
    onClick() {
      this.$store.commit('pushPomodoro', this.mensaje);
      this.$toast.open('El pomodoro ha sido guardado');
      this.mensaje = '';
      this.$store.dispatch('startRest');
    }
  },
  watch: {
    focus(value) {
      if (value) {
        setTimeout(() => {
          this.$refs.input.focus();
        }, 1000);
      }
    }
  }
};
</script>
<style>
.button {
  display: inline-block !important;
}
</style>
