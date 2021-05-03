import React from 'react'
import { Link } from 'react-router-dom';

export default function MenuBar() {
    return (
        <div className="menu">
            <Link className="menuList" to="/home">Home</Link>
            <Link className="menuList" to="/add-event">Add Event</Link>
            <Link className="menuList" to="/all-event">All Event</Link>
        </div>
    )
}
