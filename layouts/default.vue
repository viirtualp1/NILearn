<template>
  <v-app>
    <v-main>
      <i-learn-header />

      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ILearnHeader from '@/components/ILearnHeader/ILearnHeader.vue'

export default defineComponent({
  components: {
    ILearnHeader,
  },
})
</script>
