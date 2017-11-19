import React from 'react'
import Link from 'gatsby-link'

const HomeNav = ( { isHome } ) => 
    <nav className="site-nav">
        <div className="site-nav-left">
            <ul className="nav" role="menu">
                <li role="menuitem">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="https://google.com">
                        Google
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/tags">
                        Tags
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

export default HomeNav