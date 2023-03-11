import { useState } from "react";
import Person from "./Person"

export default function Heroes() {
  const [heroes, SetHeroes] = useState('2');
  const animacion = (id) => {
    if (id) {
      SetHeroes(id)
    }
    setTimeout(() => {
      document.getElementById('heroes').classList.add('visible')
    }, 10);
  }
  return (
    <>
      <div className="bg-[radial-gradient(#384571,#181623)] w-100 h-[100vh]">
        <h2 className="font-sansita text-white font-semibold text-[3rem] pl-5">Heroes</h2>
        <div className="m-1 flex justify-center">
          <button className="p-2 mx-4 bg-[var(--color-primary-variant)] rounded-full text-white" onClick={() => animacion('2')}>Traveler</button>
          <button className="p-2 mx-4 bg-[var(--color-primary-variant)] rounded-full text-white" onClick={() => animacion('1')}>Baizhu</button>
          <button className="p-2 mx-4 bg-[var(--color-primary-variant)] rounded-full text-white" onClick={() => animacion('0')}>Kaveh</button>
        </div>
        <Person id={heroes} animacion={animacion}></Person>
      </div>
    </>
  )
}