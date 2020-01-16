<template>
  <v-content fluid fill-height class="page-404">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto" sm="6">
          <v-img src="@/assets/images/404.png" alt="Aplex Admin" />
        </v-col>

        <v-col
          cols="auto"
          sm="6"
          class="text-center text-md-left text-sm-left"
          align-self="center"
        >
          <div class="bullshit">
            <div class="bullshit__oops">
              OOPS!
            </div>
            <div class="bullshit__headline">{{ message }}</div>
            <div class="bullshit__info text-left grey--text">Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
            <v-btn rounded color="primary" to="/">
              Back to home
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
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
  .page-404{
    background-color: #ffffff;
  }
  .bullshit {
    position: relative;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
