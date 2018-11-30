import * as React from 'react'
import {FormGroup, Input, Button, FormText, Label, Row, Col} from 'reactstrap'
import CustomerM from '../../models/customer'
import  {CustomerArrayProps as CustomerArrayProps} from "./customerIndex";

interface CustomerProps {
    customer?: CustomerM
    handleSubmit: (value: any) => void
    CustomerArrayProps:CustomerArrayProps
}

export default class Customer extends React.Component<CustomerProps> {
    constructor(props: CustomerProps) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStateChange = (e: any, key: any) => {
        this.setState({
            [key]: e ? e.target.value : null
        })
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        window.console.log(this.state);
        this.props.handleSubmit(this.state)
        return this.state;
    }

    render() {
        return (

            <div className="col-md-6">
                <div className="docs-example">
                    <h3>Customer</h3>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" onChange={(e) => this.handleStateChange(e, 'name')}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" onChange={(e)=> this.handleStateChange(e, 'email')} placeholder="enter email..." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="state">State</Label>
                            <Input type="select" name="state" id="state" onChange={(e)=> this.handleStateChange(e, 'state')} palceholder="select state">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="language">Language</Label>
                            <Input type="select" name="language" id="language" onChange={(e)=> this.handleStateChange(e, 'language')} multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="textarea" name="address" id="address" onChange={(e)=> this.handleStateChange(e, 'address')} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profile">Profile</Label>
                            <Input type="file" name="profile" id="profile" onChange={(e)=> this.handleStateChange(e, 'profile')} />
                            <FormText color="muted">
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <legend>Post</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="post" value="Manager" onChange={(e)=> this.handleStateChange(e, 'post')} />
                                    Manager
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="post" value="Developer" onChange={(e)=> this.handleStateChange(e, 'post')} />
                                    Developer
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="post" value="Trainee" onChange={(e)=> this.handleStateChange(e, 'post')}/>
                                    Trainee
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                <Input type="checkbox" value="Indian" name="nationality" id="nationality" onChange={(e)=> this.handleStateChange(e, 'nationality')} />{' '}
                                Indian
                            </Label>
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="dob">DOB</Label>
                                    <Input type="date" name="dob" id="dob" onChange={(e)=> this.handleStateChange(e, 'dob')} placeholder="date of birth" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Last office start time</Label>
                                    <Input type="time" name="time" id="time" onChange={(e)=> this.handleStateChange(e, 'time')} placeholder="Last office start time" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="color">Color</Label>
                            <Input type="color" name="color" id="color" onChange={(e)=> this.handleStateChange(e, 'color')} placeholder="favorite color " />
                        </FormGroup>
                        <FormGroup>
                            <Button>Submit</Button>
                        </FormGroup>
                    </form>
                </div>
            </div>
        )
    }
}
