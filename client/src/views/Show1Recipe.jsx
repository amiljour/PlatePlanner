import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import wallpaper from "../assets/wallpaper9.png"
import chicken from "../assets/buttermilkfriedchicken.png"

const Show1Recipe = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed text-center"
      style={{ backgroundImage: `url(${wallpaper})` }}>
      <Header title = "Buttermilk Fried Chicken Recipe" />
      <div className="flex flex-col items-center text-center mx-16" >
        <h1 className="text-5xl font-extrabold text-secondary glass m-5">Buttermilk Fried Chicken</h1>
        <img
          src={chicken}
          alt="ButterMilk Fried Chicken"
          style={{ maxHeight: "30vh", maxWidth: "80vw"}}
        />
        <h2 className="mt-5 text-3xl font-extrabold text-success glass">Ingredients:</h2>
        <p className="mt-2 text-xl font-extrabold text-default glass">
          2 cups low-fat buttermilk 
          coarse salt 
          3 teaspoons cayenne pepper 
          2 whole chickens (2 1/2 to 3 pounds each), each cut into 10 serving pieces (wings, thighs, drumsticks, and 4 breast pieces) 
          3 cups all-purpose flour 
          4 cups vegetable oil
        </p>
        <h2 className="mt-10 text-3xl font-extrabold text-success glass">Instructions:</h2>
        <p className="text-xl font-extrabold text-default glass m-1">Step 1: In each of two 1-gallon resealable plastic bags, combine 1 cup buttermilk, 1/2 tablespoon salt, 1/2 teaspoon cayenne, and half the chicken pieces. Shake to coat, refrigerate up to 2 days.</p>

        <p className="text-xl font-extrabold text-default glass m-1">Step 2: In a large shallow bowl, whisk flour with 2 tablespoons salt and remaining 2 teaspoons cayenne. Dredge chicken pieces one at a time in mixture, shaking off excess.</p>

        <p className="text-xl font-extrabold text-default glass m-1">Step 3: In a 12-inch cast-iron skillet (or other heavy-bottom skillet), heat oil to 350 degrees on a deep-fry thermometer (or until a pinch of flour sizzles when dropped in the oil).</p>

        <p className="text-xl font-extrabold text-default glass m-1">Step 4: Carefully add 1/2 of the chicken. Cook 10 minutes: turn chicken with tongs. Cook until golden brown, the juices run clear, and internal temperature is 165 degrees about 10 minutes more. Transfer to a rack to drain. Season with salt, if desired.</p>

        <p className="text-xl font-extrabold text-default glass m-1">Step 5: Return oil temperature to 350 degrees. Repeat with remaining chicken.</p>
      </div>
      <Link to={"/user/dashboard"} className="btn btn-primary mt-10"> Go Back to Dashboard</Link>
      <Footer />
    </div>
  );
};

export default Show1Recipe;
