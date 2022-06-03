

import  ReactDOM  from 'react-dom'

const Modal = ({content}) => {
  
  return ReactDOM.createPortal(
    <div className='modal animate__animated animate__fadeIn' onClick={(e)=> e.stopPropagation()}>
      {content}
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal