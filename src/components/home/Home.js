import Search from '../Search/Search';
import Nav from '../MenuNav/Nav';
import '../../styles/main.scss';

const Home = () => {

 

  return (
    <section className='home_wrapper grid'>
      
      <header>
         <Nav/>
      </header>

      <main className='container'>
        <Search/>
      </main>
    
    </section>
  )
}

export default Home