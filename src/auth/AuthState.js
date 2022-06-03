

import {useReducer} from 'react';
import authReducer  from './authReducer';
import  AuthContext  from './authContext';
import {types} from '../types/types';

const AuthState =  (props) =>{
 
    const initialState = {
        logged:null
    }

    const [state,dispatch] = useReducer(authReducer,initialState);

    // Actions goes here

    const IsUserSignIn = (userStatus) =>{
       dispatch({type:types.isSignIn,payload:userStatus})
    }

    const loginIn = () =>{
        dispatch({type:types.login})
    }
    const logOut = () =>{
        dispatch({type:types.logout})
    }

    return <AuthContext.Provider 
           value = {{
              
                logged:state.logged,
                IsUserSignIn,
                loginIn,
                logOut
            }}
            >
          {props.children}
          </AuthContext.Provider>

}

export default AuthState;