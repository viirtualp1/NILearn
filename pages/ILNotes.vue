<template>
  <div class="il-notes">
    <div v-if="fetchState.pending"></div>
    <div v-else v-for="note in notes" :key="note.id" class="il-notes__note">
      <i-l-note :note="note" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch } from '@nuxtjs/composition-api'
import { getNotes } from '@/services/notes'
import { NoteData } from '@/types/note'
import ILNote from '@/components/ILNote/ILNote.vue'

export default defineComponent({
  components: { ILNote },
  fetchOnServer: true,
  setup() {
    const teacher = JSON.parse(localStorage.getItem('user') || '')
    const notes: NoteData[] = []

    const { fetchState } = useFetch(() => (notes.value = getNotes(teacher.id)))

    return {
      fetchState,
      notes,
    }
  },
})
</script>
