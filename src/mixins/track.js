const trackMixin = {
  // funcionalidad del Vue model para exportar
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      // funcion emit -> comunicacion Hijo - Padre
      // this.$emit('select', this.track.id)
      // uso del plugin
      // this.$bus.$emit('set-track', this.track)
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
