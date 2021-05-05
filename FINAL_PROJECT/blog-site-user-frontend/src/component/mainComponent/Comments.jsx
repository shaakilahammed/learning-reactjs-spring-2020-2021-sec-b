import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Comments() {
//     const {id:eid}=useParams();
//     const [message,setMessage]=useState('');
// 	const [data, setData] = useState([]);
// 		useEffect(() => {
// 		getData();
// 		}, []);
//   async function getData() {
// 	const get = async () => {
// 	  const response = await axios
// 		.get("posts/"+eid+"/comments")
// 		.then((res) => {
// 			setData(res.data.post);
// 		  })
// 		  .catch((error) => {
// 			setMessage( error.data );
// 		  });
// 		// .catch((error) => console.log(error.resp));
		
		
// 	};
// 	get();
  
//   }
const {id:eid}=useParams();
const [data, setData] = useState([]);
const [commentName, setCommentName] = useState([]);
const [commentImage, setCommentImage] = useState([]);
        useEffect(() => {
        getData();
        }, []);
  async function getData() {
    const get = async () => {
      const response = await axios
        .get("posts/"+eid+"/comments")  
        .catch((error) => console.log(error.resp));
        setData(response.data.allComments);
        setCommentName(response.data.CommentName);
        setCommentImage(response.data.CommentImage);
    };
    get();
  }
  async function deleteEvent(id) {
    await axios
        .delete("comment/"+id)
        .catch((error) => console.log(error.resp));
    getData();
  }

  return (

      
    <div className="content-wrapper" style={{margin:"0"}}>
        <section className="comment-section">
		<div className="">
			<h3><b>POST COMMENT</b></h3>
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="comment-form">
						
						<form method="post" action="#">
						
							<div className="row">
								<div className="col-sm-12">
									<textarea name="comment" rows="2" className="text-area-messge form-control"
										placeholder="Enter your comment" aria-required="true" aria-invalid="false"></textarea >
								</div>
								<div className="col-sm-12">
									<button className="submit-btn" type="submit" id="form-submit"><b>POST COMMENT</b></button>
								</div>

							</div>
						</form>
						
					</div>

					<h4><b>COMMENTS</b></h4>
                    {data.map((item, index) => (
						<div className="commnets-area ">

							<div className="comment">

								<div className="post-info">

									<div className="left-area">
										<a className="avatar" href="#"><img src={process.env.PUBLIC_URL+"/dist/img/profile/"+commentImage[index]} alt="Profile Image" /></a>
									</div>

									<div className="middle-area">
										<a className="name" href="#"><b>{commentName[index]}</b></a>
										
									</div>
									<div className="right-area">
									<button className="deleteButton" onClick={() => deleteEvent(item.id)}>Delete</button> 
										
									</div>

									
								
								</div>

								<p>{item.comment}</p>

							</div>

						</div>
                        
                        ))}

				</div>

			</div>

		</div>
	    </section>
      
    </div>
  )
}
