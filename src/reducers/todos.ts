import Todo from '../models/todo'
import {ActionTypes, Action} from '../actions/todos'

// Define our State interface for the current reducer
export interface State {
    todos: Todo[]
}

// Define our initialState
export const initialState: State = {
    todos: []
}

/*
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer(state: State = initialState, actions: Action){
    switch (actions.type) {
        case ActionTypes.ADD_TODO: {
            /*
             * We have autocompletion here
             * Typescript knows the action is type of AddTodoAction thanks to the ActionTypes enum
             * todo is type of Todo
             */
        const todo = actions.payload.todo

            return{
                ...state,
                todos: [...state.todos, todo]
            }
        }

        case ActionTypes.TOGGLE_TODO: {
            const { todoId } = actions.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? {...todo, done: !todo.done } : todo)
            }
        }
        default:
            return state
    }
}
