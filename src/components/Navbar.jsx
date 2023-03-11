export default function Navbar() {
  return (
    <>
    <div className="w-full z-50 absolute">
      <div className="flex justify-end p-0.5 pt-4 md:pt-6">
          <input className="navbar-toggler" type='checkbox' id='navbar'/>
          <label htmlFor="navbar">
            <img className="w-12 animate-bounce md:w-16" src="../../public/GenPact.png" alt="" />
          </label>
          <div className="navbar mt-12 mr-5 rounded-l-lg text-white font-semibold bg-[var(--color-primary)] min-[560px]:mt-16 min-[560px]:mr-11">
            <ul className="p-2">
              <li className="hover:text-[var(--color-secondary)] p-3">
                <button onClick={() => window.location.href = '/'}>Inicio</button>
              </li>
              <li className="hover:text-[var(--color-secondary)] p-3">
                <button onClick={() => window.location.href = '/TheGame'}>
                  The Game
                </button>
              </li>
              <li className="hover:text-[var(--color-secondary)] p-3">
                <button onClick={() => window.location.href = '/Heroes'}>Heroes</button>
              </li>
              <li className="hover:text-[var(--color-secondary)] p-3">
                <button onClick={() => window.location.href = '/Naciones'}>Naciones</button>
              </li>
            </ul>
          </div>
      </div>
    </div>
    </>
  )
}