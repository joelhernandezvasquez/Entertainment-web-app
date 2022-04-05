import {useContext} from 'react';
import AuthContext from '../auth/authContext';
import { Navigate} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {logged} = useContext(AuthContext);
 
   return logged ? children :<Navigate to={"/login"}/>

}

export default PrivateRoutes