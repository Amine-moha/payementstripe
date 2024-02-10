import { ADDTOCART, REMOUVEFROMCART } from "./Redux/Actiontype"

const initialState = []

export const cartreduicer=(state = initialState, { type, payload }) => {
  switch (type) {

  case ADDTOCART:
    return [...state,payload]
case REMOUVEFROMCART:
    return state.filter(e=>e.product.id!==payload)
  default:
    return state
  }
}
