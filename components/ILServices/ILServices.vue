<template>
  <div>
    <nuxt-link
      v-for="(service, idx) in services"
      :key="idx"
      class="il-services mb-6"
      :to="service.link"
    >
      <v-card class="il-services__service mb-6">
        {{ service.name }}
      </v-card>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const selectedItem = ref(1)
    const services = [
      { name: 'ILearn Тесты', icon: 'mdi-lead-pencil', link: '/tests' },
      { name: 'ILearn Заметки', icon: 'mdi-notebook', link: '/todo' },
      { name: 'ILearn Чаты', icon: 'mdi-chat', link: '/chat' },
    ]

    return {
      selectedItem,
      services,
    }
  },
})
</script>

<style lang="scss" src="./ILServices.scss"></style>
