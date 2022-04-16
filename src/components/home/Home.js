
import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import Search from '../Search/Search';
import Nav from '../MenuNav/Nav';
import ListCard from '../EntertemainList/ListCard';
import { fetchTrending } from '../../API';
import { apiKey } from '../../API';
import '../../styles/main.scss';

const Home = () => {

 
  const [searchTerm,setSearchTerm] = useState();
  const [trending,setTrending] = useState([]);
  const endpoint = `https:api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchTerm}`;
  const request = useFetch(searchTerm,endpoint);


  useEffect(()=>{
     
    const getTrendingData = async () =>{
      const request = await fetchTrending();
      
       request.success ? setTrending(request.data) : alert(request.error)
    }

    getTrendingData();
  },[])

  return (
    <section className='home_wrapper grid'>
    
      <header>
         <Nav/>
      </header>

      <main className='container'>
       
     
      {/* check it for extra re-render */}
        <Search handleSearchTerm = {setSearchTerm}/> 

        <section aria-label="Trending Shows">
            Trending shows
            <ListCard shows = {trending}/> 
       </section>


      </main>
    
    </section>
  )
}

export default Home