// import React from 'react';
// import ReactDOM from 'react-dom';
// import EntertainmentApp from './EntertainmentApp';
// import AuthState from './auth/AuthState';


// ReactDOM.render(
 
// <AuthState>

//   <EntertainmentApp/>
// </AuthState>
 
//   ,
//   document.getElementById('root')
// );



import React from 'react';

import ReactDOM from 'react-dom';
import EntertainmentApp from './EntertainmentApp';
import AuthState from './auth/AuthState';



const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <AuthState>

  <EntertainmentApp/>
</AuthState>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
