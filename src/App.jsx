import { useState } from 'react'

import Display from './components/Display'
import './App.css'
import Buttons from './components/Buttons'
function App() {
  let [calval,setcal]=useState("");
   const handlebtnclick=function btnclick(e){
    try {
      if(e == 'C'){
        let item="";

        calval=item;
        setcal(calval);
      }
      else if(e =='='){
        calval = eval(calval);
        setcal(calval);
      } else{
        calval+=e;
      setcal(calval);
      }
    } catch (error) {
      console.log(error)
    }
    
   }
  return (
    <> <center><div className="calculator">
    <Display calval={calval}></Display>
     <Buttons calval={calval} handlebtnclick={handlebtnclick}></Buttons>
   </div></center>
     
    </>
  )
}

export default App
