<template lang="pug">
  #app
    DL-header
    router-view
    DL-footer
</template>
<script>

import DLFooter from '@/components/layouts/Footer.vue'
import DLHeader from '@/components/layouts/Header.vue'

export default {
  name: 'app',
  components: { DLFooter, DLHeader },
  methods: {
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid
  }

</style>
