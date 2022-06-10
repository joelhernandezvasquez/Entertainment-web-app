
import { useContext } from 'react';
import AuthContext from '../../auth/authContext';
import Logo from '../../assets/logo.svg';
import '../../styles/main.scss';

const Login = () => {
   const {loginIn} = useContext(AuthContext);
 
   const handlerLogin = () =>{
    window.gapi.auth2.getAuthInstance().signIn().then(()=>{
       loginIn();
     }) 
   }

  return (
    <section className='login_wrapper flex flex_column_center animate__animated animate__fadeIn'>
       <header>
         <img src={Logo} alt="Red Movie Logo"/>
       </header>
       <main>
         <div className='login_container' role="form" aria-labelledby='sign-in-form'>
           <h1 className='white_text fw_300 fs_800'>Login</h1>
           <button 
              onClick={()=> handlerLogin()}
             className='signInBtn flex flex_center'
              aria-describedby='sign in google'> 
              <i className="fa fa-google google_icon" role="img" aria-label='Google Icon' aria-hidden="true"></i> Sign In with Google
              </button>
           <p className='white_text fw_300 fs_300 text_center'>Don't have an account? <a className='google_link capitalize' href='https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp' target="blank">sign up</a></p>
         </div>
       </main>
    </section>
  )
}

export default Login