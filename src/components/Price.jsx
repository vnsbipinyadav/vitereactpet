import React from 'react'
import Image1 from "../../public/images/img7.png"
import Image2 from "../../public/images/img8.png"
import Image3 from "../../public/images/img9.png"
import { Link } from 'react-router-dom'


const Price = () => {
  return (
    <>
    <section className='price_bckgrnd'>
        <div className='price_text'>
            <h2>Pricing Details</h2>
            <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className='pricing_image'>
            <div className='pricing_card'>
                <img src={Image1} alt="Dog" />
                <h3>$30</h3>
                <Link to="#"><button>Buy Now</button></Link>
            </div>
            <div className='pricing_card'>
                <img src={Image2} alt="Dog" />
                <h3>$30</h3>
                <Link to="#"><button>Buy Now</button></Link>
            </div>
            <div className='pricing_card'>
                <img src={Image3} alt="Dog" />
                <h3>$30</h3>
                <Link to="#"><button>Buy Now</button></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Price;