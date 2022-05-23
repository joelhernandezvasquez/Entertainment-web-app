
import { Routes, Route} from "react-router-dom";
import Home from "../components/home/Home";
import Movies from '../components/movies/Movies';
import Show from "../components/show/Show";
import TvSeries from "../components/tvSeries/TvSeries";
import Bookmark from "../components/bookmarks/Bookmark";

const DashboardRoutes = () => {
  
  return (
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="movies" element={<Movies/>}/>
      <Route path="tvSeries" element={<TvSeries/>}/>
      <Route path="show/:id" element={<Show/>}/>
      <Route path="bookmark" element={<Bookmark/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default DashboardRoutes