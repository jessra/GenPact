import Modal from './Modal'
import { useState } from "react";

export default function Inicio() {
	const [modal, setModal] = useState(false);
  const cerrarModal = (cerrar) => {
    setModal(false);
  }
  return (
    <>
    <div className="w-full h-full">
      <div 
        className="bg-center bg-cover h-[50vh] bg-[url('../../public/fondo2.jpg')] 
        min-[560px]:bg-[url('../../public/fondo3.jpg')] min-[560px]:h-[100vh]
        min-[560px]:top-0 min-[560px]:bottom-0 min-[560px]:left-0 min-[560px]:rigth-0"
      >
      </div>
      <div className="bg-[radial-gradient(#384571,#181623)] rounded-t-lg h-full mt-[-0.8rem] min-[560px]:h-fit 
      min-[560px]:m-auto min-[560px]:p-2 min-[560px]:rounded-lg min-[560px]:absolute min-[560px]:w-[65vh] min-[560px]:z-1 
      min-[560px]:bottom-0 min-[560px]:left-0 min-[560px]:right-0">
        <div className="text-white px-3 pt-6">
          <p>Coming soon</p>
          <h2 className="text-[3rem] text-[var(--color-secondary)] font-semibold mt-[-1.5rem] font-sansita">Version 3.6</h2>
          <p className="text-center px-0.5">¡Pruebalo antes de su lanzamiento! Registrate para ser parte de quienes tienen acceso anticipado a la beta.</p>
          <div className="py-3 text-center">
            <button className="rounded-full w-2/5 bg-[var(--color-tertiary)] px-3 py-1.5" onClick={(e) => setModal(!modal)}>¡Lo quiero!</button>
          </div>
          <img src="../../public/elementos.png" alt=""/>
        </div> 
      </div>
    </div>
    <Modal open={modal} cerrarModal={cerrarModal}></Modal>
    </>
  )
}