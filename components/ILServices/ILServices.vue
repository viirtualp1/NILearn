<template>
  <div class="il-services">
    <nuxt-link v-for="(service, idx) in services" :key="idx" :to="service.link">
      <v-card class="il-services__service mx-auto mb-6" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              {{ service.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="">
              {{ service.description }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const services = [
      {
        name: 'Тесты',
        description: 'Проверяйте своих учеников!',
        icon: 'mdi-lead-pencil',
        link: '/ILTests',
      },
      {
        name: 'Заметки',
        description: 'Запоминайте все!',
        icon: 'mdi-notebook',
        link: '/ILNotes',
      },
    ]

    return {
      services,
    }
  },
})
</script>

<style lang="scss" src="./ILServices.scss"></style>
