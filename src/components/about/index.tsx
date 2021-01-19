import React from 'react';
import ContainerAboutHeader from '../about/header/index';
import ContainerAboutBody from '../about/body/index';
import {ContainerAbout} from './style';

const about:React.FC = () => {
    return(
        <ContainerAbout>
            <ContainerAboutHeader />
            <ContainerAboutBody />
        </ContainerAbout>
    )
}

export default about;