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

export const fetchShowDetail = async (url) =>{
    try{
       const request = await fetch(url);
       const response = await request.json();

       return{
         success:true,
         data_detail:response
       }
    }
    catch(err){
      return{
        success:false,
        data_detail:err
      }
    }
}

export const getShowImg = async (poster_path) =>{
  try{
     const request = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
     const result = await request.json();

     const img = result.images.base_url
     const posterSize = result.images.poster_sizes[6]; 

     return {
       success:true,
       data:`${img}${posterSize}${poster_path}`
     } 
  }
  catch(err){
   return{
     success:false,
     data:err
   }
  }
}

export const postShow = async (show) =>
{
   try{
      const request = await fetch('http://localhost:3001/bookmark_shows',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(show)
      })

      const response = await request.json()
       if(response){
          return {
           status:201
          } 
       }
   }
   catch(err){
     return{
       status:500
     }
   }
}

export const getAllShows = async () =>{

  try{
    const request = await fetch('http://localhost:3001/bookmark_shows')
    const response = await request.json();

    return{
      success:true,
      data:response
    }
  }
  catch(err){
    return{
      success:false,
      data:err
    }
  }
}

export const searchShows = async (searchText) =>{
  try{
     const request = await fetch(`http://localhost:3001/bookmark_shows?q=${searchText}`)
     const response = await request.json();
     const data = response.filter((data)=> data.title.includes(searchText))
  
  return{
    success:true,
    data
  }
  }
  catch(err){
    return{
      success:false,
      data:err
    }
  }
}

