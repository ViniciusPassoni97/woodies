import React from 'react';

import {ContainerAboutBody,ContainerAboutBodyImage,ContainerAboutBodyInfo} from './style';
import AboutImage from '../../../assets/icons/aboutImage.png';

const Body: React.FC = () => {
    return (
        <ContainerAboutBody>
            <ContainerAboutBodyImage>
                <img src={AboutImage} alt='ContainerAboutBodyImg' className='ContainerAboutBodyImg' />
            </ContainerAboutBodyImage>
            <ContainerAboutBodyInfo>
                <p className='ContainerAboutBodyInfoTitle'><strong className='ContainerAboutBodyStrong'>WOODIES</strong> is the <strong className='ContainerAboutBodyStrong'>home of modern wooden furniture</strong></p>
                <p className='ContainerAboutBodyInfoText'>the answer to your need for furniture with shapes,
                 sizes and colors.</p>
            </ContainerAboutBodyInfo>
        </ContainerAboutBody>
    );
}

export default Body;