import React from "react";

const Footer = () =>
    <footer className="site-footer outer">
        <div className="site-footer-content inner">
            <section className="copyright"><a href="/">Gatlify CMS Blog</a> &copy; { (new Date()).getFullYear() }</section>
            <nav className="site-footer-nav">
                <a href="/">Latest Posts</a>
                <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
            </nav>
        </div>
    </footer>

export default Footer;

