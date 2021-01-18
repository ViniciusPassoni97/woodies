import styled from 'styled-components';

export const ContainerAbout = styled.div`
    display: flex;
    align-items: center;
    width:80%;
    margin: auto;
    justify-content: space-between;
`;
export const ContainerAboutHeader = styled.div`
   margin-top:10rem;
    display: flex;
    align-items: center;
    .ContainerAboutHeaderImg{
        width:4rem;
        height:4rem;
        color:#000;  
    }
    .ContainerAboutHeaderTitle{
        font-size:3rem;
    }
`;

export const ContainerAboutLineAbout = styled.div`
    margin-top:10rem;
    .ContainerAboutLineAboutText{
        font-size:3.5rem;
        font-weight:bold;
        color:#7c7c7c;
    }
`;

export const ContainerAboutLine = styled.div`
    margin-top:10rem;
    width:36%;
    height:0.1rem;
    background-color:#000;
`;

