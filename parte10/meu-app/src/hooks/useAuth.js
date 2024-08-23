import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUserApi } from '../services/authService';

const useAuth = () => {
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
        const response = await loginUserApi(inputValues);
        const data = await response.data;
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/')
        setUserLogged(true);
        //localStorage Precisamos salvar nossas informações em um tipo de casch o próprio browser tem um, com o nome de localstorage e ele não inspira somente quando limpamos o cache do aplicativo podemos desligar o computador ligar novamente que usuário vai continuar logado localbrawser.
      }
  
      const logoutUser = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('login')
      }
  
      return { userLogged, loading, loginUser, logoutUser }
}

export default useAuth
