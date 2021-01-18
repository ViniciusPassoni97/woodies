import React from 'react';
import Group from '../../assets/icons/group.png';
import {ContainerAbout,ContainerAboutHeader} from './style';

const about:React.FC = () => {
    return(
        <ContainerAbout>
            <ContainerAboutHeader className="">
                <img src={Group} alt="Group" className="ContainerAboutHeaderImg"/>
                <p className="ContainerAboutHeaderTitle">Who we are</p>
            </ContainerAboutHeader>
            <div className="">
            </div>
            <div className="">
                <p className="">About</p>
            </div>
        </ContainerAbout>
    )
}

export default about;