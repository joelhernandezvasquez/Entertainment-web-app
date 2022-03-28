
import { Routes, Route,BrowserRouter} from "react-router-dom";
import Login from '../components/login/Login';
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
   return(
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login />} />
       </Routes>
       
       <Routes>
        <Route path="/*" element = {<DashboardRoutes/>}/>
       </Routes>
    </BrowserRouter>
   )
}

export default AppRouter