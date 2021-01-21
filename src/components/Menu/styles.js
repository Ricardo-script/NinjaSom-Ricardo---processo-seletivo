import styled from 'styled-components';

export const AreaMenu = styled.div`
    width:100%;
    height:210px;
    margin: -80px 0 0 0;
    display:flex;
    align-items:center;
`;

export const AreaItens = styled.div`
    width:80%;
    margin: 0 auto;
    display:flex;
    justify-content:space-between;


`;

export const Item = styled.div`
    opacity: 0.5;
    display:flex;
    flex-direction: column;
    align-items:center;
    cursor: pointer;
    
    :hover{
        opacity: 1;
        transition: .5s;
        
    }

    img{
        width:115px;
        height:115px;
        display:flex;
        border: 1px solid #FFF;
        border-radius: 50%;
        padding:10px;
        
    }

    img:hover{
        border: 1px solid #041E50;
        transition: .7s;
    }

    legend{
        color:#041E50;
        font-family: "Lato", sans-serif;
        font-size: 14px;
        font-weight:bold;
        margin: 5% 0 10% 0;
    }

`;
