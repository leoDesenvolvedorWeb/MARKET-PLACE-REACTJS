import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  return (
    <section className='my-12 max-w-screen-xl mx-auto px-6'>
      <div className='flex justify-end space-y-2'>
        <button onClick={() => navigate('/add-product')} className='w-44 py-2 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>
          Adiciona Produto
        </button>
      </div>

       <div className="flex flex-col my-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg shadow-md">
              <table className="min-w-full">
                <thead className="bg-primary">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Imagem
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Preco
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Código de Barras
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Ações</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      <img src='' alt='img'></img>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      produto 1
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      10
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      2341234
                    </td>
                    <td className='px-6 py-4 whitespace-nowrep flex flex-col h-24 items-center justify-center'>
                      <div className='flex items-center justify-center space-x-3'>
                        <FaEdit className='cursor-pointer text-2x1 text-green-600' />
                        <MdDelete className='cursor-pointer text-2xL text-red-600' />
                      </div>
                    </td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      <img src='' alt='img'></img>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      produto 1
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      10
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      2341234
                    </td>
                    <td className='px-6 py-4 whitespace-nowrep flex flex-col h-24 items-center justify-center'>
                      <div className='flex items-center justify-center space-x-3'>
                        <FaEdit className='cursor-pointer text-2x1 text-green-600' />
                        <MdDelete className='cursor-pointer text-2xL text-red-600' />
                      </div>
                    </td>
                  </tr>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      <img src='' alt='img'></img>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      produto 1
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      10
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      2341234
                    </td>
                    <td className='px-6 py-4 whitespace-nowrep flex flex-col h-24 items-center justify-center'>
                      <div className='flex items-center justify-center space-x-3'>
                        <FaEdit className='cursor-pointer text-2x1 text-green-600' />
                        <MdDelete className='cursor-pointer text-2xL text-red-600' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin
