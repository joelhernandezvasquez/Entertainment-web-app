import {useContext} from 'react';
import AuthContext from '../auth/authContext';
import { Navigate,useLocation} from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {logged} = useContext(AuthContext);

  const {pathname} = useLocation();
  
  window.localStorage.setItem('lastPath',pathname);
  
   return logged ? children :<Navigate to={"/login"}/>

}

export default PrivateRoutes