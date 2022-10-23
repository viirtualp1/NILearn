enum PRIORITY {
  LOW = 1,
  MIDDLE = 2,
  HIGH = 3,
}

export interface NoteData {
  title: string
  text: string
  deadline: number | string
  priority: PRIORITY
  id: string | number
}
