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
          <div className="flex glass p-5 mb-5 card" style={{height: '50vh'}}>
            <h2 className="text-center text-5xl">Shopping List</h2>
            <h3 className="text-center text-2xl mt-3">Week 3/5/24 - 3/9/4</h3>
            <ul className="">
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Steak</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Potatoes</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Carrots</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Olive Oil</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Asparagus</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Chicken</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Loaf of Bread</li>
              <li className="flex justify-center mt-5"><input type="checkbox" className="mx-2 checkbox checkbox-success" />Crunchy Peanut Butter</li>
            </ul>
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