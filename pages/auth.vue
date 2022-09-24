<template>
  <div class="auth">
    <use-auth-modal />

    <v-container>
      <h2>Вход / Регистрация</h2>

      <v-form class="mt-3" @submit="submitForm">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Email"
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Пароль"
              outlined
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useAuthModal from '~/components/AuthModal/AuthModal.vue'

export default defineComponent({
  components: {
    useAuthModal,
  },
  setup() {
    function submitForm() {}

    return {
      submitForm,
    }
  },
})
</script>

<style lang="scss" src="@/assets/scss/auth.scss"></style>
