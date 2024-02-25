import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
import GoogleIcon from "../assets/googleIcon.png"

const Register = () => {
  return (
    <div>
      <Header title = "Login and Registration"/>
      
        <h2>Login and Registration With Google here!</h2>
        <Link to="/"><img src={GoogleIcon} alt="Google Icon" style={{height: "10%", width: "10%"}} /></Link>
      
      <Footer />
    </div>
  )
}

export default Register