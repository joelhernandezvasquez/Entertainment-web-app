

import {useState} from 'react'

const useToogle = (initialValue = false) => {
 
    const [toogle,setToogle] = useState(initialValue);

    const handleToogle = () =>{
        setToogle(!toogle);
    }

    return [toogle,handleToogle];


}

export default useToogle