import React from 'react';

import ContainerHome from './styles';
import Header from '../header/index';

const home: React.FC = () => {
  return (
      <>
        <ContainerHome>
            <Header />
        </ContainerHome>
      </>
  );
}

export default home;