import React from "react";
import "./Footer.css";

export const Footer = ({ button }) => {
  return (
    <>
      <div className="footer">
        <h1>A Price To Suit Everyone</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
        <div>
          <h2>$40</h2>
          <h5>UI design kit</h5>
        </div>
        <p>See, One price. Simple.</p>
        {button}
        
      </div>
      
      <div className="row footer1">
        <div className="col-md-4">
        <p>©2020 Yourcompany</p>
        </div>
        <div className="col-md-4">
        <h2>Landie</h2>
        </div>
        <div className="col-md-4">{button}</div>
      </div>
      
    </>
  );
};
