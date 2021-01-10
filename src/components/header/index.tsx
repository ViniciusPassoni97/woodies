import React from 'react';

import ContainerHeader from './styles';
import Logo from '../../assets/icons/logo.png';

const Header: React.FC = () => {
  return (
    <ContainerHeader>
        <div className='ContainerHeaderDivImage'>
            <img src={Logo} alt='Logo'/>
            <h1>Woodies</h1>
        </div>
        <div className=''>
            <div className=''>

            </div>
            <div className=''>

            </div>
        </div>
    </ContainerHeader>
  );
}

export default Header;