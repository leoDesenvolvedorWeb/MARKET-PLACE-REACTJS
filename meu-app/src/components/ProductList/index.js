import React from 'react'
import Product from '../Product'

const ProductList = () => {
  // const [categoriaTab, setCategoriaTab] = useState('Hambuguer');

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
      {/* Menu de categoria*/}

      <div className='flex items-center justify-center space-x-6'>
        <p className='active-menu-tab bg-primary'>Hamburguer</p>
        <p className='menu-tab'>Brasileira</p>
        <p className='menu-tab'>Japonesa</p>

      </div>
      {/* lista de produtos*/}
    <div className=''>
      <Product/>
    </div>

    </section>
  )
}

export default ProductList
