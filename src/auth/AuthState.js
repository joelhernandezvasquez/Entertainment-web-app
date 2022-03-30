

import {useReducer} from 'react';
import authReducer  from './authReducer';
import  AuthContext  from './authContext';

const AuthState =  (props) =>{
 
    const initialState = {
        userName:'Joel Hernandez',
        userEmail:'jhernandez98@outlook.es',
        logged:false
    }

    // const init = () =>{

    // }

    const [state,dispatch] = useReducer(authReducer,initialState);

    // Actions goes here

    return <AuthContext.Provider 
           value = {{
                userName: state.userName,
                userEmail: state.userEmail,
                logged:state.logged
            }}
            >
          {props.children}
          </AuthContext.Provider>

}

export default AuthState;