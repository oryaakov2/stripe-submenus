import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext)

  const onMouseOverHandler = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    openSubmenu(page, { center, bottom })
  }

  const submenuHandler = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={submenuHandler}>
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={onMouseOverHandler}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={onMouseOverHandler}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={onMouseOverHandler}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
