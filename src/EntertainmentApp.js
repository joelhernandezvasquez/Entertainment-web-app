import AppRouter from "./routers/AppRouter"

import AuthState from './auth/AuthState';

const EntertainmentApp = () => {
  return (
 <AuthState>
     <AppRouter/>
 </AuthState>
  )
}

export default EntertainmentApp