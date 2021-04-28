import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllEvent() {
    const [data, setData] = useState([]);
        useEffect(() => {
        getData();
        }, []);
  async function getData() {
    const get = async () => {
      const response = await axios
        .get("events")
        .catch((error) => console.log(error.resp));
        setData(response.data.event);
    };
    get();
  }
  async function deleteEvent(id) {
    await axios
        .delete("event/"+id)
        .catch((error) => console.log(error.resp));
    getData();
  }
 
    return (
        <div className="List-Content">
          <h1 className="pageTitle">All Events</h1>
            <table border="1" className="viewTable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Importance</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.importance}</td>
                        <td>
                        <Link to={"edit/" + item.id} key={item.id}>
                            <button className="editButton">Edit</button> 
                        </Link>
                        <button className="deleteButton" onClick={() => deleteEvent(item.id)}>Delete</button>   
                        </td>
                      </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    )
}
