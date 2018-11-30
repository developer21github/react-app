import CustomerM from '../models/customer'

export enum ActionTypes {
    ADD_CUSTOMER = '[customer] ADD_CUSTOMER',
    GET_CUSTOMER = '[customer] DET_CUSTOMER'
}

export interface AddCustomerAction { type: ActionTypes.ADD_CUSTOMER, payload: {Customer: CustomerM} }

export function AddCustomer(Customer: CustomerM): AddCustomerAction {
    return {
        type: ActionTypes.ADD_CUSTOMER,
        payload: {Customer}
    }
}
//
// export const AddCustomer = createAction('[customer] ADD_CUSTOMER' (resolve) => (
//     (value: any) => resolve(value)
// ))
export type Action = AddCustomerAction