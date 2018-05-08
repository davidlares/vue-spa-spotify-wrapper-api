<template lang="pug">
  .container
    .columns
      .column.is-12
        .notification.is-danger
          slot(name="body") Algo anduvo mal (default)
</template>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
