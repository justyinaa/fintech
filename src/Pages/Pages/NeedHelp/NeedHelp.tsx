import React from "react";
import phonecall from "../../../assets/phonecall.png";
import message from "../../../assets/message.png";
import "./Needhelp.css";

const NeedHelp: React.FC = () => {
  return (
    <section className="section">
      <h3>Still Need Help?</h3>
      <div className="need-help">
        <div className="need-help-div1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quibusdam doloremque natus vitae itaque reiciendis repellat optio
            voluptate, atque, eveniet ratione voluptatem iure! Excepturi, culpa
            repellat rerum placeat fugiat minus!
          </p>
        </div>
        <div className="need-help-div2">
          <div className="need-help-info">
            <div>
              <img src={phonecall} alt="" className="need-help-img" />
            </div>
            <div>
              <p>Phone Number</p>
              <h4>(62) 1829017</h4>
            </div>
          </div>
          <div className="need-help-info">
            <div>
              <img src={message} alt="" className="need-help-img" />
            </div>
            <div>
              <p>Email</p>
              <h4>Hello@hello</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
