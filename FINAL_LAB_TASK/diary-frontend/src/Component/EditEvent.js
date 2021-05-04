import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

export default function EditEvent() {
    const {id:eid}=useParams();
    const [title,addTitle]=useState('');
    const [description,addDescription]=useState('');
    const [importance,addImportance]=useState('');

    useEffect(() => {
        getData();
        });
    async function getData(){
    axios.get('event/' + eid)
      .then(res => {
          console.log(res);
          addTitle(res.data.event.title);
          addDescription(res.data.event.description);
          addImportance(res.data.event.importance);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    console.log(eid);

    async function formSubmit (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          console.log(data)
          axios
          .post("event/" + eid, data)
          .then((response) => {
          }).catch((err) => {
            console.log( err.data );
          });
        
     } 
    return (
        <div>
        <h1 className="pageTitle">Edit Event</h1>
            <form  className="addForm" onSubmit={formSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Title :</td>
                            <td><input className="inputField" type="text" name="title" value={title} onChange={(e)=>addTitle(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Description :</td>
                            <td><input className="inputFieldText" type="text" name="description" value={description} onChange={(e)=>addDescription(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Importance :</td>
                            <td>
                                <select className="inputField" name="importance" value={importance} onChange={(e)=>addImportance(e.target.value)}>
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Less">Less</option>
                                </select>
                            </td>
                        </tr>
                        
                        <tr>
                            <td></td>
                            <td><button className="inputField" type="submit">Update Event</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
