import {useState,useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import Nav from '../MenuNav/Nav'
import Search from '../Search/Search';
import ListCard from '../EntertemainList/ListCard';
import { fetchMoviesRecommended,apiKey} from '../../API';

const Movies = () => {

   const [moviesRecommended,setMoviesRecommended] = useState([]);
   const [movieSearch,handleMovieSearch] = useState('');
   const {data,isLoading} = useFetch(movieSearch,`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${movieSearch}`);
   
   useEffect(()=>{
      const getMoviesRecommendedData = async () =>{
      const moviesFetch = await fetchMoviesRecommended();
      const {success,data} = moviesFetch;

       success? setMoviesRecommended(data): console.error(data);
    }

    getMoviesRecommendedData();
   },[])

  return (
    <section className='grid' aria-label="Movies">
      {console.log(data)}
      <header className='main_header' aria-label='Movies Page Header'>
          <Nav/>
      </header>
     
      <main className='container main_area'>
      <Search searchTerm = {movieSearch} handleSearchTerm={handleMovieSearch}/>

      {!movieSearch
      ?
      <>
        <section aria-label=" Movies Recommended">
          <h2 className="heading_section white_text fw_300 fs_600 capitalize">movies</h2>
           <div className='grid_card_container'>
              <ListCard data = {moviesRecommended} type="recommended"/>   
           </div>
        
       </section>
      </>
      :
      <section className='search_found'>
         {!isLoading && (
           <>
           <h2 className=" heading_section white_text fw_300 fs_600">Found {data.results.length} results for ‘{movieSearch}’</h2>
           <div className='grid_card_container'>

              <ListCard data = {data.results} type="search"/> 
            </div>
            </>
         )}
          
       </section>
      }
      


      
      </main>
      
    
    </section>
  )
}

export default Movies