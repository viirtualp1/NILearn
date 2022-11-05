<!-- eslint-disable vue/attributes-order -->
<template>
  <div class="il-notes">
    <div v-if="!notes"></div>
    <div v-else v-for="(note, idx) in notes" :key="idx" class="il-notes__note">
      <i-l-note :note="note" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from '@nuxtjs/composition-api'
import { getNotes } from '@/services/notes'
import { NoteData } from '@/types/note'
import ILNote from '@/components/ILNote/ILNote.vue'

export default defineComponent({
  components: { ILNote },
  fetchOnServer: true,
  setup() {
    const teacher = JSON.parse(localStorage.getItem('user') || '')
    const notes = ref<NoteData[]>()

    onBeforeMount(() => {
      getNotes(teacher.id).then((snapshot) => {
        notes.value = snapshot.val()
      })
    })

    return {
      notes,
    }
  },
})
</script>
