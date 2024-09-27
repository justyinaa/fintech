import React from 'react'
import "./GetApp.css"

const GetApp:React.FC = () => {
  return (
    <section className="section get-app-section">
      <div className="get-app-div1">
        <h3>Get It Now</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna
        </p>
      </div>
      <div className="get-app-btns">
        <button className="app-btn">
          Available on the <br />
          <span>App Store</span>
        </button>
        <button className="google-btn">
          GET IT ON <br />
          <span>Google Play</span>
        </button>
      </div>
    </section>
  );
}

export default GetApp
