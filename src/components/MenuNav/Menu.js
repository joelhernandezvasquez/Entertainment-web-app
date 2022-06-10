
import {links} from '../../Constants/constants';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <ul className='menu_items flex'>

      {links.map((link)=>{
        return <MenuItem key={link.id} linkInfo = {link}/>
      })}
  
  </ul> 
  )
}

export default Menu