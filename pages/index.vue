<template>
  <profile-card :user="user" />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  useContext,
  useRouter,
  ref,
} from '@nuxtjs/composition-api'
import ProfileCard from '~/components/ProfileCard/ProfileCard.vue'

export default defineComponent({
  components: { ProfileCard },
  setup() {
    const { store } = useContext()
    const router = useRouter()
    const user = ref({})

    onMounted(() => {
      user.value = store.getters['main/getUser']

      if (!store.getters['main/getIsAuth']) {
        router.push('auth')
      }
    })

    return {
      user,
    }
  },
})
</script>
