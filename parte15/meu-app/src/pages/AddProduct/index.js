import React, { useState } from 'react'

const AddProduct = () => {
    const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0,
    categorias: [{ _id: "" }],
  })


    return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl text-gray-600">Cadastro de Produtos</h1>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
        <div className="flex flex-col space-y-4">
          <label htmlFor="nome" className="text-gray-500">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            //onChange={handleChangeValues}
            className='className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"'
          />

          <label htmlFor="descricao" className="text-gray-500">
            Descrição
          </label>
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="5"
            //onChange={handleChangeValues}
            className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
            required
          ></textarea>

          <label htmlFor="codigoBarra" className="text-gray-500">
            Código de barras
          </label>
          <input
            type="text"
            id="codigoBarra"
            name="codigoBarra"
            //onChange={handleChangeValues}
            required
            className='className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"'
          />
        </div>

        <div className="flex flex-col space-y-4">
          <label htmlFor="preco" className="text-gray-500">
            Preco
          </label>
          <input
            type="text"
            id="preco"
            name="precoUnitario"
            //onChange={handleChangeValues}
            required
            className='className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"'
          />
          <label htmlFor="imagem" className="text-gray-500">
            Imagem
          </label>
          <input
            type="text"
            id="imagem"
            //onChange={handleChangeValues}
            name="imagem"
            required
            className='className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"'
          />

          <label htmlFor="title" className="text-gray-500 poppins">
            Categoria:
          </label>
          <div className="mt-8">
            <button className="w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">Adicionar</button>
          </div>
        </div>
      </form>
      </section>
    )
}

export default AddProduct