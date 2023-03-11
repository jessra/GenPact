import { useEffect } from 'react';
export default function Person({id, animacion}) {
  const bg = ["heroes bg-cover relative z-0 h-[65vh] bg-[url('../../public/Kaveh.png')] min-[560px]:w-[50%] min-[560px]:h-[85%] min-[560px]:absolute min-[560px]:right-0 min-[560px]:z-10", 
  "heroes bg-cover relative z-0 h-[65vh] bg-[url('../../public/Baizhu.png')] min-[560px]:w-[50%] min-[560px]:h-[85%] min-[560px]:absolute min-[560px]:right-0 min-[560px]:z-10",
  "heroes bg-cover relative z-0 h-[50vh] bg-[url('../../public/traveler.png')] min-[560px]:w-[60%] min-[560px]:h-[85%] min-[560px]:absolute min-[560px]:right-0 min-[560px]:z-10"]
  const infoBg = ["mt-[-0.8rem] z-10 absolute bg-[radial-gradient(#50776b,#7f945a)] rounded-t-lg min-[560px]:w-[100%] min-[560px]:bottom-0 min-[560px]:z-0",
  "mt-[-0.8rem] z-10 absolute bg-[radial-gradient(#3f7493,#75ac8f)] rounded-t-lg min-[560px]:w-[100%] min-[560px]:bottom-0 min-[560px]:z-0",
  "mt-[-0.8rem] z-10 absolute bg-[radial-gradient(#b9823d,#442d2c)] rounded-t-lg min-[560px]:w-[100%] min-[560px]:bottom-0 min-[560px]:z-0"
  ]
  const element = ["../../public/dendro.png", "../../public/dendro.png", "../../public/elementos.png"]
  const name = ["Kaveh", "Baizhu", "Traveler"]
  const des1 = ["El Espejo del Empíreo, es el arquitecto detrás del Palacio Alcazarzaray",
  "El Trasgresor de lo Mortal, es el dueño de la Farmacia Bubu.",
  "Ambos son hermanos mellizos de otro mundo que viajan por todo el universo, hasta que una Diosa desconocida los atacó, atrapando a uno de ellos y sellando su manera de viajar para dejarlos varados en Teyvat."]
  const des2 = ["Se graduó de la Escuela de Tecnología de la Akademiya de Sumeru con honores.", 
  "Muchos rumores se arremolinan sobre él, aunque la mayoría son desconocidos, más allá del hecho de que sus medicinas tradicionales a base de hierbas son extremadamente amargas.",
  "Aunque los jugadores pueden elegir el nombre por el que quieren ser referidos, se refiere al Viajero por el nombre de Aether o Lumine."]
  useEffect((e) => {
    animacion()
  }, [])
  return (
    <>
    <div className="min-[560px]:flex">
      <div 
        className={bg[id]} id="heroes"
      >
      </div>
      <div className={infoBg[id]}>
        <div className="text-white px-3 py-3">
          <h2 className="text-[3rem] font-semibold mt-[-1.5rem] font-sansita min-[560px]:text-[5rem]">{name[id]}</h2>
          {id == '2' ? ('') : (
          <h5 className="text-yellow-500 mt-[-1rem] ml-0.5 font-sansita min-[560px]:text-[1.5rem]">Nuevo</h5>
          )} 
          <p className="pb-1 px-0.5 min-[560px]:w-96">{des1[id]}</p>
          <p className="pb-1 px-0.5 min-[560px]:w-72">{des2[id]}</p>
          <div className="justify-center flex min-[560px]:hidden">
            <img src={element[id]} className="text-center" alt=""/>
          </div>
        </div>  
      </div>
    </div>
    </>
  )
}