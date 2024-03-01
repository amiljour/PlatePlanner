import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const AddRecipe = () => {
  return (
    <div style={{background: 'purple', height: '100vh'}}>
      <Header title = "Add your own recipe!" btn2 = "Logout" btn2Link = "/" />
      <NavBar active = "add a recipe"/>
      {/* Whole Form */}
      <div className="" style={{width: '90vw'}}>
        <form action="" className="form-control">
        {/* Left Side of Form */}
        <div style={{width: '40%'}} className="m-10">

          <label htmlFor="recipeName" className="block text-lg font-medium leading-6 text-base-100 mt-5">
            Recipe Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="recipeName"
              id="recipeName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              placeholder="recipe name"
            />
          </div>

          <label htmlFor="recipeName" className="block text-lg font-medium leading-6 text-base-100 mt-5">
            Number of Servings
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="servings"
              id="servings"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              placeholder="number of servings"
            />
          </div>

          <label htmlFor="recipeName" className="block text-lg font-medium leading-6 text-base-100 mt-5">
            Calories Per Serving
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="calories"
              id="calories"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              placeholder="calories per serving"
            />
          </div>

          <label htmlFor="recipeName" className="block text-lg font-medium leading-6 text-base-100 mt-5">
            Image for Recipe
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="recipeImage"
              id="recipeImage"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              placeholder="recipe image"
            />
          </div>

          <label htmlFor="recipeName" className="block text-lg font-medium leading-6 text-base-100 mt-5">
            Recipe Instructions
          </label>
          <div className="mt-2">
        <textarea
          rows={4}
          name="recipeInstructions"
          id="recipeInstructions"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
          defaultValue={''}
        />
      </div>

        </div>
        <button className="btn btn-error">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddRecipe