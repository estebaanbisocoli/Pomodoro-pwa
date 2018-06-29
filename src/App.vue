<template>
  <section class="hero is-fullheight" :class="{'is-info': isInfo, 'is-primary': isPrimary, 'is-danger': isDanger, 'is-warning': isWarning}">


    <div class="hero-head">
      <nav-bar></nav-bar>
    </div>


    <div class="container">
      <welcome-message></welcome-message>
    </div>

    <div class="hero-body has-text-centered">
      <div class="container">
        <span class="has-text-weight-semibold is-size-1" >
          <clock :class="{'animated fadeInUp': !running, 'animated fadeInDown': running }"></clock>
        </span>
      </div>
    </div>
    <div v-show="rest && !running" class="container" :class="{'animated fadeInUp': !running, 'animated fadeInDown': running  }">
      <message :focus="rest && !running"></message>
    </div>

    <div v-show="!rest" class="hero-foot" :class="{'animated fadeInUp': !rest}">
      <my-footer :running="running" :rest="rest"></my-footer>
    </div>
       
  </section>   
</template>
<script>
import Message from './components/main/Message.vue';
import NavBar from './components/main/NavBar.vue';
import Clock from './components/main/clock/Clock.vue';
import MyFooter from './components/main/MyFooter.vue';
import WelcomeMessage from './components/main/WelcomeMessage.vue';
export default {
  components: {
    NavBar,
    WelcomeMessage,
    MyFooter,
    Clock,
    Message
  },
  computed: {
    rest() {
      return this.$store.state.pomodoro.rest;
    },
    running() {
      return this.$store.state.pomodoro.running;
    },
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
