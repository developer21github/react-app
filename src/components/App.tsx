import * as React from 'react'
import AddTodo from '../containers/AddTodo'
import Todos from '../components/TodosList'

class AddTodoForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <AddTodo />
                <Todos />
            </div>
        );
    }
}

export default AddTodoForm;
