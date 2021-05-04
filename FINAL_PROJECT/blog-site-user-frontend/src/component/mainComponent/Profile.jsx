import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Profile = () => {
    return (
      <>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <h1>Profile</h1>
        </div>
        <Footer />
      </>
    );
}

export default Profile