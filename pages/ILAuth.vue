<template>
  <div class="auth">
    <auth-modal />

    <v-container>
      <auth-form :user-type="user" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, computed } from '@nuxtjs/composition-api'
import authModal from '@/components/AuthModal/AuthModal/AuthModal.vue'
import authForm from '@/components/AuthModal/AuthForm/AuthForm.vue'

export default defineComponent({
  components: {
    authModal,
    authForm,
  },
  setup() {
    const { store } = useStore()

    const user = computed(() => {
      return store.state.main.user
    })

    return {
      user,
    }
  },
})
</script>

<style lang="scss" src="@/assets/scss/auth.scss"></style>
