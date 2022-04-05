

import {useReducer} from 'react';
import authReducer  from './authReducer';
import  AuthContext  from './authContext';
import  {googleAuthKey} from '../API/index';
import {types} from '../types/types';

const AuthState =  (props) =>{
 
    const initialState = {
        logged:null
    }

    

    const [state,dispatch] = useReducer(authReducer,initialState);

    // Actions goes here

    const IsUserSignIn = (userStatus) =>{
       dispatch({type:types.login,payload:userStatus})
    }

    return <AuthContext.Provider 
           value = {{
              
                logged:state.logged,
                IsUserSignIn
            }}
            >
          {props.children}
          </AuthContext.Provider>

}

export default AuthState;