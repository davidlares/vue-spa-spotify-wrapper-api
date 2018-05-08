import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  // props cosas que voy a poder bindear con computed, reemplazando la data de los componentes normales
    track: {}
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
    }
  },
  actions: {
    // obtener la informacion de una cancion a traves del id
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          // respuesta de API, commit para llevar a la mutacion, se dispara la mutation al state
          context.commit('setTrack', res)
          return res
        })
    }
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  }
})

export default store
