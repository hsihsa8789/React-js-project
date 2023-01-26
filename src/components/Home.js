import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg navbar-light bgnav text-lg-start fixed-top">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img className="logoimg img-fluid img-thumbnail" src=""
                    alt="" />
                  <br />
                </NavLink>
                <button className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navtext" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">Learn</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="/blog">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">DocMakers</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">UI Txt</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to="">Lain Nya</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
