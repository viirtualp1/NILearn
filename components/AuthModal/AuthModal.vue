<template>
  <div class="auth-modal" :class="{ disabled: isChosen }">
    <v-row class="auth-modal__content">
      <v-col cols="12">
        <v-btn block dark color="indigo" @click="setUser(USER.TEACHER)">
          Учитель
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn block dark color="indigo" @click="setUser(USER.TEACHER)">
          Ученик
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn block dark color="indigo" @click="setUser(USER.DIRECTOR)">
          Директор
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { useStore, defineComponent, ref } from '@nuxtjs/composition-api'
import { USER } from '~/types/user'

export default defineComponent({
  setup() {
    const store = useStore()
    const isChosen = ref(false)

    function setUser(userType: USER) {
      store.commit('main/user', userType)

      isChosen.value = true
    }

    return {
      USER,
      isChosen,
      setUser,
    }
  },
})
</script>

<style lang="scss" src="./AuthModal.scss"></style>
