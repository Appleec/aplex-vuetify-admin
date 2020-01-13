<template>
  <v-content>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <router-view :key="key" />
      </v-slide-y-transition>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
