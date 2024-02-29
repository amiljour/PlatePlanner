import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import wallpaper from "../assets/wallpaper9.png"

const Show1Recipe = () => {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed text-center"
      style={{ backgroundImage: `url(${wallpaper})` }}>
      <Header title = "Buttermilk Fried Chicken Recipe" />
      <div className="flex flex-col items-center text-center mx-16" >
        <h1 className="text-5xl font-extrabold text-secondary glass m-5">Buttermilk Fried Chicken</h1>
        <img
          src="https://edamam-product-images.s3.amazonaws.com/web-img/3bc/3bce6ee5ba1ed785ac57b55eea406dfc?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLWVhc3QtMSJGMEQCIDtEJ1ry7BMEr%2FJmx7clLrzlWPoCDW8VnI50r%2FFS3qnMAiAN39H%2F3a5Kw%2FJQhduDJPMdT0uE4WSHbR525BzIAIy7diq5BQgfEAAaDDE4NzAxNzE1MDk4NiIMSZjtltAc9Gc69iuYKpYFTYqp6%2FDB8CxALAkrJ7cpgXXnb6j1cjZBHNkh9ZZ%2FCt0e9LClQPntuLF0RTcRp%2Bo4ss6Aysg7f6errZmhsRlhotrh601jUSLpn0GHWcGSVAU1jbcsKmmhotNxcYF5dccPISgZhuhh2jE2l1W9RWKpCLtMsVAwgKfDCWGQRtX273q03wd3WGKZE7mrKoNSS8CSN2MSznMg9%2FVltdZBXYE%2BeSLM2drPqLy4nLQ41YbTdYc4tI4Q%2BuZ0Gg%2BUvd87Il0jwPI7%2Fs9cO0An4ssjP%2BRWNSb%2BkNYtmnNq9leUiJwej9JDnBaH1nnspYRNtTBjOvcWTiVzbUa9b09A6QqmEz9DKMjkho0B3gIxLHr0JnthO%2Bd7BQeiA4XkXdka9pBbAr%2Fz7%2Bq8tA4p0%2Fispfo8DUBFqNIDczJgVHcHBq%2FMEHzpjgUxjvxqzS%2BJBUXPZ1Mpa9ukPCobOVH%2B7IApWO5rOoS3Nf0lk21sOEQ9KdmovVYKAD7lTG%2BXBERKwWW7GTHZPO2C6%2Fi%2BCoAN%2Bl5L1swkhlsXgfOqyCFSGpiHBCcNBcwYPHneN%2BrOUUZWR6uaCh1ECByj7WmHAv1ZYHnjfmYhHZ22B6PrfFBEgyucE7YDUQQr7LMaDSwtGlSfQswnfiibqDo8YyCYbtBVOi5c0oLL6O8nwoWTCELhhJxZSVHYg%2FVvl2ZraPSoYB4WqXzqcfKQ%2FBr3Ea5MEtaS%2FIoK1rJn8%2FmjmLN4qilSnMuB8G1DXgxIt%2F3pl6yZ1il5%2FtipEbduS%2BLWY7ByU9hY8P2j%2BYJqo9eyjwpeGYXQRN%2FLQj58YuKv7zi6aaJDrGRYNPp7cKPCQ0FZha7RjuodEMbseINZbg1MBiFSJSZhYumbI%2FngKaKdw54xPAzZSaow8PiDrwY6sgH%2Bzs0%2Fx9o7ovZXFVdJjRPXyR%2BNpOzA794pl8mZk62lupLl9cR7Wn5Jwk6ValNmQi5koOBK2hHq1UuMSdyaxzJWKZ353rFnXzkOPY%2BLBuVeHAEY3ST5qu1CfMweeS%2BU%2Fda%2FilHSq2mPApI7vUYG3YFKwGQSJuIk0tHT2N%2FBtH8cxwsQPJuRlJAgyfPXP9GkLL4SDiTCQlWD6JBrj4GiYY5y%2B%2B7afR84yclKeZuoiVPu44iU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240229T225237Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFABXIEPRF%2F20240229%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=47dc99b2fe5996ba9a4381a134e4d6a7bbe1dd240829506642e66589fe4527fa"
          alt="ButerMilk Fried Chicken"
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
