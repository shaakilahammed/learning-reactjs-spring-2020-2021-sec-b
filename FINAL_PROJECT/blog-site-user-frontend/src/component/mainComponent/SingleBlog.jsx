import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Nav from './Home/Nav'
import Footer from './Footer'
import Comments from './Comments'




export default function SingleBlog() {




	const {id:eid}=useParams();
	const [message,setMessage]=useState('');
	const [data, setData] = useState([]);
	const [user, setUser] = useState([]);
	const [userName, setUserName] = useState([]);
	const [favourite, setFavourite] = useState([]);
	const [comments, setComments] = useState([]);

	const [title, setTitle] = useState([]);
	const [image, setImage] = useState([]);
	const [details, setDetails] = useState([]);
		useEffect(() => {
		getData();
		}, []);
  async function getData() {
	const get = async () => {
	  const response = await axios
		.get("posts/"+eid)
		.then((res) => {
			setData(res.data.post);
			setTitle(res.data.post.title);
			setImage(res.data.post.postImage);
			setDetails(res.data.post.content);

			// setData(response.data.post);
			setUser(res.data.author);
			setUserName(res.data.authorName);
			setFavourite(res.data.fav);
			setComments(res.data.comments);
		  })
		  .catch((error) => {
			setMessage( error.data );
		  });
		// .catch((error) => console.log(error.resp));
		
		
	};
	get();
  
  }
  
  return (
	// <div classname="content-wrapper">
	//   <Nav />
	//   <div className="container">
	//     <div className="text-center mt-5">
	//       <h1 className="">Main Website</h1>
	//     </div>
	//   </div>
	// </div>
	
  <div className="content-wrapper">
	  <Nav />
	  <section className="post-area section">
	  <div className="container">

		  <div className="row">

			  <div className="col-lg-8 col-md-12 no-right-padding">
			  {/* {data.map((item) => ( */}
				  <div className="main-post">

					  <div className="blog-post-inner">

						  <div className="post-info">

							  <div className="left-area">
								  <a className="avatar" href="#"><img src={process.env.PUBLIC_URL+"/dist/img/profile/"+user} alt="Profile Image"/></a>
							  </div>

							  <div className="middle-area">
								  <a className="name" href="#"><b>{userName}</b></a>
								  
							  </div>

						  </div>

						  <h3 className="title"><b>{title}</b></h3>

						  <div className="post-image"><img src={process.env.PUBLIC_URL+"/dist/img/post/"+image} alt="Blog Image" /></div>

						  <p className="para">{details}</p>

						  
					  </div>

					  <div className="post-icons-area">
						  <ul className="post-icons">
							  <li>
								  <a href="#" className=""><i className="fas fa-heart"></i>{favourite}</a>
							  </li>
							  <li><a href="#"><i className="far fa-comment"></i>{comments}</a></li>
							  <li><a href="#"><i className="far fa-eye"></i>3</a></li>
						  </ul>

						  
					  </div>


				  </div>
				  {/* ))} */}
			  </div>

			  

			  

		  </div>

	  </div>
  </section>
	<Comments />
	  <Footer />
  </div>


	




	  
  );
  }