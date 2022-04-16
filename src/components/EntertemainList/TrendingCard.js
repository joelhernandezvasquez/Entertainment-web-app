
import useFetchImage from '../../hooks/useFetchImage';
import {getYear,getClassifiedShow} from '../helpers/index';

const TrendingCard = ({show}) => {
 
 const year = getYear(show.media_type === 'movie' ? show.release_date: show.first_air_date)  // probably needs to use memo here
 const {media_type} = show;
 const classifiedShow = getClassifiedShow(media_type,show.adult);
 const title = media_type === 'movie'? show.title : show.name
 const {data,isLoading} = useFetchImage(show.poster_path);


  return (
    <div className='trending_card'>
     
      {!isLoading && ( 
        <img src={data} className="border_radius"/>
      )
      }
    </div>
  )
}

export default TrendingCard