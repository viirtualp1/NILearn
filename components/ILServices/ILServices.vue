<template>
  <v-card> test </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { PROJECT_NAME } from '~/types/constans'

export default defineComponent({
  setup() {
    return {
      PROJECT_NAME,
    }
  },
})
</script>
