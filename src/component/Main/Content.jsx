import React from "react";
import "./Content.css";
import { Footer } from "./Footer/Footer";
import Minicomponent from "./Minicomponent";

const details = [
  {
    h3: "Light, Fast & Powerful",
    p:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    img: "assets/2nd.png",
  },
  {
    h3: "Powerful, Light & Fast",
    p:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    img: "assets/3rd.png",
  },
  {
    h3: "Fast, Light & Powerful",
    p:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    img: "assets/4th.png",
  },
];

const Content = () => {
  const button = <button className="btn1">Purchage UI kit</button>;
  return (
    <div className="container-fluid content">
      <img src="assets/Cloud.png" alt="" className="cloudimg img-responsive" />
      <img
        src="assets/CloudTop.png"
        alt=""
        className="cloudtop img-responsive"
      />
      <div className="row">
        <div className="col-md-6 contentCol">
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />{" "}
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="row py-5">
            <div className="col-md-6 ">
              <button className="btn1">Purchage UI kit</button>
            </div>
            <div className="col-md-6 ">
              <button className="btn2">Learn more</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 "></div>
      </div>
      <div className="row section1">
        <div className="col-md-6 section11">
          <h1 className="pb-4">Light, Fast & Powerful</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />{" "}
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="row py-5">
            <div className="col-md-6">
              <h4>Title Goes Here</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
            <div className="col-md-6 ">
              <h4>Title Goes Here</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 firstimg">
          <img src="assets/1st.png" alt="" className="img-responsive" />
        </div>
      </div>

      <div className="row">
        <Minicomponent
          h3={details[0].h3}
          p={details[0].p}
          img={details[0].img}
        />
        <Minicomponent
          h3={details[1].h3}
          p={details[1].p}
          img={details[1].img}
        />
        <Minicomponent
          h3={details[2].h3}
          p={details[2].p}
          img={details[2].img}
          button={button}
        />
      </div>

      <div className="row contentfooter">
        <Footer button={button} />
      </div>
    </div>
  );
};

export default Content;
