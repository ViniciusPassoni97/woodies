import styled from 'styled-components';

const ContainerHeader = styled.div`
    padding:0.5rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:90%;
    margin:auto;
    .ContainerHeaderDivImage{
        display:flex;
    }
    .ContainerHeaderDivInfoLink{
        cursor:pointer;
        margin-left:3rem;
        font-size:1.3rem;
    }
    .ContainerHeaderDivInfoLink:hover{
        color:#DAA520;
    }
    .ContainerHeaderDivInfoButton{
        margin-left:2rem;
    }
    .ContainerHeaderDivImageTitle{
        margin-left:2rem;
    }
`;

export default ContainerHeader;