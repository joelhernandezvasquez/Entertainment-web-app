
import { useState,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlaceholder } from '../helpers';
import IconSearch from '../../assets/icon-search.svg';

const Search = ({handleSearchTerm}) => {

    const[searchInput,setSearchInput] = useState('');
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

    const handleSubmit = (e) =>{
      e.preventDefault();
      handleSearchTerm(searchInput);
      setSearchInput('');
    }

  return (
    <div className='search flex' aria-label='Search'>
        
       <img src={IconSearch} alt="Search Icon" role="img"/>
    
       <form className='search_form' onSubmit={(e)=> handleSubmit(e)}>
        <input type="text"
            name="search"
            className='input_search fs_400 fw_300'
            id='search_icon'
            value={searchInput}
            onChange = {(e)=> setSearchInput(e.target.value)}
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