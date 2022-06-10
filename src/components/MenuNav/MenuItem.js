import { useState } from 'react';
import {Link,useLocation} from 'react-router-dom';
import {routes} from '../../Constants/constants';

const MenuItem = ({linkInfo}) => {
    const {pathname} = useLocation();
    const [activeLink,setActiveLink] = useState(pathname);
    const {id,route,pathIcon} = linkInfo
    
    const handleClick = (e) =>{
        setActiveLink(e.target.dataset.route);
    }
  return (
   <li className='items'>
      <Link to={route} onClick={(e)=> handleClick(e)} aria-current={activeLink === routes[id] && 'page'} > 
         <svg data-route={route} width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img">
             <path d={pathIcon}
             fill={`${activeLink === routes[id]?'#FFF':  '#5A698F'}`}data-route={route}/>
          </svg>
     </Link>
    </li>
  )
}
export default MenuItem