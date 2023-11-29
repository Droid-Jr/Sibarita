import { useState } from "react"


function OpcionsHome() {
  const [Cards, setCards] = useState(false)
  return (
    <section className="flex flex-col w-[100%] h-[70%] bg-[#252127]">
      <article className="flex justify-end w-full">
        <div className=" flex justify-center items-center gap-10 w-[51%] h-[200px]  mx-10 ">
          <article className=" grid place-items-center w-[170px] h-[80px] rounded-lg bg-[#F89C53] text-[17px] font-medium cursor-pointer">
          <i className="fa-solid fa-utensils text-[#362b33] text-[20px]"></i>
          <h3 className="text-[#362b33]">Gastronomia</h3>
          </article>
         
          <article className=" cursor-pointer hover:bg-[#F89C53] duration-300 ease-in-out  grid place-items-center w-[170px] h-[80px] rounded-lg bg-[#E1D4C4]  font-medium">
          <i className="fa-solid fa-champagne-glasses text-[#362b33] text-[20px]"></i>
          <h3 className="text-[#362b33]">Drink y Catas</h3>
          </article>
          <article className="cursor-pointer hover:bg-[#F89C53] duration-300 ease-in-out  grid place-items-center w-[170px] h-[80px] rounded-lg bg-[#E1D4C4] text-[17px] font-medium">
          <i className="fa-solid fa-house-laptop text-[#362b33] text-[20px]"></i>
          <h3 className="text-[#362b33]">Bienstar</h3>
          </article>
          <article className="cursor-pointer hover:bg-[#F89C53] duration-300 ease-in-out grid place-items-center w-[170px] h-[80px] rounded-lg bg-[#E1D4C4] text-[17px] font-medium">
          <i className="fa-solid fa-plane-lock fa-rotate-90 text-[#362b33] text-[20px]"></i>
          <h3 className="text-[#362b33]">Vuelo Privados</h3>
          </article>
        </div>
      </article>
      <article className="flex justify-around items-center">
        <div className="grid w-[25%] gap-8">
          <h2 className="text-[#E1D4C4] font-bold text-[3rem]">Convirete tu restaurante en un destino</h2>
          <h4 className="text-[#E1D4C4] text-[1.5rem]">Regístrate y deja  que los clientes descubran tus experiencias culinarias</h4>
        </div>
        <div className=" rounded-3xl bg-[url('/opciones/image.png')] w-[50%] bg-cover h-[400px]">

        </div>
      </article>
    </section>
  )
}

export default OpcionsHome