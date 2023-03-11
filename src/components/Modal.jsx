import { useState } from "react";
import Alert from "./Alert";

export default function Traveler({open, cerrarModal}) {
  const [correo, setCorreo] = useState('')
  const [id, setId] = useState('')
  const [msg, setMsg] = useState(false)
  const form = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        correo: correo,
        codigo: id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((response) => 
    setMsg(true),
    setCorreo(''),
    setId(''),
    setTimeout(() => {
      setMsg(false)
      cerrarModal(false)
    }, 5000)    
    )
    .catch((error) => Alert(error, false))
  }

  if (open && !msg) {
    return (
      <>      
      <div className="bg-[#0000008f] absolute top-0 bottom-0 left-0 right-0 h-full w-full z-1">
        <div className="h-fit m-auto p-5 rounded-lg absolute bg-[var(--color-secondary)] w-[60vh] z-1 top-0 bottom-0 left-0 right-0">
          <h5 className="text-center text-[1.5rem] font-sansita font-semibold">¡Obtén la beta ahora!</h5>
          <img className="hidden min-[560px]:block min-[560px]:w-[40%] min-[560px]:fixed min-[560px]:right-0" src="../../public/modal-paimon.png" alt="" />
          <p className="text-center">Regístrate para tener la posibilidad de probar antes la nueva versión beta del juego.</p>
          <form>
            <input type="email" name="emailInput" value={correo} onChange={(e) => setCorreo(e.target.value)} className="text-sm leading-5 
            my-2 w-full py-2 px-3 border-2 border-[var(--color-primary-variant)] rounded-lg shadow-sm focus:outline-none focus:ring 
            focus:ring-[var(--color-primary)] focus:border-[var(--color-primary-variant)] " placeholder="Ingresa el correo electrónico" required></input>
            <input type="text" name="idInput" value={id} onChange={(e) => setId(e.target.value)} className="text-sm leading-5 
            my-2 w-full py-2 px-3 border-2 border-[var(--color-primary-variant)] rounded-lg shadow-sm focus:outline-none focus:ring 
            focus:ring-[var(--color-primary)] focus:border-[var(--color-primary-variant)] " placeholder="Ingresa tu id del juego" required></input>
            <button className="rounded-full m-4 w-2/5 border-2 border-[var(--color-primary-variant)] px-3 py-1.5" onClick={(e) => cerrarModal(false)}>Cerrar</button>
            <button className="rounded-full w-2/5 bg-[var(--color-primary-variant)] px-3 py-1.5" onClick={form} type="submit">Enviar</button>
          </form>
        </div>
      </div>
      </>
    )
  }
  if (msg) {
  return (
    <>      
    <div className="bg-[#0000008f] absolute top-0 bottom-0 left-0 right-0 h-full w-full z-1">
      <div className="h-fit m-auto p-5 rounded-lg absolute bg-[var(--color-secondary)] w-[60vh] z-1 top-0 bottom-0 left-0 right-0">
        <h5 className="text-center text-[1.5rem] font-sansita font-semibold">¡Te has registrado!</h5>
        <img className="hidden min-[560px]:block min-[560px]:w-[40%] min-[560px]:fixed min-[560px]:right-0" src="../../public/modal-paimon.png" alt="" />
        <p className="text-center">Si eres de los seleccionado, te enviaremos un correo para comunicarnos contigo.</p>
      </div>
    </div>
    </>
  )
  }
}