import {useState,useEffect} from 'react';
import Nav from '../MenuNav/Nav';
import Search from '../Search/Search';
import ListCard from '../EntertemainList/ListCard';
import { fetchTvSeriesRecommended,apiKey } from '../../API';
import useFetch from '../../hooks/useFetch';

const TvSeries = () => {

  const [tvSeriesRecommended,setTvSeriesRecommended] = useState([]);
  const [searchTvSeries,setSearchTvSeries] = useState('');
  const {data,isLoading} = useFetch(searchTvSeries,`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${searchTvSeries}`)

   useEffect(()=>{
      const getTvSeriesRecommended = async () =>{
        const tvSeriesFetch = await fetchTvSeriesRecommended();
        const {success,data} = tvSeriesFetch;
        success?setTvSeriesRecommended(data):console.log(data);
      } 

      getTvSeriesRecommended();
   },[])

  return (
    <section className='grid animate__animated animate__fadeIn' aria-label='Tv Series'>
       <header className='main_header' aria-label='Tv Series Page Header'>
         <Nav/>
      </header>

     <main className='container main_area'>
        <Search searchTerm={searchTvSeries} handleSearchTerm={setSearchTvSeries}/>

       {!searchTvSeries
         ?
          <>
          <section className='animate__animated animate__fadeIn' aria-label="Tv Series Recommended">
          <h2 className="heading_section white_text fw_300 fs_600 capitalize">TV series</h2>
            <div className='grid_card_container'>
              <ListCard data = {tvSeriesRecommended} type="recommended" media = "tv"/>   
            </div>
        
        </section>
        </>
        :
        <section className='search_found animate__animated animate__fadeIn'>
        {!isLoading && (
          <>
          <h2 className=" heading_section white_text fw_300 fs_600">Found {data.results.length} results for ‘{searchTvSeries}’</h2>
          <div className='grid_card_container'>

             <ListCard data = {data.results} type="search" media = "tv"/> 
           </div>
           </>
        )}
         
      </section>
       }
       
       
       
      
     </main>
      </section>
  )
}

export default TvSeries