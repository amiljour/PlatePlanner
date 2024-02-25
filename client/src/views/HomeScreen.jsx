// import React from 'react'
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Card from "../components/Card";
import Footer from "../components/Footer";
import wallpaper from "../assets/wallpaper3.png";
import mealExample from "../assets/bliniPancakes.jpg";
import weeklyPlan from "../assets/weeklyPlan.png";
import shoppingListPlaceHolder from "../assets/ShoppingListPlaceHolder.png"
const HomeScreen = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${wallpaper})` }}>
        
        {/* Header */}
        <Header title = 'Plate Planner' btn1 = "Get Started Now!" btn2 = "Login" />

        {/* Cards */}
        <div className="mt-10 flex justify-around">

          {/* Card 1 */}
          <Card content="Have a shopping list to track everything you will need for this weeks meals!" />

          {/* Card 2 */}
          <Card content="Plan your meals for the week!" />

          {/* Card 3 */}
          <Card content="Find new recipes to try or add your own and have a plan for this weeks meals!" />

        </div>

        {/* Large Panels */}
        <div className="mt-10 flex justify-around">
          {/* Large Panel 1 */}
          <LargeCard
            heading="Meal Planner"
            subText1="A calender to track all of your meals for this week!"
            image={weeklyPlan} 
            subText3="Have a place to plan out your whole week of meals! And easy way to see all of your weekly meals in 1 convent place!"
          />

          {/* Large Panel 2 */}
          <LargeCard
            heading="Find a new meal!"
            subText1="Blini Pancakes"
            image={mealExample}
            subText2="Severing: 4 / Calories Per Serving : 600"
            subText3="Instructions:  In a large bowl, whisk together 1/2 cup buckwheat flour, 2/3 cup all-purpose flour, 1/2 teaspoon salt, and 1 teaspoon yeast.
            Make a well in the center and pour in 1 cup warm milk, whisking until the batter is smooth.
            Cover the bowl and let the batter rise until doubled, about 1 hour.
            Enrich and Rest the Batter Stir 2 tablespoons melted butter and 1 egg yolk into the batter.
            In a separate bowl, whisk 1 egg white until stiff, but not dry.
            Fold the whisked egg white into the batter.
            Cover the bowl and let the batter stand 20 minutes.
            Pan-Fry the Blini Heat butter in a large nonstick skillet over medium heat.
            Drop quarter-sized dollops of batter into the pan, being careful not to overcrowd the pan.
            Cook for about 1 minute or until bubbles form.
            Turn and cook for about 30 additional seconds.
            Remove the finished blini onto a plate and cover them with a clean kitchen towel to keep warm.
            Add more butter to the pan and repeat the frying process with the remaining batter."
            btn="Find a new Recipe"
          />

          {/* Large Panel 3 */}
          <LargeCard
            heading="Shopping List"
            subText1="Have your shopping list auto populate based on this weeks meals!"
            image={shoppingListPlaceHolder}
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
