import React, { useState } from 'react'
import button from './componets/button'
const App = () => {

 const[count, setCount]=useState(0);
 
 function handeleclick(){
   setCount(count+1)
 }

  return (
    <div>
      <button incrementCount={handeleclick} text="click me"/>
    </div>
  )
}

export default App