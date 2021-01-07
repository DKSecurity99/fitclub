import React from 'react';
import { FiHeart, FiCircle, FiMoon, FiWatch } from 'react-icons/fi';

import './styles.css';

import bg from '../../assets/bg.png';

import Title from '../UI/Title';
import SubTitle from '../UI/SubTitle';
import TextP from '../UI/Text';
import ButtonRouded from '../UI/ButtonRouded';
import Box from '../UI/Box';

function BannerHomePage() {
  return (
    <main className="banner-home-page">
      <div className="container">
        <article className="banner-home-page__container">
          <div className="banner-home-page__content">
            <Title title="30 Days"/>
            <SubTitle title="Fitness Chanllenge"/>
            <TextP text="Start 30 days fitness challenge with your smart mobile app check you daily activities" />
            <ButtonRouded label="Start Challenge"/>

            <div className="banner-home-page__boxs">
              <Box 
                iconComponent={<FiHeart size="2rem" color="#fff"/>}
                iconColor="#EE786C"
                label="Heart"
                value={80}
                description="Per min"
              />

              <Box 
                iconComponent={<FiCircle size="2rem" color="#fff"/>}
                iconColor="#1C767E"
                label="Calories"
                value={950}
                description="Kcal"
              />

              <Box 
                iconComponent={<FiMoon size="2rem" color="#fff"/>}
                iconColor="#FEC16A"
                label="Sleep"
                value="8:30"
                description="Hours"
              />

              <Box 
                iconComponent={<FiWatch size="2rem" color="#fff"/>}
                iconColor="#71678C"
                label="Training"
                value="2:00"
                description="Hours"
              />
            </div>
          </div>
          <div className="banner-home-page__image">
            <img src={bg} alt="image"/>
          </div>
        </article>
      </div>
    </main>
  );
}

export default BannerHomePage;
