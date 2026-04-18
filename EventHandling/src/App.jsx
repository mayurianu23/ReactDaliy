import React from 'react'
import Useeffect from './componets/Useeffect'

const App = () => {

//   const handelclick = () =>{
//  alert("i am clicked");
//   }

//   function handelMouseover(){
//     alert("para ke uper mouse leke aa gaye");
//   }
//   function handelinput(){
// console.log('valued cahnged');

//   }
//   function handelsubmit(e){
//     e.preventDefault();
//     //custom behivour
//     alert('form submit kru kya');
//   }
  
  return (
     <div>
   

       <Useeffect />




      
    {/* <form action="" onSubmit={handelsubmit}>
      <input type="text" placeholder='enter' onChange={handelinput} />
      <button type='submit'>submit</button>
    </form> */}
  
    {/* //   <p onMouseOver={handelMouseover} style={{backgroundColor:"red"}}>
    //     i am para
    //   </p>
    //   <button onClick={handelclick}>
    //     click me 
    //     </button> */}

    </div>
  )
}

export default App