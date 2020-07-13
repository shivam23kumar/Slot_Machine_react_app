import React from 'react';

const SlotM = (props) =>{
    //let x = props.x;
    //let y = props.y;
    //let z = props.z;
    let{x,y,z} = props;//destructuring
    if((x===y)&&(y===z)){
      return(
        <>
          <div className="slot_inner"><br/>
            <h1>
              {x}{y}{z}{" "}
            </h1><br/>
            <h1> This is Matching. </h1>
            <hr />
  
          </div>
        </>
      );
    }else{
      return(
        <>
          <div className="slot_inner"><br/>
            <h1>
              {x}{y}{z}{" "}
            </h1><br/>
            <h1> This is not Matching. </h1>
            <hr />
  
          </div>
        </>
      );
    }
}

export default SlotM;
  