import Customer from "../components/customer/customer";
import {connect} from "react-redux";
import {AddCustomer} from "../actions/customer";
import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getTodosState = ((state: State) => state.customer)

/*
 * Getting todos array from todos State
 */
const getTodos = createSelector([getTodosState], s=> s.customer)
const mapStateToProps = (state: State) => ({
    customer: getTodos(state),
    CustomerArrayProps:{customers:state.customer.customers}
})

const mapDispatchToProps = {
    handleSubmit: AddCustomer
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Customer)