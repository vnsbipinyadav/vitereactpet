import React from 'react'

import { TiHeartOutline } from 'react-icons/ti';
import { FaStethoscope } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";

const Features = () => {
  return (
    <>
    <section className='features_section'>
        <div className='features_pos'>
        <div className='features_details'>
            <h2><TiHeartOutline style={{fontSize:'150px', textAlign:'center'}} className='TiHeartOutline'/></h2>
            <p>+34793</p>
            <p>Happy Clients</p>
        </div>
        <div className='features_details'>
            <h2><FaStethoscope style={{fontSize:'150px', textAlign:'center'}}/></h2>
            <p>+45382</p>
            <p>Department</p>
        </div>
            <div className='features_details'>
            <h2><BiSolidInjection style={{fontSize:'150px', textAlign:'center'}}/></h2>
            <p>+54762</p>
            <p>Vaccinations</p>
        </div>
        </div>
        <div className='clr_overlay'></div>
    </section>
    </>
  )
}

export default Features;