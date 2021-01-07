import React from 'react';

import './styles.css';

type ButtonProps = {
  label: string;
}

function ButtonRouded({ label }: ButtonProps) {
  return <button className="button-rouded">{ label }</button>
}

export default ButtonRouded;
