import {useRef } from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { getPlaceholder } from '../helpers';
import IconSearch from '../../assets/icon-search.svg';

const Search = ({searchTerm,handleSearchTerm}) => {

   
    const inputRef = useRef(null);
    const location = useLocation();

    const handleKeyPress = ()=>{
    inputRef.current.classList.add('active_input_search');
    } 

    const handleKeyUp = () =>{
      let timer;

      clearTimeout(timer);

     timer = setTimeout(()=>{
        
        inputRef.current.classList.remove('active_input_search');
      },3000)
      
    }


  return (
    <div className='search flex' aria-label='Search'>
        
       <img src={IconSearch} alt="Search Icon" role="img"/>
    
       <form className='search_form' onSubmit={(e)=> e.preventDefault()}>
        <input type="text"
            name="search"
            className='input_search fs_400 fw_300'
            id='search_icon'
            value={searchTerm}
            onChange = {(e)=> handleSearchTerm(e.target.value)}
            placeholder={`Search for ${getPlaceholder(location.pathname)}`} // check for optimization use memo or use callback
            ref={inputRef}
            onKeyDown = {()=> handleKeyPress()}
            onKeyUp = {()=> handleKeyUp()}
        />
       </form>
      
    </div>
  )
}

export default Search

Search.prototypes = {
  searchTerm:propTypes.string.isRequired,
  handleSearchTerm:propTypes.func.isRequired
}