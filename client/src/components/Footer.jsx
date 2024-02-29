import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between fixedFooter'>
      <p>Copyright 2024 PlatePlanner</p>
      <div>
        <p>TEMP FOR DEVELOPMENT</p>
        <Link to="/" className="mx-3 text-base-100">Landing Page</Link>
        <Link to="/loginandregister" className="mx-3 text-base-100">Login & Registration Page</Link>
        <Link to="/user/dashboard" className="mx-3 text-base-100">User Dashboard</Link>
      </div>
      <div className="flex text-base-100">
        <p className="mx-3 text-base-100">Privacy Policy</p>
        <p className="mx-3 text-base-100">Terms & Conditions</p>
        <p className="mx-3 text-base-100">Cookie Policy</p>
        <p className="mx-3 text-base-100">Contact</p>
      </div>
    </div>
  )
}

export default Footer