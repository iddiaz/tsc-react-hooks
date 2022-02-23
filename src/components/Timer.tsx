import React, { useEffect, useRef, useState } from 'react'

type TimeArgs = {
   milisegundos: number,
   segundos?: number
}

export const Timer = ( {milisegundos}: TimeArgs ) => {

   const [segundos, setSegundos] = useState(0);
   const ref = useRef<NodeJS.Timer>(  );

   useEffect(() => {

      ref.current && clearInterval( ref.current );
      
      ref.current = setInterval( ()=> setSegundos( s => s+1 ) , milisegundos ); 
      return ()=>{
         console.log('???');
      }  
     
   }, [milisegundos])
   


  return (
    <div>
       Timer: <small>{segundos}</small>
    </div>
  )
}
