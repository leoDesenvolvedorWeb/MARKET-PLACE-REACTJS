import React, { useEffect } from 'react'
import { createContext  } from 'react';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    //importando informações do useAuth
    const {userLogged, loading, loginUser, logoutUser} = useAuth();

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

