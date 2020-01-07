<template>
  <v-app-bar
    app
    color="primary"
    dark
    :clipped-left="true"
  >
    <v-app-bar-nav-icon
      :disabled="!toggleBtn"
      @click.stop="$emit('toggleSidebar')"
    />

    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <!--        <v-img-->
      <!--          alt="Vuetify Name"-->
      <!--          class="shrink mt-1 hidden-sm-and-down"-->
      <!--          contain-->
      <!--          min-width="100"-->
      <!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
      <!--          width="100"-->
      <!--        />-->
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    toggleBtn: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    //
  }),
  computed: {
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
