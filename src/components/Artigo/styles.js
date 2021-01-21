import styled from 'styled-components';

export const AreaArticle = styled.div`
    width:100%;
    height:386px;
    display:flex;
`;

export const Article = styled.article`

    display:flex;
    flex-direction:column;
    align-items:center;
   
    img{
        width:100%;
        height:100%;
        filter: brightness(50%);
    }
    span{
        font-family: "Lato", sans-serif;
        font-size: 14px;
        font-weight:lighter;
        color:#FFF;
        filter: brightness(100%);
    }

`;

export const Description = styled.div`
    margin-top: -275px;
    width:340px;
    height:213px;

    .audio{
        font-family: "Lato", sans-serif;
        font-size: 40px;
        font-weight:bold;
        color:#FFF;
    }
    .profissional{
        font-family: "Lato", sans-serif;
        font-size: 40px;
        color:#FFF;
        margin-bottom:35px;
    }

`;

export const AreaText = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    .underline{
        width:20px;
        height:2px;
        background:#FFF;
        margin:7px 0 10px 0;

    }
`;

export const AreaBtn = styled.div`
    font-family: "Lato", sans-serif;
    border:2px solid #FFF;
    border-radius: 4px;
    color: #FFF;
    width:155px;
    height:50px;
    position: relative;
    margin-top: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;  

    :hover{
        background-color:#FFF;
        color:gray;
    }
`;

export const Btn = styled.div`
     
`;
