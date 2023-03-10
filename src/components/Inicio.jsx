import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Inicio() {
  return (
    <>
    <div className="w-100 h-[100vh]">
      <div 
        className="landing-bg bg-center bg-cover h-[50vh] bg-[url('../../public/fondo2.jpg')] 
        md:bg-[linear-gradient(to_bottom,transparent,#000000d9),url('../../public/fondo3.jpg')] md:h-[100vh] md:absolute"
      >
      </div>
      <div className="mt-[-0.8rem] bg-[radial-gradient(#384571,#181623)] rounded-t-lg md:z-30 md:absolute md:h-full md:flex md:justify-center md:aling-end">
        <div className="text-white px-3 py-3 md:w-2/5 md:text-center md:bg-black">
          <p>Coming soon</p>
          <h2 className="text-[3rem] text-[var(--color-secondary)] font-semibold mt-[-1.5rem] font-sansita">Version 3.6</h2>
          <p className="text-center px-0.5">¡Pruebalo antes de su lanzamiento! Registrate para ser parte de quienes tienen acceso anticipado a la beta.</p>
          <div className="pt-3 text-center">
            <button className="rounded-full w-2/5 bg-[var(--color-tertiary)] px-3 py-1.5" type="">Beta</button>
            <button className="rounded-full w-2/5 border-2 border-[var(--color-primary-variant)] px-3 py-1.5" type="">Jugar</button>
          </div>
        <img src="../../public/elementos.png" alt=""/>
        </div>  
      </div>
    </div>
    </>
  )
}