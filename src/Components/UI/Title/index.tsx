import React from 'react';

import './styles.css';

type TitleProps = {
  title: string;
}

function Title({ title }: TitleProps){
  return <h1 className="title">{ title }</h1>
}
export default Title;
