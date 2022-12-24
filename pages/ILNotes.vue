<!-- eslint-disable vue/attributes-order -->
<template>
  <div v-if="!notes">Loading...</div>
  <div v-else class="il-notes">
    <div v-for="(note, idx) in notes" :key="idx" class="il-notes__note">
      <i-l-note :note="note" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref,
  useRouter,
} from '@nuxtjs/composition-api'
import { getNotes } from '@/services/notes'
import { NoteData } from '@/types/note'
import ILNote from '@/components/ILNote/ILNote.vue'

export default defineComponent({
  components: { ILNote },
  fetchOnServer: true,
  setup() {
    const router = useRouter()
    const teacher = JSON.parse(localStorage.getItem('user') || '')
    const notes = ref<NoteData[] | null>(null)

    useFetch(async () => {
      if (!teacher) {
        router.push('/auth')
      }

      await getNotes(teacher.id).then((snapshot) => {
        notes.value = snapshot.val()
      })
    })

    return {
      notes,
    }
  },
})
</script>
