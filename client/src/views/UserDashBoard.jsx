import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import wallpaper from "../assets/wallpaper8.png"

const UserDashBoard = () => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${wallpaper})` }}>
      <Header title = "Welcome userFirstName to PlatePlanner!"/>
      <NavBar active = "dashboard"/>
      <div className="m-10 flex gap-5">
        <div className="" style={{width: '35vw'}}>
          <div className="glass p-5 mb-5 card" style={{height: '50vh'}}>
            <p>Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text </p>
          </div>
          <div className="glass p-5 card" style={{height: '25vh'}}>
            <p>Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text </p>
          </div>
        </div>
        <div className="card glass p-5" style={{width: '65vw'}}>
        <div className=""  style={{height: '70vh'}}>
          <p>Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text Garbage Text </p>
        </div>
        </div>
          
      </div>
      <Footer />
    </div>
  )
}

export default UserDashBoard