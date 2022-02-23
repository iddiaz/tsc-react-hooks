// import { ChangeEvent, useState} from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
   email: string;
   nombre: string;
   edad: number;
}


export const Formulario = () => {

   // const [formulario, setFormulario] = useState({
   //    email: '',
   //    nombre: ''
   // });

   // const handleChange = ( { target }: ChangeEvent<HTMLInputElement> )=>{
   //    const {name, value} = target;
   //    console.log(name, value);

   //    setFormulario({
   //       ...formulario,
   //       [name]: value
   //    })

   // }

   //customHook
   const { formulario, handleChange } = useForm<FormData>({
      email: 'correo@ivan.com',
      nombre: 'Ivan',
      edad: 41
   });

   const { email, nombre, edad } = formulario;

   return (

      <form autoComplete="off">
         <div className="mb-3">
               <label className="form-label">Email:</label>
               <input 
                  type="email"
                  className="form-control"
                  name="email"
                  value = { email }
                  onChange={ handleChange } />

               <label className="form-label">Nombre:</label>
               <input 
                  type="text"
                  className="form-control"
                  name="nombre"
                  value = { nombre }
                  onChange={ handleChange } />

               <label className="form-label">Edad:</label>
               <input 
                  type="text"
                  className="form-control"
                  name="edad"
                  value = { edad }
                  onChange={ handleChange } />
         </div>


         <pre>{ JSON.stringify(formulario) }</pre>

      </form>
   )
}
