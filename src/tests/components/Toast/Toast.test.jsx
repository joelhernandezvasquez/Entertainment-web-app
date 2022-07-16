import { render,screen } from "@testing-library/react"
import Toast from "../../../components/Toast/Toast"

describe('Test in <Toast/>', () => 
{ 
    test('should show the component by default',()=>{
        render(<Toast/>)
        screen.debug();
    })
 })