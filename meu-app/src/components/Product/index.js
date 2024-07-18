import React from 'react'
import image from '../../assets/hambuger.png';

const Product = () => {
  return (
    <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 scale-105 p-4 rounded-lg relative'>
      <span className='bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hamburguer</span>
      <img className='w-64 mx-auto transition duration-300 hover:scale-105' src={image} alt='Imagem do produto' />

      <div className='flex flex-col items-center my-3 space-y-2'></div>
      <h1 className='text-gray-900 text-lg text-center'>Hamburguer Suculento</h1>
      <p className='text-gray-500 text-sm text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <h2 className='text-gray-900 text-2xl font-bold text-center'>R$25,00</h2>
      <button className='bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:scale-105'>Pedir Agora</button>

    </div>
  )
}

export default Product
