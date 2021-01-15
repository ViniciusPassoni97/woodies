import React from 'react';

import ContainerHome from './styles';
import Header from '../header/index';
import Explore from '../explore/index';

const home: React.FC = () => {
  return (
      <>
        <ContainerHome>
            <Header />
            <Explore />
            <div className='HomeColor'>
        
            </div>
        </ContainerHome>
      </>
  );
}

export default home;