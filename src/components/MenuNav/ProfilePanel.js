
import {useContext} from 'react';
import authContext from '../../auth/authContext';
import {getProfileName,getProfileEmail,getImageUrl } from '../helpers/index';

const ProfilePanel = () => {
  
  const {logOut} = useContext(authContext);
  

  const handleLogout = () =>{
    window.gapi.auth2.getAuthInstance().signOut().then(()=>{
     
      try{

         logOut();
      }
      catch(err)
      {
        console.log(err);
      }
    })
  }
  return (
    <div className='profile_panel flex flex_center border_radius animate__animated animate__fadeIn'>
    
      <div className='profile_img_container'>
        <img src={getImageUrl()} className="profile_img" alt="profile picture"/>
        
      </div>  

    <div className='profile_info_col'>

     {/* need to check these functions for memoization */}

     
       <h4 className='fs_300'>{getProfileName()}</h4>
       <p className='profile_email fs_200'>{getProfileEmail()}</p>
       <button className='btn_logOut' onClick={handleLogout}>Log out</button>
    </div>
        
    </div>
  )
}

export default ProfilePanel