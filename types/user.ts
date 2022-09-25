export enum UserType {
  TEACHER = 'teacher',
  STUDENT = 'student',
  DIRECTOR = 'director',
}

export interface User {
  fullName?: string
  email: string
  password: string
  school?: string
  klass?: string
}
