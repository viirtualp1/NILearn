<template>
  <div class="il-auth-modal" :class="{ disabled: isChosen }">
    <v-row class="auth-modal__content">
      <v-col v-for="user in UserType" :key="user" cols="12">
        <v-btn large block dark color="indigo" @click="setUser(user)">
          {{ UserTypeText[user] }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { useStore, defineComponent, ref } from '@nuxtjs/composition-api'
import { UserType } from '~/types/user'

export default defineComponent({
  setup() {
    const store = useStore()
    const isChosen = ref(false)

    const UserTypeText = {
      teacher: 'Учитель',
      student: 'Ученик',
      director: 'Директор',
    }

    function setUser(userType: UserType | string) {
      store.commit('main/user', userType)

      isChosen.value = true
    }

    return {
      UserType,
      UserTypeText,
      isChosen,
      setUser,
    }
  },
})
</script>

<style lang="scss" src="./AuthModal.scss"></style>
