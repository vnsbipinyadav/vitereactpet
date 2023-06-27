import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <section className='footer_section'>
        <div className='footer_details'>
            <div className='footer_link'>
                <h3>About</h3>
                <div className='footer_menu'>
                    <ul>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Our Team</a>
                        </li>
                        <li>
                            <a href="#">Brand Guidelines</a>
                        </li>
                        <li>
                            <a href="#">Terms & Condition</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer_link'>
                <h3>About</h3>
                <div className='footer_menu'>
                    <ul>
                        <li>
                            <a href="#">How to Order</a>
                        </li>
                        <li>
                            <a href="#">Our Product</a>
                        </li>
                        <li>
                            <a href="#">Order Status</a>
                        </li>
                        <li>
                            <a href="#">Promo</a>
                        </li>
                        <li>
                            <a href="#">Payment Method</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='footer_icondetails'>
            <div className='footer_icon'>
                <h3>About Vetcare</h3>
                <p> Lorem Ipsum available, but the majorit </p>
                <div className='center_icon'>
                <div className='social_icon'>
                    <a href="#"><BsTwitter/></a>
                    <a href="#"><BsFacebook/></a>
                    <a href="#"><BsInstagram/></a>
                    <a href="#"><BsWhatsapp/></a>
                </div>
                </div>
            </div>
            </div>

    </section>
    </>
  )
}

export default Footer;