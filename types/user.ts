export enum UserType {
  TEACHER = 'teacher',
  STUDENT = 'student',
  DIRECTOR = 'director',
}

export interface UserData {
  fullName?: string
  email: string
  password: string
  school?: string
  klass?: string
  type: UserType
  id: string | number | null
}
