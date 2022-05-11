export const googleAuthKey = '783671543086-17518aum8mlbtu0ev1mvknvv6595oqb0.apps.googleusercontent.com'
export const apiKey = '5ae4e2493ae1e37b5fa722f26121bef2';


export const fetchTrending =  async () =>{
  try
  {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
    const result = await response.json();
     
    return{
        data:result.results
    }
  }
  catch(err){
   return {
       data:err
   }
  }
}

export const fetchRecommended = async () =>{
  try{
   const request = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
   const response = await request.json();
  
   return {
     success:true,
     data:response.results 

   }
  }
  catch(err){
    return{
      success:false,
      data:err
    }
  }
}

export const fetchMoviesRecommended = async ()=>{
   try{
      const request = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
      const response = await request.json();

      return{
        success:true,
        data:response.results
      }
   }
   catch(err){
     return{
       success:false,
       data:err
     }
   }
}

export const fetchTvSeriesRecommended = async() =>{

  try{
     const request = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`);
     const response = await request.json();

      console.log(response);
     return {
       success:true,
       data:response.results
     }
  }
  catch(err){
    return {
      success:false,
      data:err
    }
  }
}