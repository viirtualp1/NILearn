import { ref, set, getDatabase, child, get } from 'firebase/database'
import { getRandNumber } from '@/services/numbers'
import { database } from '@/services/db'
import { NoteData } from '@/types/note'

export function newNote(teacherId: string | number, data: NoteData) {
  const taskId: string | number = getRandNumber()

  return set(ref(database, `users/${teacherId}/tasks/${taskId}`), {
    ...data,
    taskId,
  })
}

export async function getNotes(id: string | number) {
  const notes = await get(child(ref(getDatabase()), `users/${id}/tasks`))

  return notes
}
