
import {useContext} from 'react';
import authContext from '../../auth/authContext';
import {getProfileName,getProfileEmail } from '../helpers';
import AvatarImg from '../../assets/image-avatar.png';

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
    <div className='profile_panel flex flex_row_center_space_between border_radius animate__animated animate__fadeIn'>
   {console.log('it renders')}
      <div className='profile_img_container'>
        <img src={AvatarImg} className="profile_img" alt="profile picture"/>
        
      </div>  

    <div className='profile_info_col'>

     {/* need to check these functions for memoization */}
       <h4 className='fs_300'>{getProfileName()}</h4>
       <p className='fs_200'>{getProfileEmail()}</p>
       <button className='btn_logOut' onClick={handleLogout}>Log out</button>
    </div>
        
    </div>
  )
}

export default ProfilePanel