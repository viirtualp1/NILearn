import { ref, set } from 'firebase/database'
import { useStore } from '@nuxtjs/composition-api'
import { User } from '~/types/user'
import { getRandNumber } from '~/services/numbers'
import { database } from '@/services/db'

const store = useStore()

export const getPureUser = (): User => ({
  fullName: '',
  email: '',
  password: '',
  school: '',
  klass: '',
})

export function signUp(data: User) {
  store.commit('setAuth', true)

  return set(ref(database, 'users'), { ...data, id: getRandNumber() })
}
