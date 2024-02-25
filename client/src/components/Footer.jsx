import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between fixedFooter'>
      <p>Copyright 2024 PlatePlanner</p>
      <div>
        <p>TEMP</p>
        <Link to="/">Landing Page</Link>
        <Link to="/login">Login Page</Link>
        <Link to="/register">Register Page</Link>
      </div>
      <div className="flex">
        <p className="mx-3">Privacy Policy</p>
        <p className="mx-3">Terms & Conditions</p>
        <p className="mx-3">Cookie Policy</p>
        <p className="mx-3">Contact</p>
      </div>
    </div>
  )
}

export default Footer