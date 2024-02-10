import { ADDTOCART, REMOUVEFROMCART } from "./Actiontype"

export const addtocart=(data)=>{
    return{type:ADDTOCART,payload:data}

}
export const remouve=(id)=>{
    return {type:REMOUVEFROMCART,paylod:id}
}