// @flow
import React from 'react';
// Styles
import './style.scss';

type Props = {
  avatar: String,
  name: String,
  description: String,
  link: String,
}

const Card = ({
  avatar,
  name,
  description,
  link,
}: Props) => (

  <div className="card">
    <div className="card-image">
      <img src={avatar} alt="" />
    </div>
    <h3>
      <span className="card-title">
        Name:&nbsp;
      </span>
      {name}
    </h3>
    <p>
      <span className="card-title">
        Description:&nbsp;
      </span>
      {description}
    </p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit repository
    </a>
  </div>
);

export default Card;
