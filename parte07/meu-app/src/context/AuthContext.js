import React, { useEffect } from 'react'
import { createContext  } from 'react';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //Quando usuário estiver true estar logado usando o useEffect
    useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');
      //Useinfo setUserLogged estiver true aparece o nosso carrinho e nome de usuário
      if(userInfo) {
        setUserLogged(true);
      }
      //ProtectedRoute se caso usuário estiver logado acesso à página home se não estiver logado entra no loading e não ver a página home
      setLoading(false)

    }, [])
    //ProtectedRoute se caso usuário estiver logado acesso à página home se não estiver logado entra no loading e não ver a página home
    const loginUser = async (inputValues) => {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
      })
      const data = await response.json();
      console.log(data);
      //localStorage Precisamos salvar nossas informações em um tipo de casch o próprio browser tem um, com o nome de localstorage e ele não inspira somente quando limpamos o cache do aplicativo podemos desligar o computador ligar novamente que usuário vai continuar logado localbrawser.
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate('/')
      setUserLogged(true);
    }

    const logoutUser = () => {
      setUserLogged(false);
      localStorage.clear();
      navigate('login')
    }
    //ProtectedRoute se caso usuário estiver logado acesso à página home se não estiver logado entra no loading e não ver a página home
    if(loading) {
      return <h1>Loading</h1>
    }

  return (
      <AuthContext.Provider value={{userLogged, loginUser, logoutUser}}>
        { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

