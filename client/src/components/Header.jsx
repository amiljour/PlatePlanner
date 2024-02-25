// import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'

const Header = (prop) => {
  const { title, btn1, btn2 } = prop
  return (
    <div className="flex justify-around glass p-5">
        {btn1 && <Link to="/register" className="btn btn-warning ">{btn1}</Link>}
        <h1 className="text-center text-5xl font-bold text-primary ">{title}</h1>
        {btn2 && <Link to="/login" className="btn btn-secondary ">{btn2}</Link>}
      </div>
  );
};

export default Header;
