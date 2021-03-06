import {types} from '../types/types';

export default (state,action) =>{

    switch(action.type){

        case types.isSignIn:
            return{
                ...state,
                logged:action.payload
            }
        
        
        case types.login :
        return{
            ...state,
            logged:true
        }  

        case types.logout :
        return{
            ...state,
            logged:false
        }  
        

        default:
            return state

    }

}