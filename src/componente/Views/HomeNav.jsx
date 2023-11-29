


function HomeNav() {
  return (
    <section className="w-full h-[80%] relative bg-cover bg-center bg-[url('/home/fondo3.webp')] flex flex-col justify-between" >
  <div className=" w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent to-[#252127]">
  </div>
  <nav className= "z-10 flex items-center  h-[200px] justify-between px-20">
    <img src="/home/logo.png" alt="logo" className='w-[300px] cursor-pointer' />
    <ul className="flex gap-9  items-center text-[#E1D4C4]">
      <li className='lis'>Inicio</li>
      <li className='lis'>¿Quienes somos?</li>
      <li className='lis'>Sibarita "Nombre"</li>
      <li className='lis'>FAQ</li>
      <button className=" hover:text-[#5a4b55] hover:font-semibold duration-300 ease-in-out bg-[#E1D4C4] text-[#826E7B] font-medium py-2 px-4 rounded-md flex items-center  gap-2">
        <span>
        Iniciar Sesión
        </span>
        <i className="fa-regular fa-user hover:font-semibold"></i>
      </button>
    </ul>
  </nav>
  <div className="grid w-[100%] justify-end px-10 z-10 mb-36 cursor-pointer">
    <button className="text-[#826E7B] font-semibold rounded-lg flex gap-3 px-5 py-2 bg-[#F0EFEB]">
      <span>Se Parte de Sibarita </span>
      <span className="rounded-full bg-[#F89C53] w-[30px] h-[30px] grid place-items-center">
      <i class="fa-solid fa-arrow-pointer text-[#5a4b55]"></i>
      </span>
    </button>
  </div>

</section>

  
  


  )
}

export default HomeNav