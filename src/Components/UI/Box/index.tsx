import React, { ReactNode } from 'react';

import './styles.css';

type BoxProps = {
  iconComponent: ReactNode;
  iconColor: string;
  label: string;
  value: number | string;
  description: string;
}

function Box({ 
  iconComponent, 
  iconColor,
  label, 
  value, 
  description 
}: BoxProps) {
  return (
    <div className="box">
      <div className="box__container">
        <span className="box__icon" style={{backgroundColor: iconColor}}>
          { iconComponent }
        </span>
        <h3 className="box__title">{ label }</h3>
        <h3 className="box__title">{ value }</h3> 
        <p className="box__text">{ description }</p>
      </div>
    </div>
  );
}

export default Box;
