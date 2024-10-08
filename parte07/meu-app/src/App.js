import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';


// AuthProvider Variavel compartilhada com todos os componente dentro

function App() {
  return (
    <>
    <AuthProvider> Variavel compartilhada
      <Navbar/>
      <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
