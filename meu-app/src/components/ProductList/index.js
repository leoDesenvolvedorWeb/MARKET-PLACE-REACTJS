import React from 'react'
import Product from '../Product'

const ProductList = () => {
  const [categoriaTab, setCategoriaTab] = useState('Hamburguer');

  return (
    <section className='my-12 max-w-screen-xl mx-auto px-3'>
      {/* Menu de categoria*/}

      <div className='flex items-center justify-center space-x-6'>
        <p className={categoriaTab === 'Hamburguer' ? "active-menu-tab bg-primary" : 'menu-tab'} onclick={() => setCategoriaTab('Hamburguer')}>Hamburguer</p>
        <p className={categoriaTab === 'Brasileira' ? "active-menu-tab bg-primary" : 'menu-tab'} onclick={() => setCategoriaTab('Brasileira')} >Brasileira</p>
        <p className={categoriaTab === 'Japonesa' ? "active-menu-tab bg-primary" : 'menu-tab'} onclick={() => setCategoriaTab('Japonesa')} >Japonesa</p>

      </div>
      {/* lista de produtos*/}
    <div className=''>
      <Product/>
    </div>

    </section>
  )
}

export default ProductList
