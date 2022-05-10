
import { useState, useEffect,useRef} from 'react';
import useFetch from '../../hooks/useFetch';
import {motion} from 'framer-motion';
import Search from '../Search/Search';
import Nav from '../MenuNav/Nav';
import ListCard from '../EntertemainList/ListCard';
import { fetchTrending,fetchRecommended } from '../../API';
import { apiKey } from '../../API';
import '../../styles/main.scss';

const Home = () => {

  const [searchTerm,setSearchTerm] = useState('');
  const [trending,setTrending] = useState([]);
  const [recommended,setRecommended] = useState([]);
  const [trendingShowWidth,setTrendingShowWidth] = useState();
  const trendingShowContainerRef = useRef();
  const {data,isLoading} = useFetch(searchTerm,`https:api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchTerm}`);
  const offWidth = useRef();
 
  useEffect(()=>{
  
     if(trending.length === 0){
       offWidth.current = trendingShowContainerRef.current.offsetWidth;
     }
  
   setTrendingShowWidth(trendingShowContainerRef.current.scrollWidth - offWidth.current);

  },[trending])


  useEffect(()=>{
    const getTrendingData = async () =>{
    
      Promise.allSettled([
        fetchTrending(),
        fetchRecommended()
      ]).then((response)=>{
        
        setTrending(response[0].value.data);
        setRecommended(response[1].value.data);
      
      })
      .catch(err=>{
       setTrending(null)
       setRecommended(null)
       throw new Error(err);
      })

    }
    getTrendingData();
   
  },[])

  
  return (
    <section className='home_wrapper grid' aria-label="Home">
     
      <header className="main_header">
         <Nav/>
      </header>

      <main className='container main_area'>
       
        <Search searchTerm = {searchTerm} handleSearchTerm = {setSearchTerm}/> 

      {!searchTerm
      
      ? 
      <>
      
      <section className="trending_show_section"  aria-label="Trending Shows">
            <h2 className="heading_section white_text fw_300 fs_600">Trending</h2>
        
           <motion.div ref={trendingShowContainerRef} className='trending_show_container' whileTap={{cursor:'grabbing'}}>
                <motion.div drag="x" dragConstraints={{right:0,left:-trendingShowWidth}} className='inner_show_container'>
               
                    <ListCard data = {trending} type="shows"/> 
                </motion.div>
           </motion.div>
            
       </section>


       <section aria-label="Recommended for you">
          <h2 className=" heading_section white_text fw_300 fs_600">Recommended for you</h2>
           <div className='grid_card_container'>
             <ListCard data = {recommended} type="recommended"/> 
           </div>
        
       </section>
       </>
       :
      
       <section className='search_found'>
         {!isLoading && (
           <>
           <h2 className=" heading_section white_text fw_300 fs_600">Found {data.results.length} results for ‘{searchTerm}’</h2>
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

export default Home