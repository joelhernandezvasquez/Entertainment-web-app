
import ProfilePanel from './ProfilePanel';
import useToogle from '../../hooks/useToogle';
import {getImageUrl} from '../helpers/index';   
const Avatar = () => {

  
  const [toogle,handleToogle] = useToogle();

  return (
    
    <div className='avatar' aria-label='avatar'>
        
    <img src={getImageUrl()} alt="profile picture" onClick={handleToogle}/>
    
   
     { toogle &&  <ProfilePanel/>}

  </div>
  )
}

export default Avatar