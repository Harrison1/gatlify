import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import github from '../img/github-icon.svg'
import 'prismjs/themes/prism-okaidia.css'
import '../css/global.css'
import '../css/screen.css'

const Navbar = () => (
  <nav className="navbar is-light">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Gatsby powered by Netlify CMS
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate" target="_blank">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />

    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
