import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const AddRecipe = () => {
  return (
    <div>
      <Header title = "Add your own recipe!"/>
      <NavBar active = "dashboard"/>

      <Footer />
    </div>
  )
}

export default AddRecipe