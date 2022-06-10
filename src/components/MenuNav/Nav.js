
import Avatar from './Avatar';
import Logo from '../../assets/logo.svg';
import Menu from './Menu';

const Nav = () => {

  return (
      <nav className="main_navigation" aria-label='Main Navigation'>
          <img src={Logo} alt="Movie Logo"/>
          <Menu/>
          <Avatar aria-label="User Profile"/>
    </nav>
  )
}

export default Nav