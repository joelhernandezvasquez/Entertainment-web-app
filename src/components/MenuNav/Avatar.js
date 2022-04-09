
import ProfilePanel from './ProfilePanel';
import useToogle from '../../hooks/useToogle';
import AvatarImg from '../../assets/image-avatar.png';

const Avatar = () => {
  
  const [toogle,handleToogle] = useToogle();

  return (
    
    <div className='avatar' aria-label='avatar' onClick={handleToogle}>
    <img src={AvatarImg} alt="profile picture"/>
   
     { toogle &&  <ProfilePanel/>}

  </div>
  )
}

export default Avatar