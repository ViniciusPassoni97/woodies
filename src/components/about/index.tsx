import React from 'react';
import Group from '../../assets/icons/group.png';
import {ContainerAbout,ContainerAboutHeader,ContainerAboutLineAbout,ContainerAboutLine} from './style';

const about:React.FC = () => {
    return(
        <ContainerAbout>
            <ContainerAboutHeader className="">
                <img src={Group} alt="Group" className="ContainerAboutHeaderImg"/>
                <p className="ContainerAboutHeaderTitle">Who we are</p>
            </ContainerAboutHeader>
            <ContainerAboutLine />
            <ContainerAboutLineAbout>
                <p className="ContainerAboutLineAboutText">About US</p>
            </ContainerAboutLineAbout>
        </ContainerAbout>
    )
}

export default about;