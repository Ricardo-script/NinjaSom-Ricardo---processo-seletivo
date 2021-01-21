import styled from 'styled-components';


export const HeaderContainer = styled.header`
    
`;

export const Head = styled.div`
   background-color: #041e50;
`;

export const ItensHeader = styled.div`  
    width: 1002px;
    margin: 0 auto;
    height: 37px;
    display: flex;
    align-items:center;
    justify-content:space-between;   

    span {
        color: #fff;
        font-family: "Lato", sans-serif;
        font-size: 10px;
        display: flex;
        align-items: center;
        margin-right:20px;
    }

    img {
        width: 17.11px;
        height: 21px;
        margin: 0 9px 0 0;
    }

    #linha{
        width:1px;
        height:17px;
    }

    #truck{
        width:24.22px;
        height:17.57px;
    }
`;

export const HeaderInfo = styled.div`
    width: 100%;
    height:75px;
    border-bottom: 1px solid #C6C6C6;
    display:flex;
    align-items:center;

    img{
        margin-left:138px;
    }    
`;

export const AreaLupa = styled.div`
    width:340px;
    height:41px;
    border:1px solid #041E50;
    border-radius:5px;
    margin-left:40px;
    display:flex;
    align-items:center;
   
    
    input{
        width:305px;
        height:32px;
        outline:0;
        border:none;
        font-size:10px;
        text-indent:12px;
        color:#041E50;
    }

    img{
        width:24px;
        height:24px;
        margin:0 7px 0 10px;
        cursor: pointer;
    }
    
`;

export const AreaFone = styled.div`
    width: 200px;
    height: 29px;
    margin-left:46px;
    display:flex;
    align-items:center;
    
    img{
        width:27px;
        height:27px;
        margin: 0 5% 0 0px; 
    }

    span{
        font-family: "Lato", sans-serif;
        font-size: 10px;
        font-weight:bold;
        color:#041E50;
    }
`;

export const AreaUser = styled.div`
    width:150.54px;
    height:23.09px;
    display:flex;

    img{
        width:25px;
        height:25px;
        margin-left: -50px;
    }
`;

export const Users = styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    margin:0 5% 0 5px;
    
    span{
        font-family: "Lato", sans-serif;
        font-size: 10px;
        color:#041E50;
        font-weight:bold;
    }

    .my-count{
        font-size: 7px;
    }
`;

export const User = styled.div`
    display:flex;
    
    img{
        width:8px;
        height:8px;
        cursor: pointer;
        margin: 3% 0 0 5px;
    }
`;

export const Menu = styled.div`
    width:100%;
    margin:0 auto;
    height:42px;
    display:flex;
    align-items:center;

    span{
        font-family: "Lato", sans-serif;
        font-size: 10px;
        color:#041E50;
        font-weight:bold;
    } 
`;

export const AreaMenu = styled.div`

    width:190px;
    text-align:center;
    cursor: pointer;

    img{
        width:7px;
        height:7px;
        margin: 3% 0 0 1%;
        cursor: pointer;
    } 

    span{
        width:400px;
    }

`;

export const Count = styled.div`
    background-color:#041E50;
    width:77px;
    height:104px;
    position:relative;
    z-index:1;
    margin: -118px 140px 0 1047px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    img{
        width:30%;
        padding:3%;
    }

    span{
        font-family: "Lato", sans-serif;
        font-size: 9px;
        font-weight:bold;
        color:#FFF;
        padding:3%;
    }
`;


