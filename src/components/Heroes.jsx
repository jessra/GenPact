import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Heroes() {
  const [heroes, SetHeroes] = useState('0');
  console.log(heroes)
  return (
    <>
      <div className="bg-[radial-gradient(#384571,#181623)] w-100 h-[100vh]">
        <h2 className="font-sansita text-white font-semibold text-[3rem] pl-5">Heroes</h2>
        <div className="m-1 flex justify-center">
          <button className="p-2 bg-[var(--color-primary-variant)] rounded-full text-white" onClick={() => SetHeroes('0')}>Traveler</button>
          <button className="p-2 bg-[var(--color-primary-variant)] rounded-full text-white" onClick={() => SetHeroes('1')}>Baizhu</button>
          <button className="p-2 bg-[var(--color-primary-variant)] rounded-full text-white" onClick={() => SetHeroes('2')}>Kaveh</button>
        </div>
        { heroes == '2' ? (
        <div>
          <div 
            className="landing-bg bg-cover h-[65vh] bg-[url('../../public/Kaveh.png')]"
          >
          </div>
          <div className="mt-[-0.8rem] bg-[radial-gradient(#50776b,#7f945a)] rounded-t-lg md:z-30 md:absolute md:h-full md:flex md:justify-center md:aling-end">
            <div className="text-white px-3 py-3 md:w-2/5 md:text-center md:bg-black">
              <h2 className="text-[3rem] font-semibold mt-[-1.5rem] font-sansita">Kaveh</h2>
              <h5 className="text-yellow-500 mt-[-1rem] ml-0.5 font-sansita">Nuevo</h5>
              <p className="pb-1 px-0.5">El Espejo del Empíreo, es el arquitecto detrás del Palacio Alcazarzaray</p>
              <p className="pb-1 px-0.5">Se graduó de la Escuela de Tecnología de la Akademiya de Sumeru con honores.</p>
              <div className="justify-center flex">
                <img src="../../public/dendro.png" className="text-center" alt=""/>
              </div>
            </div>  
          </div>
        </div>
        ) : (heroes == '1' ? (        
        <div>
          <div 
            className="landing-bg bg-cover h-[65vh] bg-[url('../../public/Baizhu.png')]"
          >
          </div>
          <div className="mt-[-0.8rem] bg-[radial-gradient(#3f7493,#75ac8f)] rounded-t-lg md:z-30 md:absolute md:h-full md:flex md:justify-center md:aling-end">
            <div className="text-white px-3 py-3 md:w-2/5 md:text-center md:bg-black">
              <h2 className="text-[3rem] font-semibold mt-[-1.5rem] font-sansita">Baizhu</h2>
              <h5 className="text-yellow-500 mt-[-1rem] ml-0.5 font-sansita">Nuevo</h5>
              <p className="pb-1 px-0.5">El Trasgresor de lo Mortal, es el dueño de la Farmacia Bubu.</p>
              <p className="pb-1 px-0.5">Muchos rumores se arremolinan sobre él, aunque la mayoría son desconocidos, más allá del hecho de que sus medicinas tradicionales a base de hierbas son extremadamente amargas.</p>
              <div className="justify-center flex">
                <img src="../../public/dendro.png" className="text-center" alt=""/>
              </div>
            </div>  
          </div>
        </div>) : (
        <div>
          <div 
            className="landing-bg bg-cover h-[50vh] bg-[url('../../public/traveler.png')]"
          >
          </div>
          <div className="mt-[-0.8rem] bg-[radial-gradient(#b9823d,#442d2c)] rounded-t-lg md:z-30 md:absolute md:h-full md:flex md:justify-center md:aling-end">
            <div className="text-white px-3 py-3 md:w-2/5 md:text-center md:bg-black">
              <h2 className="text-[3rem] font-semibold mt-[-1.5rem] font-sansita">Traveler</h2>
              <p className="pb-1 px-0.5">Al comienzo del juego, ambos son hermanos mellizos de otro mundo que viajan por todo el universo, hasta que una Diosa desconocida los atacó, atrapando a uno de ellos y sellando su manera de viajar para dejarlos varados en Teyvat.</p>
              <p className="pb-1 px-0.5">Aunque los jugadores pueden elegir el nombre por el que quieren ser referidos, se refiere al Viajero por el nombre de Aether o Lumine.</p>
              <img src="../../public/elementos.png" alt=""/>
            </div>  
          </div>
        </div>))
        } 
      </div>
    </>
  )
}