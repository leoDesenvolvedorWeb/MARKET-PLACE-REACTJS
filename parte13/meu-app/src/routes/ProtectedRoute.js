import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ( {children} ) => {
    const { userLogged } = useContext(AuthContext);
    //ProtectedRoute se caso usuário estiver logado acesso à página home se não estiver logado entra no loading e não ver a página home
    console.log(userLogged)

    if(!userLogged){
        return <Navigate to='/login' />
    } else {
        return children
    }

}

export default ProtectedRoute
