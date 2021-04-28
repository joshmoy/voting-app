import React from 'react';

import { Button, Wrapper } from './Card.style';

const Card = ({ name, image, percentage }) => {
  return (
    <Wrapper>
      <div className="card">
        <div className="front">
          <div className="image-div">
            <img src={image} alt="" />
          </div>
          <p>{name}</p>
          <div className="progress-bar-striped">
            <div style={{ width: `${percentage}%` }}>
              <p>{percentage}%</p>
            </div>
          </div>
        </div>
        <div
          className="back"
          style={{
            backgroundImage: `linear-gradient( rgba(3, 24, 39,0.6), rgba(3, 24, 39,0.6)), url(${image})`
          }}>
          <Button>Vote</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export { Card };
