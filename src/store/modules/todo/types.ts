export interface Todo {
  id: number
  text: string
  done: boolean
}

export interface TodoState {
  todos: Todo[]
  error: boolean
  errorMessage: string
}
