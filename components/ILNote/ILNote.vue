<template>
  <v-card v-if="note">
    <v-card-title>{{ note.title }}</v-card-title>
    <v-card-subtitle>Выполнить до: {{ note.deadline }}</v-card-subtitle>

    <v-card-text>
      {{ note.text }}
    </v-card-text>

    <v-card-actions>
      <v-btn icon color="success">
        <v-icon> mdi-check </v-icon>
      </v-btn>
      <v-btn icon color="red lighten-2">
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { NoteData } from '@/types/note'

export default defineComponent({
  props: {
    note: {
      type: Object as PropType<NoteData>,
      default: () => {},
    },
  },
})
</script>
