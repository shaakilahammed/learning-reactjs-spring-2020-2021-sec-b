import React, { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from './Home/Nav'
import Footer from './Footer'


export default function Home() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [comments, setComments] = useState([]);
      useEffect(() => {
      getData();
      }, []);
async function getData() {
  const get = async () => {
    const response = await axios
      .get("posts")
      .catch((error) => console.log(error.resp));
      setData(response.data.posts);
      setUser(response.data.author);
      setFavourite(response.data.fav);
      setComments(response.data.comments);
      
  };
  get();

}

  return (

      
      <div classname="content-wrapper">
      <Nav />
      <section className="blog-area section">
      <div className="container">

        <div className="row">
        {data.map((item, index) => (
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="single-post post-style-1">
  
                  
                  <div className="blog-image"><img src={process.env.PUBLIC_URL+"/dist/img/post/"+item.postImage} alt="Blog Image"/></div>
  
                  <a className="avatar" href="#"><img src={process.env.PUBLIC_URL+"/dist/img/profile/"+user[index]} alt="Profile Image"/></a>
  
                  <div className="blog-info">
                    <h4 className="title">
                      {/* <a href="#"><b>Music is Life</b></a> */}
                      <Link to={"/single-blog/" + item.id} key={item.id}>
                      {item.title}
                      </Link>

                      
                    </h4>
  
                    <ul className="post-footer">
                      <li>
                          <a href="#"><i className="fas fa-heart"></i>{favourite[index]}</a>
                      </li>
                      <li><a href="#"><i className="far fa-comment"></i>{comments[index]}</a></li>
                      <li><a href="#"><i class="far fa-eye"></i>{item.view_count}</a></li>
                    </ul>
  
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          
        </div>

      </div>
    </section>
    <Footer />
    </div>
  )
}
