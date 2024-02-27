import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
import GoogleIcon from "../assets/googleIcon.png"
import wallpaper from "../assets/wallpaper9.png"

const Register = () => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${wallpaper})` }}>
      <Header title = "Login and Registration"/>
      <div className="flex flex-col justify-center items-center mt-20">
          <h2 className="m-5 text-3xl text-warning">Login or Registration With Google here!</h2>
          <Link to="/user/dashboard"><img src={GoogleIcon} alt="Google Icon" style={{height: "15vh"}} className="m-5"/></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Register