import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TheGame() {
  return (
    <>
      <div className="w-100 h-[100vh]">
        <h2 className="font-sansita text-white font-semibold text-[3rem] pl-5">The Game</h2>
        <div className="flex flex-col gap-5 p-5 text-white w-full">
          <img className="rounded-lg" src="../../public/theGame.jpeg" alt="" />
          <div>
            <h5 className="my-5 absolute font-sansita text-center font-semibold opacity-25 text-[var(--color-tertiary)] text-[5rem]">
              Explora
            </h5>
            <p className="">Bienvenidos a Teyvat, un continente de mil maravillas donde incontables criaturas
              prosperan en armonía.
              Regido por siete Arcontes, este mundo es un lugar donde los siete elementos convergen...</p>
          </div>
          <img className="rounded-lg" src="../../public/TG-1.jpg" alt="" />
          <div>
            <h5 className="my-5 left-0 right-0 absolute font-sansita text-center font-semibold opacity-25 text-[var(--color-tertiary)] text-[5rem]">
              Juega
            </h5>
            <p> Genshin Impact es un juego de rol de mundo abierto. En él, descubrirás el fantástico mundo de teyvat. Podrás visitar las siete diferentes naciones y conocer otros viajeros.
              ¡Explora libremente las diferentes regiones de Teyvat y deja que tu curiosidad te lleve a los rincones más místicos!
            </p>
          </div>
          <img className="rounded-lg" src="../../public/TG-2.jpg" alt="" />
          <div>
            <h5 className="my-5 left-0 right-0 absolute font-sansita text-center font-semibold opacity-25 text-[var(--color-tertiary)] text-[4.5rem]">
              Elementos
            </h5>
            <p> En esta tierra los elementos convergen, el mundo está compuesto de siete elementos: Anemo, Electro Hydro, Pyro, Cryo, Dentro y Geo.
              Los personajes poseedores de visiones pueden controlar estos elementos en combate... La clave de la victoria está en utilizar diferentes elementos contra distintos enemigos y así tener le control de la pantalla.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}