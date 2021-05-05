import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="" className="brand-link">
            <img
              src={process.env.PUBLIC_URL+"/dist/img/AdminLTELogo.png"}
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">User</span>
          </Link>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={process.env.PUBLIC_URL+"/dist/img/user2-160x160.jpg"}
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <Link to="#" className="d-block">
                  Shakil Ahammed
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to={"/user/dashboard/"+4} className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p style={{color: "white"}}>
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/favourite-posts" className="nav-link">
                  <i class="far fa-circle nav-icon text-warning"></i>
                    <p style={{color: "white"}}>
                      Favourite Posts
                      
                    </p>
                  </Link>

                  
                </li>
                <li className="nav-item">
                      <Link
                        to="/user/comments-by-me"
                        className="nav-link"
                      >
                        <i className="far fa-circle nav-icon text-warning"></i>
                        <p style={{color: "white"}}>Comments by me</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/user/profile"
                        className="nav-link"
                      >
                        <i className="far fa-circle nav-icon text-warning"></i>
                        <p style={{color: "white"}}>Profile</p>
                      </Link>
                    </li>


              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
}

export default Sidebar
