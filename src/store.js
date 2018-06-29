import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clock: {
      seconds: 0,
      intervalId: null
    },
    pomodoro: {
      running: false,
      finish: false,
      rest: false,
      duration: 5,
      restDuration: 6
    },
    pomodoros: []
  },
  mutations: {
    // updateInterval(state, intervalId) {
    //   state.clock.intervalId = intervalId;
    // },
    incrementClock(state) {
      state.clock.seconds += 1;
    },

    pauseClock(state) {
      clearInterval(state.clock.intervalId);
      state.pomodoro.running = false;
    },
    resetClock(state) {
      state.clock = { seconds: 0, intervalId: null };
    },
    pushPomodoro(state, message) {
      let { pomodoros } = state;
      const newPomodoro = { message, date: Date.now() };
      if (!pomodoros) {
        pomodoros = [];
      }
      pomodoros.push(newPomodoro);
      state.pomodoros = pomodoros;
      window.localStorage.setItem('pomodoros', JSON.stringify(pomodoros));
    },
    loadPomodoros(state) {
      const pomodoros = window.localStorage.getItem('pomodoros');
      state.pomodoros = JSON.parse(pomodoros);
    },
    setRest(state, value) {
      state.pomodoro.rest = value;
    },
    updateDuration(state, duration) {
      state.pomodoro.duration = duration;
    },
    updateRestDuration(state, restDuration) {
      state.pomodoro.restDuration = restDuration;
    }
  },

  getters: {
    getTime(state) {
      let minutes = Math.floor(state.clock.seconds / 60);
      minutes = minutes < 10 ? '0' + minutes : minutes;

      let remainingSeconds = Math.floor(state.clock.seconds % 60);
      remainingSeconds =
        remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
      return minutes + ':' + remainingSeconds;
    }
  },
  actions: {
    startClock({ state, commit }) {
      //incrementa 1 el contador de segundos
      const cb = () => {
        if (state.clock.seconds < state.pomodoro.duration) {
          commit('incrementClock');
        } else {
          if (Notification.permission == 'granted') {
            navigator.serviceWorker.getRegistration().then(function(reg) {
              var options = {
                body: 'El pomodoro termino!',
                icon: 'images/example.png',
                vibrate: [100, 50, 100],
                data: {
                  dateOfArrival: Date.now(),
                  primaryKey: 1
                }
              };
              reg.showNotification('Buenas noticias!', options);
            });
          }
          commit('pauseClock');
          commit('setRest', true);
        }
      };
      //Empieza intervalo
      const intervalId = setInterval(cb, 1000);
      state.clock.intervalId = intervalId;
      state.pomodoro.running = true;
    },
    startRest({ state, commit }) {
      const cb = () => {
        if (state.clock.seconds < state.pomodoro.restDuration) {
          commit('incrementClock');
        } else {
          commit('setRest', false);
          commit('pauseClock');
          commit('resetClock');
          // alert('Has terminado el pomdoro si lo deseas vuelve apretar play');
        }
      };
      commit('resetClock');
      const intervalId = setInterval(cb, 1000);

      state.clock.intervalId = intervalId;
      state.pomodoro.running = true;
    }
  }
});
