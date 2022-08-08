import  { useCallback, useReducer } from 'react'
const formReducer=(statee, action)=>{
    switch(action.type){
      case'INPUT-CHANGE':
        let formIsValid = true
       
        for (const inputId in statee.inputs){

          if(!statee.inputs[inputId]){
            continue
          }

          if(inputId===action.inputId){
          formIsValid = formIsValid && action.isValid}
           else{
            formIsValid = formIsValid && statee.inputs[inputId].isValid
          }
        }
        return{
          ...statee,
          inputs:{
          ...statee.inputs,
          [action.inputId]:{
            value:action.value,
            isValid:action.isValid}
          },
          isValid:formIsValid
          
        }
        default: 
        return statee
    }
  
  }
export const useForm=(intialState, intialValidation)=>{
    const [formState, formDispatch]=useReducer(formReducer,{
        inputs:intialState,
          isValid:intialValidation})
          const inputHandler =useCallback((id, value, isValid)=>{
            formDispatch({
              type:'INPUT-CHANGE',
              value:value,
              isValid:isValid,
              inputId:id
            })},[])

            return[formState, inputHandler]
}