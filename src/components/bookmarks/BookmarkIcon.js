
import BookmarkIconImage from '../../assets/icon-bookmark-empty.svg';

const BookmarkIcon = () => {
  return (
    <div className="bookmark_icon_container flex flex_center">
       <img src={BookmarkIconImage} alt = "Bookmark" role={"img"}/>
    
    </div>
  )
}

export default BookmarkIcon