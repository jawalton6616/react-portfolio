import React from "react";
import CardCaption from "../CardCaption/CardCaption";
// import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "./card.css";

function Card(props) {
  return (
    <div
      className="d-inline-block port-card"
      onClick={(event) => props.onClick(props.item)}
    >
      <img className="port-imgs" src={props.item.src} alt={props.item.src} />
      {props.item.selected && (
        <CardCaption
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          gitHubLink={props.item.gitHubLink}
        />
      )}
    </div>
  );
}

export default Card;
