import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './pages/Register/index';
import Admin from './pages/Admin';
import AddProduct from './pages/AddProduct';

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
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }/>
          <Route path='/add-product' element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }/>
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
