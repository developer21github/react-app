import { ActionTypes,Action } from '../actions/customer'
import CustomerM from '../models/customer'

export interface State {
    customer: CustomerM
    customers: CustomerM[]
    CustomerArrayProps:CustomerM[]
}
export const initialState: State = {
    customer:  {
        name: '',
        email: '',
        state: '',
        language: '',
        address: '',
        profile: '',
        post: '',
        dob: 0,
        time: 0,
        color: ''
    } as CustomerM,
    customers:[],
    CustomerArrayProps:[]
}
export function reducer(state: State = initialState, actions: Action) {
    switch (actions.type) {
        case ActionTypes.ADD_CUSTOMER: {
            const customers = state.customers
            customers.push(actions.payload.Customer);
            window.console.log(customers, '/////')
            return {
                ...state,
                CustomerArrayProps:customers
            }
        }
        default:
            return state

    }
}