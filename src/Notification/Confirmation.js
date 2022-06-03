
import {motion} from 'framer-motion';

const Confirmation = ({close,top,handleConfirmation}) => {
  return (
    <motion.div initial ={{opacity:0}} animate ={{opacity:1}} transition={{ duration: 1.5 }} exit={{opacity:0}} className="confirmation" style={{marginTop:`${top.current - 120}px`} }>
   
       <p>Are you sure you want to bookmark this show?</p>
       <div className="confirmation_btn_containers">
           <button onClick={()=>handleConfirmation()}>Yes</button>
           <button onClick={()=> close()}>Cancel</button>
       </div>
    </motion.div>
  )
}

export default Confirmation;