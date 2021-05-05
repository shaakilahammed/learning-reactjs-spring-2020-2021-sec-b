import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../mainComponent/Header'
import Sidebar from '../mainComponent/Sidebar'
import Footer from '../mainComponent/Footer'

export default function Main() {

  const {id:eid}=useParams();
	const [message,setMessage]=useState('');
  const [data, setData] = useState([]);
	const [countComment, setCountComment] = useState([]);
	const [countFavourite, setCountFavourite] = useState([]);

		useEffect(() => {
		getData();
		}, []);

    async function getData() {
      const get = async () => {
        const response = await axios
          .get("user/dashboard/"+eid)
          .catch((error) => console.log(error.resp));
          setData(response.data.event);
          setCountComment(response.data.commentCount);
          setCountFavourite(response.data.postCount);
      };
      get();
	};
	// get();


  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                    {countFavourite}
                    </h3>
                    <p>Total Favourite Blogs</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>{countComment}</h3>
                    <p>Total Comments</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}


