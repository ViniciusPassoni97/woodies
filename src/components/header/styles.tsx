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
        margin-left:1rem;
        font-size:0.8rem;
        padding:0.3rem 1.4rem;
        border-radius:0.5rem;
        border:0.4rem;
        background-color:#ffffff;
        opacity:0.7;
    }
    .ContainerHeaderDivInfoLink:hover{
        color:#DAA520;
        background-color:#f1f1f1;
    }
    .ContainerHeaderDivInfoButton{
        margin-left:2rem;
        opacity:0.7;
    }
    .ContainerHeaderDivImageTitle{
        margin-left:2rem;
        font-size:1.5rem;    
    }
    .ContainerHeaderDivImageImg{
        width:2rem;
        height:2rem;
    }
    .ContainerHeaderDivInfoButton{
        padding:0.3rem 1.4rem;
        border-radius:0.5rem;
        border:0.4rem;
        background-color:#ffffff;
    }
    .ContainerHeaderDivInfoButton:hover{
        color:#DAA520;
        background-color:#f1f1f1;
    }
    @media(max-width:950px){
        width:100%;
        .ContainerHeaderDivInfoLink{
            margin-left:1;
        }
    }
`;

export default ContainerHeader;