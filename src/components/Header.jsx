import React from 'react';
import { Link } from 'react-router-dom';
import Hdrimage from "../../public/images/img1.png";

const Header = () => {
  return (
    <>
    <section className='hdr_background'>
        <div className='hder_lcontnet'>
            <h1>First I wanted to be a veterinarian</h1>
            <p>Lorem Ipsum available but the majority have suffered<br></br> alteration in some form, by injected humour<br></br> randomised words.</p>
            <div className='hder_contact'>
            <Link to = '/contact'><button>Contact us</button></Link>
            <Link to = '/service'><button>Our Services</button></Link>
            </div>
        </div>
        <div className='hdr_image'>
          <img src={Hdrimage} alt="Header Dog" width="400" height="auto"></img>
        </div>
    </section>
    </>
  )
}

export default Header;