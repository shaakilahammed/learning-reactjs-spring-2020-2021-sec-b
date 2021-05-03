import React,{useState} from 'react';
import axios from 'axios';
import '../style.css';


export default function AddEvent() {
    const [title,addTitle]=useState('');
    const [description,addDescription]=useState('');
    const [importance,addImportance]=useState('');
    async function submitData (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          console.log(data)
          axios
          .post("event/store", data)
          .then((response) => {
          }).catch((err) => {
            console.log( err.data );
          });
        
     }

    return (
        <div>
            <h1 className="pageTitle">Add New Event</h1>
            <form className="addForm" onSubmit={submitData}>
                <table>
                    
                    <tbody>
                        <tr>
                            <td>Title: </td>
                            <td><input className="inputField" type="text" name="title" onChange={(e)=>addTitle(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Description: </td>
                            <td><textarea className="inputFieldText" name="description" rows="3" cols="20" onChange={(e)=>addDescription(e.target.value)}></textarea></td>
                        </tr>
                        <tr>
                            <td>Importance: </td>
                            <td>
                                <select className="inputField" name="importance" onChange={(e)=>addImportance(e.target.value)}>
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Less">Less</option>
                                </select>
                            </td>
                        </tr>
                        {/* <tr>
                            <td>Date</td>
                            <td><input type="date" name="date" /> </td>
                        </tr> */}
                        <tr>
                            <td></td>
                            <td><button className="inputField" type="submit">Add Event</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
