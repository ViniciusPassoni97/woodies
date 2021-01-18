import React from 'react';
import Group from '../../assets/icons/group.png';
import {ContainerAbout,ContainerAboutHeader,ContainerAboutLineAbout} from './style';

const about:React.FC = () => {
    return(
        <ContainerAbout>
            <ContainerAboutHeader className="">
                <img src={Group} alt="Group" className="ContainerAboutHeaderImg"/>
                <p className="ContainerAboutHeaderTitle">Who we are</p>
            </ContainerAboutHeader>
            <ContainerAboutLineAbout>
                <p className="ContainerAboutLineAboutText">About</p>
            </ContainerAboutLineAbout>
        </ContainerAbout>
    )
}

export default about;