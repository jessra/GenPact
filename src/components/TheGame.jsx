import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TheGame() {
  return (
    <>
      <div className="bg-[radial-gradient(#384571,#181623)] w-100 h-[100vh]">
        <h2 className="font-sansita text-white font-semibold text-[3rem] pl-5">The Game</h2>
        <div className="p-5 text-white w-full">
          <img src="../../public/theGame.jpeg" alt="" />
            <div className="relative">
              <h5 className="my-5 absolute font-sansita text-center font-semibold opacity-25 text-[var(--color-tertiary)] text-[5rem]">
                Explora
              </h5>
              <div className="flex absolute py-5 pr-5">
                <p>Bienvenidos a Teyvat, un continente de mil maravillas donde incontables criaturas 
                  prosperan en armonía.
                  Regido por siete Arcontes, este mundo es un lugar donde los siete elementos convergen...</p>
              </div>
            </div>
            {/* <div>
              <div>
                <h5 className="my-5 absolute font-sansita text-center font-semibold opacity-25 text-[var(--color-tertiary)] text-[5rem]">
                  Explora
                </h5>
              </div>
              <div className="flex absolute py-5 pr-5">
                <p>Bienvenidos a Teyvat, un continente de mil maravillas donde incontables criaturas 
                  prosperan en armonía.
                  Regido por siete Arcontes, este mundo es un lugar donde los siete elementos convergen...</p>
              </div>
            </div> */}
          <img src="../../public/TG-1.jpg" alt="" />
          {/* <img src="../../public/TG-2.jpg" alt="" /> */}
        </div>
      </div>
    </>
  )
}