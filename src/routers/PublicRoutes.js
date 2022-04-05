
import {useContext} from 'react';
import AuthContext from '../auth/authContext';
import { Navigate} from 'react-router-dom';
const PublicRoutes = ({children}) => {

    const {logged} = useContext(AuthContext);

     const lastPath = window.localStorage.getItem('lastPath') || '/home'; 
    
    return logged ? <Navigate to={lastPath}/>:children 
}

export default PublicRoutes