import BookmarkIconImage from '../../assets/icon-bookmark-empty.svg';
import { postShow } from '../../API';

const BookmarkIcon = () => {


const handlePost = () =>{

  console.log('you click bookmark icon to do a post request');
  postShow({id:'1', "media_type":"movie",
    "img_path":"example/400.com",
    "year":"2022",
    "title":"example",
    "classified_show":"E"})
}

  return (
    <div className="bookmark_icon_container flex flex_center" onClick={()=>handlePost() }>
       <img src={BookmarkIconImage} alt = "Bookmark" />
    
    </div>
  )
}

export default BookmarkIcon