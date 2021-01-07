import React from 'react';

import './styles.css';

type TextProps = {
  text: string;
}

function Text({ text }: TextProps) {
  return <p className="text">{ text }</p>
}

export default Text;
