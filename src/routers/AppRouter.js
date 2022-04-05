
import { Routes, Route,BrowserRouter} from "react-router-dom";
import Login from '../components/login/Login';
import DashboardRoutes from "./DashboardRoutes";
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';


const AppRouter = () => {


   return(
      <BrowserRouter>

      <Routes>
        <Route path="/login" element={
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        } />

        
        <Route path = "/*" element = {
          
          <PrivateRoutes> 
            <DashboardRoutes/>
            </PrivateRoutes>
        } 
          />

       

      </Routes>    
     </BrowserRouter>
   )
}

export default AppRouter