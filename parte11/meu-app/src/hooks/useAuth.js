import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUserApi, getUserById } from '../services/authService';
import api from '../services/api';

const useAuth = () => {
      const [userLogged, setUserLogged] = useState(false);
      const [loading, setLoading] = useState(true);
      const [userId, setUserId] = useState('');
      const [userFull, setUserFull] = useState({});
      const navigate = useNavigate();
  
      //Quando usuário estiver true estar logado usando o useEffect
      //Useinfo setUserLogged estiver true aparece o nosso carrinho e nome de usuário
      useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(userInfo)
        if(userInfo) {
          api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
          findUserById(userInfo.id);
          setUserLogged(true);
        }
        setLoading(false)
        //ProtectedRoute se caso usuário estiver logado acesso à página home se não estiver logado entra no loading e não ver a página home
  
      }, [])

      //ProtectedRoute se caso usuário estiver logado acesso à página home se não estiver logado entra no loading e não ver a página home
      const loginUser = async (inputValues) => {
        const response = await loginUserApi(inputValues);
        const data = await response.data;
        setUserId(response.data.id);
        localStorage.setItem('userInfo', JSON.stringify(data))
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        navigate('/')
        setUserLogged(true);
        //localStorage Precisamos salvar nossas informações em um tipo de casch o próprio browser tem um, com o nome de localstorage e ele não inspira somente quando limpamos o cache do aplicativo podemos desligar o computador ligar novamente que usuário vai continuar logado localbrawser.
      }
  
      const logoutUser = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('login')
      }

      const findUserById = async () => {
        const response = await getUserById(userId);
        setUserFull(response.data)
        console.log(userFull);
      }
  
      return { userLogged, userFull, loading, loginUser, logoutUser }
}

export default useAuth
