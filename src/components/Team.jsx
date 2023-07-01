import React from 'react'
import Team1 from "../images/team1.png";
import Team2 from "../images/team2.png";
import Team3 from "../images/team3.png";


const Team = () => {
  return (
    <>
    <section className='team_bckgrnd'>
        <div className='team_text'>
            <h2>The vetcare team</h2>
            <p>Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className='team_image'>
            <div className='team_card'>
                <img src={Team1} alt="Doctor" />
                <h3>Jennifer Mullen</h3>
                <p>VETERINARY</p>
                
            </div>
            <div className='team_card'>
                <img src={Team2} alt="Doctor" />
                <h3>Sheeren Collins</h3>
                <p>ADMINISTRATION</p>
                
            </div>
            <div className='team_card'>
                <img src={Team3} alt="Doctor" />
                <h3>Jennifer Mullen</h3>
                <p>VETERINARY</p>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Team;