<template>
  <v-card>
    <v-card-title>{{ note.title }}</v-card-title>
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
