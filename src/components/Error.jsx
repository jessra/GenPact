export default function Error() {
  return (
    <>
    <div className="bg-[#0000008f] absolute top-0 bottom-0 left-0 right-0 h-full w-full z-1">
      <div className="h-fit m-auto p-2 absolute w-[60vh] z-1 top-0 bottom-0 left-0 right-0 z-10">
        <p className="text-center text-white text-[3rem]">error 404</p>
      </div>
      <img className="w-[45%] mw-100 right-0 botttom-0 absolute pt-[4rem] z-0" src="../../public/error-paimon.png" alt="" />
    </div>
    </>
  )
}