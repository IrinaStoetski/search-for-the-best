import React from 'react';
import './style.scss';

const Card = ({
    avatar,
    name,
    description,
    link
}) => (

        <div className="card">
            <div className="card-image">
                <img src={avatar} />
            </div>
            <h3>
                <span className="card-title">
                   Name:&nbsp;</span>{name}
            </h3>
            <p>
              <span className="card-title">
                Description:&nbsp;</span>
                {description}
            </p>
            <a href={link} target="_blank">Visit owner's repository</a>
        </div>

    )

export default Card