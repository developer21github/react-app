import * as React from "react";
import CustomerM from '../../models/customer'
interface CustomerArrayProps {
    customers?:CustomerM[]
}
export default class CustomerArray extends React.Component<CustomerArrayProps> {
    constructor(props: CustomerArrayProps) {
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        const { customers } = this.props
        return (
        <ul>
            {
                customers && customers.map(todo => (
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
export { CustomerArrayProps }