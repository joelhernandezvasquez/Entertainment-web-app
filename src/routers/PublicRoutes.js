
import {useContext} from 'react';
import AuthContext from '../auth/authContext';
import { Navigate} from 'react-router-dom';
const PublicRoutes = ({children}) => {

    const {logged} = useContext(AuthContext);
 
    return logged ? <Navigate to={"/home"}/>:children 
}

export default PublicRoutes