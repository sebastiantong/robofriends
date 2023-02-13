import React from 'react';

 const Scroll = (props) => {
   return(
     <div style={{overflowY: 'scroll', border: '1.5px solid cyan', height: '800px'}}> 
      {props.children}
     </div>
   )
 };

 export default Scroll;

// div style (just like html tag) then one curly brackets for js syntax and the other one for Object
