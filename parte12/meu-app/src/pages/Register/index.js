import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputValues, setInputValues] = useState({
    nome: '',
    email: '',
    senha: '',
    imagem: ''
  })
  const navigate = useNavigate();

  const handleChangeValues = (evento) => {
    setInputValues({
      ...inputValues,
      [evento.target.name]: evento.target.value
    })
    console.log(inputValues);

  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const response = await registerUser(inputValues);
    loginUserApi().then(response => {
      if (response && response.data) {
          // Acesse os dados aqui
      }
  }).catch(error => {
      console.error('Erro na chamada:', error);
      // Lide com o erro adequadamente aqui
  });
    if(response.data) {
      alert(`Usuário ${response.data.nome} cadastrado com sucesso!`)
      navigate('/login')
    }
  }

  return (
    <main className='h-screen w-full banner'>
      <div className='flex pt-20 flex-col items-center h-screen'>
        <img src={logo} alt="Logotipo do foodApp" className='w-52' />
        <h1 className='text-2x1 text-gray-600'>Cadastro de Usuário </h1>
        <form onSubmit={handleSubmit} className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'>
          <div className='flex flex-col space-y-6'>
            <input type="text" 
            name='nome' 
            placeholder='Digite seu Nome:'
            className="w-full px4 py-3 rounded-lg focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            onChange={handleChangeValues}
            />

            <input type="mail" 
            name='email' 
            placeholder='Digite seu E-mail:'
            className="w-full px4 py-3 rounded-lg focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            onChange={handleChangeValues}
            />

            <input type="password" 
            name='senha' 
            placeholder='Digite sua Senha:'
            className="w-full px4 py-3 rounded-lg focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            onChange={handleChangeValues}
            />

            <input type="text" 
            name='imagem' 
            placeholder='Insira a url da imagem'
            className="w-full px4 py-3 rounded-lg focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
            onChange={handleChangeValues}
            />
            <button type='submit' className='w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300'>Cadastrar</button>
          
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register;
