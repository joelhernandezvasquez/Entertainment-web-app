import { useState, useEffect,useRef } from 'react'


const useFetch = (search,endpoint) => {
  
 const [response,setResponse] = useState({
     data:null,
     isLoading:true,
     error:null
 });
 
 const isMounted = useRef(true);

 useEffect(() => {
  
    return () => {
      isMounted.current = false;
    }
  }, [])


  useEffect(()=>{
    const getData = async () =>{
       try{
          const request  = await fetch(endpoint);
          const result = await request.json();

          if(isMounted){
              setResponse({data:result, isLoading:false,error:null})
          }
       }
       catch(err){
         setResponse({
             data:null,
             isLoading:false,
             error:err
         })
       }
    } 

    if(search){
        getData();
    }

  },[search])

return response;
}

export default useFetch