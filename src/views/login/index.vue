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
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="formField.username"
                    :rules="formRules.nameRules"
                    :counter="10"
                    append-icon="mdi-account"
                    name="login"
                    label="Login"
                    type="text"
                    required
                  />
                  <v-text-field
                    id="password"
                    v-model="formField.password"
                    :rules="formRules.pwdRules"
                    :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                    name="password"
                    label="Password"
                    :type="showPwd ? 'text' : 'password'"
                    require
                    @click:append="showPwd=!showPwd"
                  />
                </v-form>
              </v-card-text>
              <div class="login-btn">
                <v-btn :disabled="!valid" block color="primary" :loading="loading" @click="handleLogin">Login</v-btn>
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
  name: 'Login',
  data: () => ({
    loading: false,
    valid: true,
    showPwd: false,
    formField: {
      username: 'admin',
      password: '123456'
    },
    formRules: {
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      pwdRules: [
        v => !!v || 'Password is required'
        // v => /.+@.+\..+/.test(v) || 'Password must be valid'
      ]
    },
    redirect: undefined
  }),
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    // login
    handleLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store.dispatch('user/login', this.formField).then(() => {
          this.$router.push({ path: this.redirect || '/' })
          // this.$message({
          //   type: 'success',
          //   color: '#4CAF50',
          //   timeout: 3000,
          //   y: 'bottom',
          //   text: 'Operation is success'
          // })
          this.loading = false
        }).catch(() => {
          this.loading = false
          this.$message({
            type: 'error',
            color: '#FF5252',
            timeout: 2000,
            text: 'Operation is failed'
          })
        })
      }
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
