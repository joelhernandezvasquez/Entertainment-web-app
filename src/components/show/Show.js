
import {useEffect,useState} from 'react';
import { apiKey,fetchShowDetail,getShowImg } from '../../API';
import { useParams,useLocation } from 'react-router-dom';
import { getYear } from '../helpers';


const Show = () => {

  const {id} = useParams();
 
  const {state} = useLocation();
  const apiUrl = state === 'movie' ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`:
  `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
  const [showInfo,setShowInfo] = useState(null);
  const [showImg,setShowImg] = useState(null);
 

  useEffect(()=>{
    const getDetails = async () =>{
      const {data_detail,success} = await fetchShowDetail(apiUrl);
  
      const{data} = await getShowImg(data_detail.poster_path);
       
         if(success){
           setShowInfo(data_detail);
           setShowImg(data);
           return;
         }
          throw new Error('The data did not fetch correctly');
    }

       getDetails();
  },[apiUrl])


  return (
    <section className='show_container animate__animated animate__zoomIn '>
    
     <div className='show_img_container'>
        <img src={showImg} alt=""/>  
     </div>

     <div className='show_information_container container'>
       {showInfo &&(
         <>
          <h1 className='show_title uppercase'>{showInfo.original_title || showInfo.name}</h1>
          
          <div className='icon_box_container'>
          <div className='icon_box'>
          <i className="fa fa-star-o" aria-hidden="true"></i> 
          <p>{showInfo.vote_average}</p>
          </div>
          
          <div className='icon_box'>
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <p>{getYear(showInfo.first_air_date || showInfo.release_date)}</p>
          </div>
          </div>
         
          <p className='show_title_subheading'>{showInfo.overview}</p>
         
          
          <a href={showInfo.homepage}   className='btn_play'><i className="fa fa-play" aria-hidden="true"></i> Watch Trailer</a>
          
          
        
          </>
       )}
      
     </div>
     
     </section>

  )
}

export default Show