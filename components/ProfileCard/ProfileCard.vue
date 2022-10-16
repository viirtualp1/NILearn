<template>
  <v-card>
    <v-card-title>{{ user.fullName }}</v-card-title>
    <v-divider />

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{ user.type }}
      </div>
      {{ user.school }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="signOut">Выйти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { UserData } from '@/types/user'
import { signOut } from '@/services/auth'

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserData>,
      required: true,
    },
  },
  setup() {
    return {
      signOut,
    }
  },
})
</script>
