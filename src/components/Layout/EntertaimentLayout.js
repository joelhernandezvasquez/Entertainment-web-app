
import Nav from "../MenuNav/Nav"

const EntertaimentLayout = ({children}) => {
  return (
  <>
   <header className="main_header">
         <Nav/>
      </header>

      {children}
  </>

  )
}

export default EntertaimentLayout