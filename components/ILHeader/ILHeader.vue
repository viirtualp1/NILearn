<template>
  <header class="il-header">
    <nuxt-link to="/">
      <h2 class="ml-6 pt-2">{{ PROJECT_NAME }}</h2>
    </nuxt-link>
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

<style lang="scss" src="./ILHeader.scss"></style>
