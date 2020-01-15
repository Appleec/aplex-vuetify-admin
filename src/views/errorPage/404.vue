<template>
  <div class="Page404">
    <v-content fluid fill-height>
      <v-layout align-center justify-center row>
        <v-flex text-xs-center>
<!--          <div class="mr-3 hidden-sm-and-down">-->
<!--            <img class="pic-404__parent" src="@/assets/images/404.png" alt="404">-->
<!--          </div>-->
          <div class="display-3">
            <h1>500</h1>
            <h2 class="my-3 headline ">Sorry, the server is down.</h2>
            <div>
              <v-btn rounded color="primary" to="/">Go Home</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
