<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-4by3
        img(:src="track.album.images[0].url")
    .card-content
      .media
          .media-left
            figure.image.is-48x48
              img(:src="track.album.images[0].url")
          .media-content
            p.title.is-6
              strong {{ track.name }}
            p.subtitle.is-6 {{ track.artists[0].name }}
      .content
        small {{ track.duration_ms | ms-to-mm }}
          nav.level
            .level-left
              button.level-item.button.is-primary(@click="selectTrack")
                span.icon.is-small ►
              button.level-item.button.is-warning(@click="goToTrack(track.id)")
                span.icon.is-small 🌐
  </template>
<script>

import trackMixin from '@/mixins/track' // funcionalidad en comun, entre componentes
export default {
  name: '',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  mixins: [trackMixin],
  data: () => ({

  }),
  methods: {
    goToTrack (id) {
      if (!this.track.preview_url) { return }
      // se usa el push para hacer un redireccionamiento con el historial de navegacion
      this.$router.push({name: 'track', params: {id}})
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
