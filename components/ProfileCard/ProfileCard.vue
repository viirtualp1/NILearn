<template>
  <v-card>
    <v-card-title>{{ user.fullName }}</v-card-title>
    <v-divider />

    <v-card-text>
      {{ user.school }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { UserData } from '~/types/user'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserData>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
