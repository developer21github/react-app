import * as React from 'react'
import Todo from '../models/todo'
import { getTodos } from '../selectors/todos'
import { toggleTodo } from '../actions/todos'
import { connect } from 'react-redux'
import { State } from '../reducers'


interface Props {
    todos: Todo[],
    onTodoClicked: (todoId: number) => void
}
interface Cstate {}

class AddTodoForm extends React.Component<Props, Cstate> {
    constructor(props: Props){
        super(props)
    }
    render() {
        const { todos } = this.props
        return (
        <ul>
            {
                todos.map(todo => (
                <li>
                    {todo.name}
                </li>
                )
            )
            }
    </ul>
        )
    }
}

const mapStateToProps = (state: State) => ({
    todos: getTodos(state)
})

const mapDispatchToProps = {
    onTodoClicked: toggleTodo
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(AddTodoForm)
