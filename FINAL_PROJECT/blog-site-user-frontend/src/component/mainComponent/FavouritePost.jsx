import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const FavouritePost = () => {
    return (
      <>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <h1>FavouritePost</h1>
        </div>
        <Footer />
      </>
    );
}

export default FavouritePost