import {useContext} from 'react'
import AuthContext from '../../auth/authContext'

const Home = () => {
const {logOut} = useContext(AuthContext);


const handleLogout = () =>{
 window.gapi.auth2.getAuthInstance().signOut().then(()=>{
   logOut();
 })
}
  return (
    <div>
      Home
      
      <button onClick={()=> handleLogout()}>
        Logout
      </button>
      </div>
  )
}

export default Home