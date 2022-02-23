import { useState } from "react"

interface User {

   uid: string;
   name: string;

}

const tempUser: User = {
   uid: 'xyz789',
   name: 'Juan'
}


export const Usuario = () => {

   const [user, setUser] = useState<User>();
   
   const login = ()=>{

      setUser({
         uid: 'ABC123',
         name: 'Ivan'
      });
   }



  return (
    <div className="mt-5">
       <h3>Usuario: useState</h3>

       <button type="button" className="btn btn-outline-primary" onClick={ login }>
          Login
       </button>

       {
          (!user)
            ? <pre>No hay usuario</pre>
            : <pre>{ JSON.stringify(user) } </pre>
       }

     

    </div>
  )
}
