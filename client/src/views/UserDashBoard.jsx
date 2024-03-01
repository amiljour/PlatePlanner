import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import wallpaper from "../assets/wallpaper8.png";
import { Link } from "react-router-dom";
import MyWeeklyCalendar from "../components/MyWeeklyCalendar";

const UserDashBoard = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  const items = [
    "Steak",
    "Potatoes",
    "Carrots",
    "Olive Oil",
    "Asparagus",
    "Chicken",
    "Loaf of Bread",
    "Crunchy Peanut Butter",
  ];

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${wallpaper})` }}>

        {/* Header */}
      <Header title="Welcome userFirstName to PlatePlanner!" btn2 = "Logout" btn2Link = "/" />

      {/* Navbar */}
      <NavBar active="dashboard" />

      {/* Body */}
      <div className="m-10 flex gap-5" style={{height: '85vh'}}>

        {/* Top Left Side */}
        <div className="" style={{ width: "35vw" }}>

          {/* Shopping List Box */}
          <div className="flex glass p-5 mb-5 card text-success" style={{ height: "53%", overflow: 'auto' }}>
            <Link to={'/'} className="text-center text-5xl font-extrabold underline">Shopping List</Link>
            <h3 className="text-center text-2xl mt-3 font-semibold">Week 3/5/24 - 3/9/4</h3>
            <ul className="">
              {items.map((item) => (
                <li key={item} className="flex justify-center mt-5">
                  <input
                    type="checkbox"
                    name={item}
                    className="mx-2 checkbox checkbox-success"
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor={item}
                    className={`cursor-pointer ${
                      checkedItems[item] ? "line-through" : ""
                    }`}>
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Random Recipe Box */}
          <div className="glass p-5 card justify-center text-primary" style={{ height: "30%", overflow: 'auto' }}>
          <Link to={'/showOneRecipe'} className="text-center text-3xl font-extrabold underline">Random Recipe for Today</Link>
            <h3 className="text-center text-xl my-2 font-semibold">Buttermilk Fried Chicken</h3>
            <p className="text-center mb-5">
              Recipe Calories per Serving: 1,261 || Servings: 8
            </p>
            <Link to={'/showOneRecipe'} className="btn btn-info">
              See Full Recipe
            </Link>
          </div>
        </div>

        {/* Calendar Box */}
        <div className="card glass p-5" style={{ width: "65%", height: "85%", overflow: 'auto'  }}>

          <MyWeeklyCalendar />

        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserDashBoard;
