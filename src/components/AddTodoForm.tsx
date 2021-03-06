import * as React from 'react'
import { FormEvent } from 'react';
/*
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
*/

interface Props {
    handleSubmit: (value: string) => void
}

interface State {
    value: string
}

export default class AddTodoFormm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { value: '' } // Value is empty by default
        this._updateValue = this._updateValue.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _updateValue(value: string) {
        this.setState({ value })
    }

    _handleSubmit(e: FormEvent<any>) {
        e.preventDefault()
        if (!this.state.value.trim()) {
            return
        }

        this.props.handleSubmit(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        const { value } = this.state
        const { _updateValue, _handleSubmit } = this
        return (
            <form onSubmit={_handleSubmit}>
                <input type="text" value={value} onChange={e => _updateValue(e.target.value)} />
            {/*    <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="enter name..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="enter email..."/>
                </FormGroup>
                <FormGroup>
                    <Lable for="password"> Password</Lable>
                    <Input type="password" name="password" id="email" placeholder="enter password..." />
                </FormGroup>
                <FormGroup>
                    <Label for="state">State</Label>
                    <Input type="select" name="state" id="state" palceholder="select state" />
                </FormGroup>*/}
                <button type="submit">Add todo !</button>
            </form>
        )
    }
}