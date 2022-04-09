import {useContext} from 'react'
import AuthContext from '../../auth/authContext'
import Nav from '../MenuNav/Nav';
import '../../styles/main.scss';

const Home = () => {

  const {logOut} = useContext(AuthContext);

const handleLogout = () =>{
 window.gapi.auth2.getAuthInstance().signOut().then(()=>{
   logOut();
 })
}
  return (
    <section className='home_wrapper grid'>
      
      <header>
         <Nav/>
      </header>
    
    </section>
  )
}

export default Home