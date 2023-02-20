import React from "react";
import './Content.css'

const Minicomponent = ({ h3, p, img,button }) => {
  return (
    <div className="container mini">
      <div className="row">
        <div className="col-md-6 mini1">
          <img src={img} alt="img-responsive" className=""/>
        </div>
        <div className="col-md-6 mini2">
          <h1 className="pb-4">{h3}</h1>
          <p>
            {p}
          </p>
          {button}
        </div>
      </div>
    </div>
  );
};

export default Minicomponent;
