// import { Link } from "gatsby"
import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="font-display py-6 px-12 text-base text-right absolute top-0 right-0 left-0">
    <Link to="/" className="p-2">
      Home
    </Link>
    <Link to="/about" className="p-2">
      About
    </Link>
    <Link to="/notes" className="p-2">
      Notes
    </Link>
  </header>
)

export default Header
