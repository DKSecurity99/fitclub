import React from 'react';

import './styles.css';

type SubTitleProps = {
  title: string;
}

function SubTitle({ title }: SubTitleProps) {
  return <h2 className="sub-title">{ title }</h2>
}

export default SubTitle;
