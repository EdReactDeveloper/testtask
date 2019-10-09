import {FORM_FIELD} from './types'

export const formFieldAction = (key, value)=> dispatch=>{
  dispatch({
    type: FORM_FIELD, 
    payload: {key, value}
  })
}