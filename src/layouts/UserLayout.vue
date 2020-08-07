<template>
  <q-layout class="layout-user-container">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="flex items-center justify-between footer" v-if="$q.screen.gt.xs">
      <div>
        <span>©Quasar v{{ $q.version }}.</span>
      </div>
      <div class="flex q-gutter-xs q-mt-none text-primary"></div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'UserLayout'
}
</script>

<style lang="scss" scoped>
.layout-user-container {
  background-repeat: no-repeat;
  background-position: center 0px;
  background-size: 100%;
}
.footer {
  font-size: 10px;
  letter-spacing: 0.3px;
  padding: 15px 25px;
  background-color: #fafbfc;
  color: #637388;
  text-transform: uppercase;
}
</style>
