import React, { useState } from 'react'
import UseeffectHook from './componets/useEffectHook';

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      
   <UseeffectHook />

    </div>
  )
}

export default App