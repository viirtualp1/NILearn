import { ref, set } from 'firebase/database'
import { UserData, UserType } from '@/types/user'
import { database } from '@/services/db'

export const getPureUser = (): UserData => ({
  fullName: '',
  email: '',
  password: '',
  school: '',
  klass: '',
  type: UserType.STUDENT,asdasd
  id: null,
})

export function signUp(data: UserData) {
  return set(ref(database, `users/${data.id}`), data)
}

export function signOut() {
  localStorage.removeItem('user')

  location.reload()
}
