<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  created() {},
  mounted() {
    this.$store.dispatch('setMenu', [1, 2, 3])
  }
}
</script>
