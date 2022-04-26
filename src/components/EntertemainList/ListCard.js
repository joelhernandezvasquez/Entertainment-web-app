
import TrendingCard from "./TrendingCard"
import EntertaimentCard from "./EntertaimentCard"


const ListCard = ({data,type}) => {


  return (
    <>
     {console.log('it renders')}
     {type ==='shows'?(data.map((item)=>{
       return <TrendingCard key ={item.id} show ={item}/>
     })):(data.map((item)=>{
       return <EntertaimentCard key = {item.id} info = {item}/>
     }))}
    </>
  )
}

export default ListCard