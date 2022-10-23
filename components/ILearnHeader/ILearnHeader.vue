<template>
  <header class="il-header">
    <h2 class="ml-6 pt-2">{{ PROJECT_NAME }}</h2>
  </header>
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

<style lang="scss" src="./ILearnHeader.scss"></style>
