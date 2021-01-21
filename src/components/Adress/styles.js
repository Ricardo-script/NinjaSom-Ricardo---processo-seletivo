import styled from 'styled-components';

export const Address = styled.div`
    width:100%;
    height:65px;
    display:flex;
    align-items:center;
`;

export const TextAddress = styled.div`
    width:507px;
    height:40px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-left:120px;

    span{
        font-size:10px;
        font-weight:400;
        color: #041E50;
        font-family: "Lato", sans-serif;
        margin: 2px 0 2px 0;
    }
`;

export const Logo = styled.div`
    width:300px;
    height:40px;
    margin-left:210px;
    
`;

export const AreaLogo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    img{
        margin: 0 50px 0 0;
    }
`;