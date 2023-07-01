import React from "react";
import { Link } from "react-router-dom";
import image  from "../images/img2.png";


const About = () =>{
    return(
        <>
        <section className="about_background">
            <div className="about_content">
               <h2>As a veterinarian and lover of animals.</h2>
               <p>Lorem Ipsum available but the majot suffered alteration in some form, by humour randomised words.</p>
               <Link to = '/service'><button>Our Services</button></Link>
            </div>
            <div className="about_image">
                <div className="yello_block"></div>
                <div className="about_img">
                <img src={image} alt="Header Dog" width="400" height="auto"></img>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;