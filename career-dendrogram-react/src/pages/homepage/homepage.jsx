import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./homepage.css";
import homebgimage from "../../assets/homebgimage.jpg"

const Homepage = () => {
    return (
        <div className="homepage__content">
            <div className="image">
                <img src={homebgimage} alt="A beautiful image" className="center" />
            </div>
            <p>
            Enter your interests below and we'll generate a list of potential
            career options for you!
            </p>
            
        </div>
    );
}

export default Homepage;