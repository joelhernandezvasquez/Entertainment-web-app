
import { useContext } from 'react';
import AuthContext from '../../auth/authContext';
import '../../styles/main.scss';
import Logo from '../../assets/logo.svg';

const Login = () => {
   const userContext = useContext(AuthContext);
  
  return (
    <section className='login_wrapper flex flex_column_center animate__animated animate__fadeIn' role="region">
       <header>
         <img src={Logo} alt="Movie Red Icon" role="img"/>
       </header>

       <main role="main">
         <div className='login_container' role="form" aria-labelledby='sign-in-form'>
           <h1 className='white_text fw_300 fs_800'>Login</h1>
           <button 
           onClick={()=> userContext.signIn()}
             className='signInBtn flex flex_center'
              aria-describedby='sign in google'> 
              <i className="fa fa-google google_icon" aria-hidden="true"></i> Sign In with Google
              </button>
           <p className='white_text fw_300 fs_300 text_center'>Don't have an account? <a className='google_link capitalize' href='https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp' target="_blank">sign up</a></p>
         </div>
       </main>
    </section>
  )
}

export default Login