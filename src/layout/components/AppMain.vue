<template>
  <v-content>
    <v-container fluid>
<!--      <v-slide-y-transition mode="out-in">-->
<!--        <router-view :key="key" />-->
        sdflsdfjklsj
<!--      </v-slide-y-transition>-->
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /*min-height: calc(100vh - 50px);*/
  /*width: 100%;*/
  /*position: relative;*/
  /*overflow: hidden;*/
}
.fixed-header+.app-main {
  /*padding-top: 50px;*/
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
/*.el-popup-parent--hidden {*/
/*  .fixed-header {*/
/*    padding-right: 15px;*/
/*  }*/
/*}*/
</style>
