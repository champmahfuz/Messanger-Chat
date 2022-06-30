import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Link to="/aboutus">About Us</Link><br />
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Home;