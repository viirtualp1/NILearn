<template></template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  useStore,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    onMounted(() => {
      // @ts-ignore
      if (!store.state.main.isAuth) {
        router.push('auth')
      }
    })
  },
})
</script>
