import { User } from '~/types/user'

export function auth() {}

export const getPureUser = (): User => ({
  fullName: '',
  email: '',
  password: '',
  school: '',
  klass: '',
})
