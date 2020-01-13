<template>
  <v-app class="primary split-bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="@/assets/logo.svg" alt="Aplex Admin" width="120" height="120">
                  <h1 class="flex my-4 primary--text">
                    Aplex Vuetify Admin
                  </h1>
                </div>
                <v-form>
                  <v-text-field
                    v-model="model.username"
                    append-icon="mdi-account"
                    name="login"
                    label="Login"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="model.password"
                    append-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <div class="login-btn">
                <v-btn block color="primary" :loading="loading" @click="login">Login</v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: 'admin@aplex.com',
      password: '123456'
    }
  }),

  methods: {
    login() {
      this.loading = true
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 1000)
    }
  }
}
</script>
<style scoped lang="css">
  .split-bg {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
