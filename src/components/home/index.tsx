import React from 'react';

import ContainerHome from './styles';
import Header from '../header/index';
import Explore from '../explore/index';
import Group from '../../assets/icons/group.png';
import About from '../about/index';

const home: React.FC = () => {
  return (
      <>
        <ContainerHome>
            <Header />
            <Explore />
            <div className='HomeColor'>
        
            </div>
            <img className='group' src={Group} alt='Group' />
        </ContainerHome>
            <About />
      </>
  );
}

export default home;