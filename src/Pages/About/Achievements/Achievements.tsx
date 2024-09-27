import React from 'react'
import imageplaceholder from "../../../assets/imageplaceholder.png"
import "./Achievement.css"

const Achievements:React.FC = () => {
  return (
      <section className='section'>
          <h3>Our Achievements</h3>
      <div className="card achievement-card">
        <div>
          <img src={imageplaceholder} alt="" className="achievement-placeholder" />
        </div>
        <div>
          <h4 className='achievement-year'>2015</h4>
          <h4 className='achievement'>Startup of The Year by Crowd Bank Awards</h4>
        </div>
      </div>
      <div className="card achievement-card">
        <div>
          <img src={imageplaceholder} alt="" className="achievement-placeholder" />
        </div>
        <div>
          <h4 className='achievement-year'>2015</h4>
          <h4 className='achievement'>Startup of The Year by Crowd Bank Awards</h4>
        </div>
      </div>
      <div className="card achievement-card">
        <div>
          <img src={imageplaceholder} alt="" className="achievement-placeholder" />
        </div>
        <div>
          <h4 className='achievement-year'>2015</h4>
          <h4 className='achievement'>Startup of The Year by Crowd Bank Awards</h4>
        </div>
      </div>
      <div className="card achievement-card">
        <div>
          <img src={imageplaceholder} alt="" className="achievement-placeholder" />
        </div>
        <div>
          <h4 className='achievement-year'>2015</h4>
          <h4 className='achievement'>Startup of The Year by Crowd Bank Awards</h4>
        </div>
      </div>
      <div className="card achievement-card">
        <div>
          <img src={imageplaceholder} alt="" className="achievement-placeholder" />
        </div>
        <div>
          <h4 className='achievement-year'>2015</h4>
          <h4 className='achievement'>Startup of The Year by Crowd Bank Awards</h4>
        </div>
      </div>
    </section>
  );
}

export default Achievements
