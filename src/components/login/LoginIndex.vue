<script setup lang="ts">
</script>
<template>
  <v-app>
    <v-row class="align-center justify-center d-flex">
        <v-card height="600" width="400" class="pa-3 ma-3" color="white" elevation="3">
          <v-card-title class="my-4 text-h4">
            <span class="flex-fill d-flex justify-center align-center"> Ysera系统 </span>
          </v-card-title>
          <!-- sign in form -->
          <v-card-text>
            <v-form
                ref="refLoginForm"
                class="text-left"
                v-model="isFormValid"
                lazy-validation
            >
              <v-text-field
                  ref="refEmail"
                  v-model="email"
                  required
                  :error="error"
                  density="default"
                  variant="outlined"
                  color="primary"
                  bg-color="#fff"
                  :rules="emailRules"
                  name="email"
                  outlined
                  validateOn="blur"
                  @keyup.enter="handleLogin"
                  @change="resetErrors"
              ></v-text-field>
              <v-text-field
                  ref="refPassword"
                  v-model="password"
                  :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  :error="error"
                  :error-messages="errorMessages"
                  density="default"
                  variant="outlined"
                  color="primary"
                  bg-color="#fff"
                  :rules="passwordRules"
                  name="password"
                  outlined
                  validateOn="blur"
                  @change="resetErrors"
                  @keyup.enter="handleLogin"
                  @click:append-inner="showPassword = !showPassword"
              ></v-text-field>
              <v-btn
                  :loading="isLoading"
                  :disabled="isSignInDisabled"
                  block
                  size="x-large"
                  color="primary"
                  @click="handleLogin"
                  class="mt-2"
              >登录
              </v-btn
              >

              <div
                  class="text-grey text-center text-caption font-weight-bold text-uppercase my-5"
              >
              </div>


              <div v-if="errorProvider" class="error--text my-2">
                {{ errorProviderMessages }}
              </div>

              <div class="mt-5 text-center">
                <router-link class="text-primary" to="/auth/forgot-password">
                  忘记密码
                </router-link>
              </div>
            </v-form>
          </v-card-text
          >
        </v-card>
    </v-row>
  </v-app>
</template>
