import React from 'react';

import ContainerHome from './styles';
import Header from '../header/index';
import Explore from '../explore/index';
import Group from '../../assets/icons/group.png';

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
      </>
  );
}

export default home;