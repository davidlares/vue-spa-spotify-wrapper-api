<template lang="pug">
  main
    transition(name="move")
    DL-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados
    transition(name="move")
      DL-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(type="text", placeholder="What song you are looking for?", v-model="searchQuery", @keyup.enter="search")
            .control
              a.button.is-grey.is-large(@click="search") DavidVue Search
            .control
              a.button.is-danger.is-large &times;
        .container
            p.help.is-info.has-text-left
              small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="(t in tracks")
            DL-track(v-bind:track="t" @select="setSelectedTrack" :class="{'is-active': t.id === selectedTrack }", v-blur="t.preview_url")
              //- este ultimo, bindea la informacion al componente Hijo
              //- @select es el evento emitido desde el objeto Hijo
</template>
<script>

import trackService from '@/services/track' // importamos el servicio
// importamos el componente de las canciones
import DLTrack from '@/components/Track.vue'

// loader de datos
import DLLoader from '@/components/shared/Loader.vue'

import DLNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  components: { DLTrack, DLLoader, DLNotification },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  methods: {
    search () {
      if (this.searchQuery === '') {
        console.log('empty')
        return
      }
      this.isLoading = true
      // this.tracks = tracks
      // console.log(this.searchQuery)
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Found ${this.tracks.length} matches`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }

}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid
  }

</style>
