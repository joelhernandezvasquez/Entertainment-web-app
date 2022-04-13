
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Search from '../Search/Search';
import Nav from '../MenuNav/Nav';
import { apiKey } from '../../API';
import '../../styles/main.scss';

const Home = () => {

 
  const [searchTerm,setSearchTerm] = useState();
  const endpoint = `https:api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchTerm}`;
  const request = useFetch(searchTerm,endpoint);

  return (
    <section className='home_wrapper grid'>
      {console.log(request)}
      <header>
         <Nav/>
      </header>

      <main className='container'>
      {/* check it for extra re-render */}
        <Search handleSearchTerm = {setSearchTerm}/> 
      </main>
    
    </section>
  )
}

export default Home