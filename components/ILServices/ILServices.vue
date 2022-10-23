<template>
  <div class="il-services">
    <v-card class="mb-3">
      <v-list flat>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(service, idx) in services" :key="idx">
            <v-list-item-icon>
              <v-icon v-text="service.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link :to="service.link">{{ service.name }}</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
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
