import React from 'react'
import axios from "axios";
import { BrowserRouter,Route } from 'react-router-dom'

import Dashboard from './component/mainComponent/Dashboard'
import Home from './component/mainComponent/Home'
import FavouritePost from './component/mainComponent/FavouritePost'
import CommentsMe from './component/mainComponent/CommentsMe'
import Profile from './component/mainComponent/Profile'
import SingleBlog from './component/mainComponent/SingleBlog'
import Login from './component/auth/Login'
import Register from './component/auth/Register'

axios.defaults.baseURL = 'http://localhost:8000/';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/auth/login"><Login /></Route>
        <Route exact path="/auth/registration"><Register /></Route>
        <Route exact path="/user/dashboard/:id"><Dashboard /></Route>
        <Route exact path="/user/favourite-posts"><FavouritePost /></Route>
        <Route exact path="/user/comments-by-me"><CommentsMe /></Route>
        <Route exact path="/user/profile"><Profile /></Route>
        

        <Route exact path="/single-blog/:id"><SingleBlog /></Route>

        
      </BrowserRouter>
    </div>
  )
}

export default App
