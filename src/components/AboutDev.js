import React from "react";

function AboutDev(props) {

  return (
    <div className="card" style={{ marginTop: "15px" }}>
      <img src={props.img} className="card-img-top mx-auto" alt="Image here" style={{height:"200px", width:"200px", margin:"15px"}}/>
      <div className="card-body">
        <h2 className="card-title text-center">{props.name}</h2>
        <p className="card-text">{props.desc}</p>
      </div>
    </div>
  );
}

export default AboutDev;
