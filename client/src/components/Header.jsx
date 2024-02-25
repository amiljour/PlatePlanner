// import React from 'react'
import { Link } from 'react-router-dom'

const Header = (prop) => {
  const { title, btn1, btn1Link, btn2, btn2Link } = prop
  return (
    <div className="flex justify-around glass p-5">
        {btn1 && <Link to={btn1Link} className="btn btn-warning ">{btn1}</Link>}
        <h1 className="text-center text-5xl font-bold text-primary ">{title}</h1>
        {btn2 && <Link to={btn2Link} className="btn btn-secondary ">{btn2}</Link>}
      </div>
  );
};

export default Header;
