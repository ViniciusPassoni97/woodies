import styled from 'styled-components';

const ContainerHome = styled.div`
    background-color: #ffffff;
    opacity:0.7;
    .HomeColor{
        position:absolute;
        top:0;
        right:0rem;
        width:30%;
        height:35rem;
        border-radius: 0 0 0 4rem;
        background-color:#e98b8b;
        z-index:-1;
    }
    .group{
        position:absolute;
        top:18rem;
        right:18rem;
        height:15rem;
        width:15rem;
        z-index:-1;
    }
`;

export default ContainerHome;