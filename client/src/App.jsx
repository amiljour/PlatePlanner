import './App.css'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import HomeScreen from "./views/HomeScreen"
import Login from './views/Login'
import Register from './views/Register'

function App() {

  return (
    <>
      <Routes>
        {/* Route  */}
        {/* Landing Page */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
