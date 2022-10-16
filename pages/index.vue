<template>
  <v-app>
    <v-row>
      <v-col cols="12" md="3">
        <profile-card :user="user" />
      </v-col>
      <v-col cols="12" md="6"></v-col>
      <v-col cols="12" md="3">
        <i-l-services />
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  useRouter,
  useStore,
  ref,
} from '@nuxtjs/composition-api'
import { getPureUser } from '@/services/auth'
import ProfileCard from '~/components/ProfileCard/ProfileCard.vue'

export default defineComponent({
  components: { ProfileCard },
  setup() {
    const router = useRouter()
    const store = useStore()
    const user = ref(getPureUser())

    onMounted(() => {
      const userLocalStorage = localStorage.getItem('user')
      if (!userLocalStorage) {
        router.push('auth')
      }

      const parsedUser = JSON.parse(userLocalStorage || '{}')
      user.value = parsedUser
      store.commit('main/newUser', parsedUser)
    })

    return {
      user,
    }
  },
})
</script>
