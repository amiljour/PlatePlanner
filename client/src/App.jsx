import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from "./views/HomeScreen"
import LoginAndRegister from './views/LoginAndRegister'

function App() {

  return (
    <>
      <Routes>
        {/* Route  */}
        {/* Landing Page */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/loginandregister" element={<LoginAndRegister />} />
      </Routes>
    </>
  )
}

export default App
