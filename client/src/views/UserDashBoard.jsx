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
      <Header title="Welcome userFirstName to PlatePlanner!" />

      {/* Navbar */}
      <NavBar active="dashboard" />

      {/* Body */}
      <div className="m-10 flex gap-5" style={{height: '85vh'}}>

        {/* Top Left Side */}
        <div className="" style={{ width: "35vw" }}>

          {/* Top Box on Left Side */}
          <div className="flex glass p-5 mb-5 card text-success" style={{ height: "50%", overflow: 'auto' }}>
            <Link to={'/'} className="text-center text-5xl font-extrabold">Shopping List</Link>
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

          {/* Bottom Box on Left Side */}
          <div className="glass p-5 card  text-primary" style={{ height: "33%", overflow: 'auto' }}>
          <Link to={'/'} className="text-center text-5xl font-extrabold">Random Recipe for Today</Link>
            <h3 className="text-center text-2xl my-2 font-semibold">Recipe Name</h3>
            <p className="text-center">
              Recipe Calories and servings
            </p>
            <button className="btn btn-info">
              Button to see the fill recipe
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="card glass p-5" style={{ width: "65%", height: "85%", overflow: 'auto'  }}>

          {/* Right Side Box */}
          <MyWeeklyCalendar />

        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserDashBoard;
