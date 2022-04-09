
// this function connects to the google auth2 api and return the user profile
// name if the user has been authenticated succesfully
export const getProfileName = () =>{
  
    try{
        return window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();
       
    }
    catch(err){
        console.log(err);
    }

}

export const getProfileEmail = () =>{
    try{

       return window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
    
    }
    catch(err) {
        console.log(err);
    }
}