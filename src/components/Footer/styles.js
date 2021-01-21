import styled from 'styled-components';

export const AreaFooter = styled.footer`
    width:100%;
    height:445px;
    margin-top:25px;
    background-color:#041E50;
    font-family: "Lato", sans-serif;
    color:#FFF;
    display:flex;
    align-items:center;
`;

export const Titulo = styled.p`
    font-size: 14px;
    font-weight:bold;
    margin:27px 0 20px 0;
`;

export const SubTitulo = styled.p`
    font-size: 12px;
    font-weight:bold;
    cursor: pointer;
`;

export const InfoFooter = styled.div`
    width:1002px;
    margin: 0 auto;
    display:flex;
`;

export const One = styled.div`
    width:460px;
    display:flex;
`;

export const PartA = styled.div`
    margin-right:70px;
`;

export const PartB = styled.div`
`;

export const PartC = styled.div`
`;

export const PartD = styled.div`
`;

export const Two = styled.div`
    width:539px;
    display:flex;
`;

export const Icons = styled.div`
    width:82px;
    display:flex;
    justify-content:space-between;

    img{
        width:15.07px;
        height:15.07px;
        cursor: pointer;
        cursor: pointer;
    }
`;

export const Cards = styled.div`
    width:198;
    height:48;
    column-count:3;

    img{
        margin:0 4px 3px 0;
        cursor: pointer;
    }
`;

export const CardsSegurança = styled.div`

     img{
        margin:0 7px 0 0;
        cursor: pointer;
    }
`;

export const Form = styled.form`
    width:276px;
    height:249;
    position:relative;
    margin: -20px 0 0 0;
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;

    span{
        font-size:12px;
        font-weight:200;
        color:#041E50;
        margin: 12px 0 0 0;
    }

    
    .button{
        width:110px;
        height:35px;
        background-color:#FFF;
        font-family: "Maven Pro",sans-serif;
        font-size: 12px;
        font-weight:bold;
        color:#041E50;
        border:1px solid #041E50;
        border-radius: 5px;
        outline:none;
        cursor: pointer;
        margin:5px 0 35px 0;
        margin-left: -115px;
    }

    .button:hover{
        background-color:#041E50;
        color:#FFF;
    }

    input{
        font-size:12px;
        outline:none;
        border:none;
        border-bottom:1px solid #041E50;
    }

    .inputForm{
        margin: 5% 0 5% 0;
        width: 225px;
        height: 35px;
        display:flex;

    }
 
`;

export const Talk = styled.div`
    width:1002px;
    height:174px;
    background-color:#F7F7F7;
    position: absolute;
    margin: -550px 0 0 137px;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:1;
    border-radius:5px;

`;

export const AreaTalk = styled.div`
    width:729px;
    height:80px; 
    display:flex;

`;

export const Name = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:12px;

    span{
        color:#041E50;
        font-family: "Lato", sans-serif;
        font-size: 12px;
        font-weight:bold;
        margin-top: 5px;
    }

`;

export const Baloon = styled.div`
    background-color:#FFF; 
    width:543px;
    height:76px;
    display:flex;
    align-items:center;
    border-radius:5px;
    margin-left:5px;
    box-shadow: 5px 5px 5px -1px rgba(125,125,125,0.43);



    img{
        margin: 52px 0 0 291px;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: -1;
    } 

`;

export const Talktext = styled.div`
    width: 500px;
    margin-left: 20px;
    span{
        color:#041E50;
        font-family: "Lato", sans-serif;
        font-size: 13px;
        font-weight:400;
    }
`;

