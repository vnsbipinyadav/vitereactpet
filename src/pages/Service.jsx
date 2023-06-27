import React from 'react'
import Veterianarian from "../../public/images/img5.png";
import Vaccination from "../../public/images/img4.png";
import Dental from "../../public/images/img3.png";
import { Link } from 'react-router-dom';
import Animal from "../../public/images/img6.png";


const Service = () => {
  return (
    <>
     <section className='service_section'>
        <div className='service_text'>
            <h2>Our Service</h2>
            <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className='service_image'>
            <div className='card'>
                <img src={Veterianarian} alt="Veterianarian" />
                <h3>Veterinarian</h3>
                <p>Lorem Ipsum available, but the majority have suffered alteration in some.</p>
            </div>
            <div className='card'>
                <img src={Vaccination} alt="Vaccination" />
                <h3>Vaccination Care</h3>
                <p>Lorem Ipsum available, but the majority have suffered alteration in some.</p>
            </div>
            <div className='card'>
                <img src={Dental} alt="Dental" />
                <h3>Dental Care</h3>
                <p>Lorem Ipsum available, but the majority have suffered alteration in some.</p>
            </div>
        </div>
     </section>
     <section className='animal_lover'>
     <div className="animal_image">
                <div className="animalyellow_block"></div>
                <div className="animal_img">
                <img src={Animal} alt="Header Dog" width="400" height="auto"></img>
                </div>
            </div>
            <div className="animal_content">
               <h2>As a veterinarian and lover of animals.</h2>
               <p>Lorem Ipsum available but the majot suffered alteration in some form, by humour randomised words.</p>
               <Link to = '/about'><button>About us</button></Link>
            </div>
     </section>
    </>
  )
}

export default Service;