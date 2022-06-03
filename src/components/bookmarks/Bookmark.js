import {useState,useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import Nav from '../MenuNav/Nav'
import Search from '../Search/Search'
import BookmarkList from './BookmarkList'
import { getAllShows} from '../../API'
import { filterByMedia } from '../helpers'

const Bookmark = () => {

  const [bookmarkMovies,setBookmarkMovies] = useState([]);
  const [bookmarkTvSeries,setBookmarkTvSeries] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const {data,isLoading} = useFetch(searchTerm,`http://localhost:3001/bookmark_shows?q=${searchTerm}`);

  useEffect(()=>{
    const getData = async () =>{
      const {success,data} = await getAllShows()

        if(success){
           setBookmarkMovies(filterByMedia(data,'movie'));
          setBookmarkTvSeries(filterByMedia(data,'tv'));
        }        
    }

    getData()
  },[])

  
  return (
    <section className='grid animate__animated animate__fadeIn' aria-label="bookmark">
       <header className="main_header">
         <Nav/>
      </header>
    
      
      <main className='container main_area'>
          <Search searchTerm = {searchTerm} handleSearchTerm = {setSearchTerm}/>
          {!searchTerm ?
          <>
          <section className='animate__animated animate__fadeIn' aria-label=" Movies Recommended">
          <h2 className="heading_section white_text fw_300 fs_600 capitalize">Bookmarked Movies</h2>
           <div className='grid_card_container'>
              <BookmarkList data = {bookmarkMovies} />    
           </div>
        
       </section>

       <section className='animate__animated animate__fadeIn' aria-label=" Movies Recommended">
          <h2 className="heading_section white_text fw_300 fs_600 capitalize">Bookmarked Tv Series</h2>
           <div className='grid_card_container'>
              <BookmarkList  data = {bookmarkTvSeries} />    
           </div>
        
       </section>
       </>
       :
       <section className='search_found animate__animated animate__fadeIn'>
         {!isLoading && (
           <>
           <h2 className=" heading_section white_text fw_300 fs_600">Found {data.length} results for ‘{searchTerm}’</h2>
           <div className='grid_card_container'>

              <BookmarkList data = {data} type="search"/> 
            </div>
            </>
         )}
          
       </section>
     
  
       
          }
      </main>
    </section>
  )
}

export default Bookmark