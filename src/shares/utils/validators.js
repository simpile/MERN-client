const typeRequire ='REQUIRE'
export const validatorRequire=() =>({type:typeRequire})
export const validate= (value, validators)=>{
let isValid =true;
// for(let v of validators){
    if(validators.type===typeRequire){
        isValid= isValid && value.trim().length>0
    // }
}
return isValid

}