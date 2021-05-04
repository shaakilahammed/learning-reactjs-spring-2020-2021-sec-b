import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const CommentsMe = () => {
    return (
      <>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <h1>CommentsMe</h1>
        </div>
        <Footer />
      </>
    );
}

export default CommentsMe