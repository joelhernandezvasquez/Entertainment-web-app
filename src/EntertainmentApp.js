
import AppRouter from "./routers/AppRouter"
import { useContext,useEffect } from 'react';
import  {googleAuthKey} from './API/index';
import AuthContext from './auth/authContext';

const EntertainmentApp = () => {
  const {IsUserSignIn,logged} = useContext(AuthContext);
  
  useEffect(()=>{
    window.gapi.load('client:auth2', ()=>{

      window.gapi.client.init({
        clientId: googleAuthKey,
         scope:'profile email'
      }).then(()=>{
        const auth =  window.gapi.auth2.getAuthInstance();
       const profile = auth.currentUser.get().getBasicProfile();
       
        IsUserSignIn(auth.isSignedIn.get())
        
      })
     })
  
  },[])

  return (
   
    <>
    
    {logged!==null&&  <AppRouter/> }
    
     </>
    
  )
}

export default EntertainmentApp