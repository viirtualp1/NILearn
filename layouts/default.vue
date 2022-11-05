<template>
  <v-app>
    <v-main>
      <i-l-header />

      <v-container class="mt-6">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ILHeader from '@/components/ILHeader/ILHeader.vue'

export default defineComponent({
  components: {
    ILHeader,
  },
})
</script>
