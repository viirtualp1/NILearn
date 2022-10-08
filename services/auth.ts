import { ref, set } from 'firebase/database'
import { UserData, UserType } from '~/types/user'
import { getRandNumber } from '~/services/numbers'
import { database } from '@/services/db'

export const getPureUser = (): User => ({
  fullName: '',
  email: '',
  password: '',
  school: '',
  klass: '',
})

export function signUp(data: User) {
  const id: string | number = getRandNumber()

  return set(ref(database, `users/${id}`), { ...data, id })
}
