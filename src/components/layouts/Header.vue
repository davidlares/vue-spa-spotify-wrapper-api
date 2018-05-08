<template lang="pug">
  section.hero.is-success
      .hero-head
        header.navbar
          .container
            .navbar-start
                .navbar-item
                  strong 📻 {{ company }} |
                  router-link.nav-item.menu-margin(:to="{name: 'search'}") Search
                  router-link.nav-item.menu-margin(:to="{name: 'about'}") About
            .navbar-end.navbar-menu
      .hero-body
        .container.has-text-centered
          h1.title {{ company }}
          h2.subtitle Spotify Song List by custom search
          DL-player
</template>

<script>
import DLPlayer from '@/components/Player.vue'
export default {
  components: { DLPlayer },
  data () {
    return {
      company: 'David Music'
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-margin {
    margin-left: 10px
  }
</style>
