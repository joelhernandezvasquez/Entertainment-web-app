export const googleAuthKey = '783671543086-17518aum8mlbtu0ev1mvknvv6595oqb0.apps.googleusercontent.com'
export const apiKey = '5ae4e2493ae1e37b5fa722f26121bef2';


export const fetchTrending = async () =>{
  try
  {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=5ae4e2493ae1e37b5fa722f26121bef2');
    const result = await response.json();

    return{
        success:true,
        data:result.results
    }
  }
  catch(err){
   return {
       success:false,
       data:err
   }
  }
}