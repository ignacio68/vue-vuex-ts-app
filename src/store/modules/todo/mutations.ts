import { MutationTree } from 'vuex'
import { Todo, TodoState } from './types'

type TodoMutationsTree = MutationTree<TodoState>

export const mutations: TodoMutationsTree = {
  todosLoaded(state: TodoState, todos: Todo[]) {
    state.todos = todos
  },
  uodateTodoStatus(state: TodoState, payLoad: Todo) {
    const todo = state.todos.find(t => t.id === payLoad.id)
    if (todo) {
      todo.done = !todo.done
    }
  },
  todosError(state: TodoState, payload: string) {
    state.error = true
    state.errorMessage = payload
    state.todos = []
  },
}
