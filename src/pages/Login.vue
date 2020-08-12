<template>
  <q-page class="row items-center justify-center">
    <q-card class="login-wrapper shadow-24" bordered>
      <q-card-section horizontal>
        <q-img class="col-md-6 col-xs-0" src="@/assets/index.png">
          <div class="absolute-bottom-left text-subtitle2 text-center">
            {{ $q.version }}
          </div>
        </q-img>

        <q-card-section class="col-md-6 col-xs-12 q-mt-xs q-pa-xl`">
          <div class="text-h5 text-primary q-mb-xs">登录</div>
          <q-form @submit="handleSubmit" class="login-form my-form q-mt-lg">
            <q-input
              clearable
              v-model.trim="form.username"
              placeholder="账号"
              :rules="[(val) => (val && val.length > 0) || '请输入用户账号']"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <q-input
              :type="isPwd ? 'password' : 'text'"
              clearable
              v-model.trim="form.password"
              placeholder="密码"
              :rules="[(val) => (val && val.length > 0) || '请输入登录密码']"
            >
              <template v-slot:prepend>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div class="column q-gutter-y-md q-mt-none">
              <q-checkbox v-model="form.rememberMe" label="记住账号" dense />
            </div>
            <div class="q-mt-md column items-center">
              <q-btn label="登录" type="submit" color="primary" class="full-width" />
              <!-- <div class="q-mt-md">
                如果还没有账号？<router-link to="/user/signup" class="text-primary"
                  >点击注册</router-link
                >
              </div> -->
            </div>
          </q-form>
        </q-card-section>
      </q-card-section>
      <q-separator />

      <q-card-actions>
        <q-space />
        <q-btn flat round icon="settings_system_daydream" />
      </q-card-actions>
      <q-inner-loading :showing="loading">
        <q-spinner-hourglass size="lg" color="primary" />
      </q-inner-loading>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  preFetch(
    {
      /* store, currentRoute, previousRoute, redirect, ssrContext*/
    }
  ) {},
  data: () => ({
    loading: false,
    form: {
      username: '',
      password: '',
      rememberMe: false
    },
    isPwd: true
  }),
  mounted() {
    this.form.username = this.$q.localStorage.getItem('username') || ''
  },
  methods: {
    handleSubmit() {
      const { rememberMe, username } = this.form
      rememberMe
        ? this.$q.localStorage.set('username', username)
        : this.$q.localStorage.remove('username')
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push('/manage')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper,
login-form {
  width: 840px;
}
@media (max-width: 1023px) {
  .login-wrapper,
  login-form {
    width: 90%;
  }
}
@media (max-width: 599px) {
  .q-pa-xl {
    padding: 15px;
  }
}
</style>
