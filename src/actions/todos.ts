import Todo from '../models/todo'


/*
 * In order to automatically generate id for our todos
 */
let nextId = 0

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better
 */
export enum ActionTypes {
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

/*
 * Define return types of our actions
 * Every action returns a type and a payload
 */
export interface AddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface ToggleTodoAction{ type: ActionTypes.TOGGLE_TODO, payload: {todoId: number}}

export function addTodo(name: string): AddTodoAction {

    return {
        type: ActionTypes.ADD_TODO,
        payload:{
            todo: {
            id: nextId ++,
            name,
            done: false
            }
        }
    }
}

export function toggleTodo(todoId: number): ToggleTodoAction {
    return {
        type: ActionTypes.TOGGLE_TODO,
        payload:{todoId}
    }
}

export type Action = AddTodoAction | ToggleTodoAction