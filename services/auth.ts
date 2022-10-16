import { ref, set } from 'firebase/database'
import { UserData, UserType } from '@/types/user'
import { getRandNumber } from '@/services/numbers'
import { database } from '@/services/db'

export const getPureUser = (): UserData => ({
  fullName: '',
  email: '',
  password: '',
  school: '',
  klass: '',
  type: UserType.STUDENT,
})

export function signUp(data: UserData) {
  const id: string | number = getRandNumber()

  return set(ref(database, `users/${id}`), { ...data, id })
}

export function signOut() {
  localStorage.removeItem('user')

  location.reload()
}
