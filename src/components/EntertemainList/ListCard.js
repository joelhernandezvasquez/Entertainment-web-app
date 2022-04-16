
import TrendingCard from "./TrendingCard"


const ListCard = ({shows}) => {

  return (
    <>
   
     {shows.map((show)=>{
         return <TrendingCard key= {show.id} show = {show}/>
     }
     )}
    </>
  )
}

export default ListCard