<template lang="pug">
.container(v-if="track && track.album")
  .columns
    .column.is-3.has-text-centered
      figure.media-left
        p.image
          img(:src="track.album.images[0].url")
        p
          br
          a.button.is-primary.is-large
            span.icon.is-small(@click="selectTrack") ►
    .column.is-8
      .panel
        .panel-heading
          h1.title {{ trackTitle }}
        .panel-block
          article.media
            .media-content
              .content
                ul(v-for="(v,k) in track")
                  li
                    strong {{ k }}:&nbsp;
                    span {{ v }}
            nav.nav-level
              .level-left
                a.level-item
</template>
<script>

import { mapState, mapActions, mapGetters } from 'vuex'
import trackMixin from '@/mixins/track' // funcionalidad en comun, entre componentes
// import trackService from '@/services/track'

export default {
  mixins: [ trackMixin ],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    const id = this.$route.params.id // obtener el ID de la URL
    if (!this.track || this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('track loaded')
        })
    }
    // console.log(id )
    // trackService.getById(id)
    //   .then(res => {
    //     // console.log(res)
    //     this.track = res
    //   })
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>
<style lang="scss" scoped>
  .columns {
    margin: 20px
  }
</style>
