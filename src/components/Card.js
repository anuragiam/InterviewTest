import React from "react";

import "./Card.css";

function Card(props) {
  return (
    <div>
      {props.data.map((obj) => {
        return (<div className="container">
        <div className="profile">
          <div className="imgbrdr">
            <img className="circleImg" src={obj.pic} alt="pic here"></img>
          </div>
          <div className="name">
            <b>{obj.name}</b>
          </div>
        </div>
        <p className="lorem 1">{obj.lorem1}</p>
        <p className="lorem 2">{obj.lorem2}</p>
      </div>)
      })}
    </div>
  );
}

export default Card;
