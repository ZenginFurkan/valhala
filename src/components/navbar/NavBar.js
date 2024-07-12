import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Gear, PersonCircle } from 'react-bootstrap-icons';
import logo from '../assets/Group8.png';

export default function NavBar({ pageTitle }) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ height: '80px', backgroundColor: '#FFFFFF' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link fs-2 text-dark "   >
                {pageTitle}
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a className="nav-link  " href="#">
                <Bell size={30} style={{ border: '0px solid #000', borderRadius: '30%', padding: '1px' ,marginRight: '10px'}} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Gear size={30} style={{ border: '0px solid #000', borderRadius: '30%', padding: '1px',marginRight: '10px' }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src={logo}
                  alt="Profile"
                  style={{ width: '35px', borderRadius: '50%', marginLeft: '10px' ,marginRight: '10px'}}
                />
                <span className="ms-1">Furkan Z.</span>
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginRight: '10px' }}
              >
              </a>     
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
