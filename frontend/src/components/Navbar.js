import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const location = useLocation();

  // Check if the current route is the Contact Form page
  const isContactFormPage = location.pathname === '/contact-form';

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {isContactFormPage ? (
          // Contact Form Page: Show only Home link (NavLink)
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
        ) : (
          // Home Page: Show full navbar with ScrollLinks
          <>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="resume"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="interests"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Interests
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact
              </ScrollLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
