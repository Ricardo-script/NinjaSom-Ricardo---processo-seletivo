import styled from 'styled-components';

export const VitrineSection = styled.div`
    margin-bottom:255px;
`;

export const AreaVitrine = styled.section`
    width:990px;
    height:100%;
    column-count: 4;
    margin: 0 auto;
`;

export const AreaCard = styled.a`

    text-decoration: none;

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-family: "Lato", sans-serif;
        color:#041E50;
        background: rgba(0,0,0,0.8);
        z-index: 99999;
        opacity:0;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
        pointer-events: none;        
    }

    .modal:target {
        opacity: 1;
        pointer-events: auto;
    }

    .modal > div {
        width: 770px;
        height: 353px;
        border-radius:5px;
        position: relative;
        margin: 10% auto;
        padding: 15px 20px;
        background: #fff;
    }

    .fechar {
        position: absolute;
        width: 30px;
        right: 20px;
        top: 7px;
        text-align: center;
        line-height: 30px;
        margin-top: 5px;
        border-radius: 50%;
        font-size: 30px;
        color: #707070;
        text-decoration:none;
    }
    
    .imgModal{
        margin-top: 150px;
        
    }
`;

export const Modal = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    font-family: "Lato", sans-serif;
    color:#041E50;

    .descricaoModal{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content: space-between;
        height:200px;
        width:400px;
        margin-left:10px;

    }

    .imgModal{
        margin: 20px 0 0 0px;
        width:335px;
        height:252px;
    }

     h2,p{
        margin: 20px 0 0 50px; 
    }

    .modalDescription{
        font-size:10px;
        font-weight:100;
    }

    .modalPrice{
        font-size:20px;
        font-weight: bold;

    }

    .modalLink{
        font-size:12px;
        color:#041E50;
    }

    .quadro{
        display:flex;
        align-items:center;
    }


    .add {
        background-color:#041E50;
        cursor:pointer;
        color:#ffffff;
        font-size:11px;
        font-weight:bold;
        width:164px;
        padding:12px 0 12px 0;
        text-align:center;
        border-radius: 4px;
    }

    .add:active{
        position:relative;
	    top:1px;
    }
`;


export const Card = styled.div`
    width:216px;
    height:264px;
    margin: 0 auto;
    text-align:center;
    margin-bottom: 62px;
    border:1px solid #FFF;
    padding:20px 0 0 0;


    :hover{
        border: 1px solid #F2F2F2;
        box-shadow: 10px 10px 10px -4px rgba(196,194,194,1);
        transition: .5s;
    }

    :hover .lupa{
        color: #041E50;
        transition: .5s;
    }

    :hover .name{
        color: #041E50;
        transition: .5s;
    }

    :hover img{
        margin: -13% 0 13% 0;
        transition: .7s;
    }

    img{
        width:216px;
        height:162px;
    }

    .nomeProduto{
        font-family: "Lato", sans-serif;
        font-size: 15px;
        font-weight:bold;
        color:#041E50;
        margin:2%;
    }

    .descricao{
        font-family: "Lato", sans-serif;
        font-size: 10px;
        font-weight:lighter;
        color:#041E50;
        margin:3%;
    }

    .valor{
        font-family: "Lato", sans-serif;
        font-size: 18px;
        font-weight:bold;
        color:#041E50;
    }  

`;

export const Lupa = styled.div`
    margin-top: -70%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  

    .lupa{
        width:45px;
        height:45px;
        color: transparent;
    }

    .name{
        font-family: "Lato", sans-serif;
        font-size: 12px;
        color: transparent;
    }
   
`;

export const Description = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
`;

export const AreaBtn = styled.div`
    font-family: "Lato", sans-serif;
    border:2px solid #041E50;
    border-radius: 4px;
    color: #041E50;
    width:155px;
    height:45px;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
    

    :hover{
        background-color:#041E50;
        color:#FFF;
        transition: .5s;
    }
`;

export const Btn = styled.div`
    
`;

export const DescriptionText = styled.div`
    width:100%;
    height:217px;
    color: #041E50;
    font-family: "Lato", sans-serif;
    display:flex;
    flex-direction:column;
    text-align:center;
    
`;

export const TitleOne = styled.div`
    margin-top:95px;
    font-size: 25px;

    .destaque{
        font-weight:bold;
        margin: 10px;
    }

    .destaque1{
        font-weight:bold;
        margin: 10px;
        font-size: 26px;
    }
    
`;

export const TitleTwo = styled.div`
    color:#222222;
    margin-top:16px;
    
    span{
        color:#A5A5A5;
    }

    .description1{
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight:lighter;
        color:#222222;
    }
`;

export const AreaMarcas = styled.div`
    width:100%;
`;

export const Marcas = styled.div`
    width: 990px;
    height:90px;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    

    .marca1{
        width:132.36px;
        height:51.54px
    }

    .marca2{
        width:210.86px;
        height:32.37px
    }

    .marca3{
        width:201.24px;
        height:33.04px
    }

    .marca4{
        width:222.44px;
        height:39.32px
    }
`;

export const Sobre = styled.div`
    width:990px;
    margin: 3% auto;

`;