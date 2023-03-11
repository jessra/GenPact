export default function Naciones() {
  return (
    <>
      <div className="w-100 h-[100vh]">
        <h2 className="font-sansita text-white font-semibold text-[3rem] pl-5">Naciones</h2>
        <div className="flex flex-col gap-5 p-5 text-white w-full">
          <p className="min-[560px]:p-5 min-[560px]:text-center">Genshin Impact se desarrolla en el mundo de Teyvat, que está dividido en ocho naciones: Mondstadt, 
            Liyue, Inazuma, Sumeru, Natlan, Fontaine, Snezhnaya.</p>
          <div className="nacion-1 bg-contain bg-no-repeat bg-center bg-[url('../../public/Mondstadt.png')] min-[560px]:mw-100 min-[560px]:w-[50%] min-[560px]:m-auto">
            <div className="mondstadt text-white opacity-0 h-full w-full bg-[#000000b8] p-5">
              <h2 className="text-center font-sansita font-semibold">Mondstadt</h2>
              <p>Una ciudad de la libertad que se encuentra al noreste de Teyvat. Entre montañas y llanuras abiertas, 
                la brisa despreocupada lleva el aroma de los dientes de león, un regalo del dios Anemo, Barbatos, 
                a través del Lago de Sidra hasta Mondstadt, que se encuentra en una isla en el medio del lago.</p>
              <h5 className="text-center font-sansita font-semibold text-[#268178]">Anemo</h5>
            </div>
          </div>
          <div className="nacion-2 bg-contain bg-no-repeat bg-center bg-[url('../../public/Liyue.png')] min-[560px]:mw-100 min-[560px]:w-[50%] min-[560px]:m-auto">
            <div className="liyue text-white opacity-0 h-full w-full bg-[#000000b8] p-5">
              <h2 className="text-center font-sansita font-semibold">Liyue</h2>
              <p>Una ciudad con un puerto próspero situado al este de Teyvat. Liyue yace imponente entre faldas montañosas, bosques de piedra, bastas planicies y 
                una costa llena de vida, que conforman una tierra llena de riquezas, con cambios de estación claramente definidos y llenos de color. ¿Cuántos 
                obsequios del Arconte Geo yacerán enterrados entre sus montañas?</p>
              <h5 className="text-center font-sansita font-semibold text-[#efd34d]">Geo</h5>
            </div>
          </div>
          <div className="nacion-3 bg-contain bg-no-repeat bg-center bg-[url('../../public/Inazuma.png')] min-[560px]:mw-100 min-[560px]:w-[50%] min-[560px]:m-auto">
            <div className="inazuma text-white opacity-0 h-full w-full bg-[#000000b8] p-5">
              <h2 className="text-center font-sansita font-semibold">Inazuma</h2>
              <p>Un archipiélago situado en el extremo oriente de Teyvat. Encara tormentas perpetuas, adéntrate en la isla de las flores de cerezo, en sus playas, 
                los imponentes acantilados y las solitarias montañas, y presencia la eternidad perseguida por Su Excelencia... ¿qué ven los mortales de la eternidad 
                perseguida por su dios?</p>
              <h5 className="text-center font-sansita font-semibold text-[#782da1]">Electro</h5>
            </div>
          </div>
          <div className="nacion-4 bg-contain bg-no-repeat bg-center bg-[url('../../public/Sumeru.png')] min-[560px]:mw-100 min-[560px]:w-[50%] min-[560px]:m-auto">
            <div className="sumeru text-white opacity-0 h-full w-full bg-[#000000b8] p-5">
              <h2 className="text-center font-sansita font-semibold">Sumeru</h2>
              <p>La nación de eruditos situada en el medio oeste de Teyvat. Una tierra exótica en la que coexisten exuberantes bosques tropicales y áridos desiertos, 
                donde crecen y se marchitan innumerables frutos de la sabiduría. Todo viajero que llegue a esta nación podrá adquirir valiosos conocimientos atravesando 
                el bosque y subiendo los escalones que conducen hacia el conocimiento o adentrándose en el desierto y descubriendo sus antiguas ruinas.</p>
              <h5 className="text-center font-sansita font-semibold text-[#4d9637]">Dendro</h5>
            </div>
          </div>
          <p className="italic text-center">Y faltan más por conocer...</p>
        </div>
      </div>
    </>
  )
}