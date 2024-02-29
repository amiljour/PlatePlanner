import { Link } from 'react-router-dom'

const NavBar = (prop) => {
  const { active } = prop
  return (
    <div className="glass flex justify-around mt-3">
      {/* Dashboard */}
      {active === 'dashboard' ? 
      <Link to="/user/dashboard" className="m-3 underline text-lg font-bold text-neutral">Dashboard</Link> : 
      <Link to="/user/dashboard" className="m-3 text-lg text-neutral">Dashboard</Link>}
      {/* Favorite Recipes */}
      {active === 'favorites' ? 
      <Link to="/user/favorites" className="m-3 underline font-bold text-lg text-neutral">Favorite Recipes</Link> : 
      <Link to="/user/favorites" className="m-3 text-lg text-neutral">Favorite Recipes</Link>}
      {/* Weekly Meal Plan */}
      {active === 'weekly meal plan' ? 
      <Link to="/user/weeklyMealPlan" className="m-3 underline font-bold text-lg text-neutral">Weekly Meal Plan</Link> : 
      <Link to="/user/weeklyMealPlan" className="m-3 text-lg text-neutral">Weekly Meal Plan</Link>}
      {/* Shopping List */}
      {active === 'shopping list' ? 
      <Link to="/user/shoppingList" className="m-3 underline font-bold text-lg text-neutral">Shopping List</Link> : 
      <Link to="/user/shoppingList" className="m-3 text-lg text-neutral">Shopping List</Link>}
      {/* Add a Recipe */}
      {active === 'add a recipe' ? 
      <Link to="/user/addARecipe" className="m-3 underline font-bold text-lg text-neutral">Add a Recipe</Link> : 
      <Link to="/user/addARecipe" className="m-3 text-lg text-neutral">Add a Recipe</Link>}
      {/* Find Recipes */}
      {active === 'find recipes' ? 
      <Link to="/user/findRecipes" className="m-3 underline font-bold text-lg text-neutral">Find Recipes</Link> : 
      <Link to="/user/findRecipes" className="m-3 text-lg text-neutral">Find Recipes</Link>}
    </div>
  )
}

export default NavBar