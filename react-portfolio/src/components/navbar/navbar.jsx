import React from 'react';
import './navbar.css';
import Collapse from 'bootstrap/js/dist/collapse'; // Import Bootstrap Collapse API

const Navbar = () => {
    const handleNavLinkClick = () => {
        const navbarCollapseEl = document.getElementById('navbarNav');
        if (navbarCollapseEl && navbarCollapseEl.classList.contains('show')) {
            const bsCollapse = Collapse.getInstance(navbarCollapseEl) || new Collapse(navbarCollapseEl, { toggle: false });
            bsCollapse.hide();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#aboutME" onClick={handleNavLinkClick}>
                    My Portfolio
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutME" onClick={handleNavLinkClick}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={handleNavLinkClick}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;