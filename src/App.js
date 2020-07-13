import React from 'react';

import SlotM from "./SlotM";
const App = () => {
  return(
    <>
      <h1 className="heading_style">
         🎰 Welcome to{" "}
         <span style={{fontWeight:'bold'}}> SLOT MACHINE </span> 🎰 
      </h1>
      <SlotM x='🤣' y='🤣' z='🤣' />
      <hr />
      <SlotM x='🤣' y='😜' z='🤣' />
      <hr />
      <SlotM x='🤣' y='🤣' z='😢' />
      <hr />
      <SlotM x='😎' y='😎' z='😎'/>
      <hr />
    </>
  )

};


export default App;