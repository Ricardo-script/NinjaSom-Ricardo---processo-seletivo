import React from 'react';
import lock from '../../assets/lock.png';
import linha from '../../assets/linha.png';
import arrow from '../../assets/arrow.png';
import percentage from '../../assets/percentage.png';
import truck from '../../assets/truck.png';
import logo from '../../assets/logo.png';
import lupa from '../../assets/lupa.png';
import zap from '../../assets/zap.png';
import user from '../../assets/user.png';
import poligano from '../../assets/poligano.png';
import car from '../../assets/car.png';
import { HeaderContainer, Head, ItensHeader, HeaderInfo, AreaLupa, AreaFone, 
AreaUser, Users, User, Menu, AreaMenu, Count } from './styles';
       

function Header(){
    return(
        <HeaderContainer>
            <Head>
                <ItensHeader>
                    <span><img src={lock} alt="" />COMPRA 100% SEGURA</span>
                    <img src={linha} alt="" id="linha"/>
                    <span><img src={arrow} alt="" />1ª TROCA GRÁTIS</span>
                    <img src={linha} alt="" id="linha"/>
                    <span><img src={percentage} alt="" />5X SEM JUROS</span>
                    <img src={linha} alt="" id="linha"/>
                    <span><img src={truck} id="truck" alt="" />ENTREGAS EM TODO O BRASIL</span>
                </ItensHeader>
            </Head>
            <HeaderInfo>
                <img src={logo} alt="" />
                <AreaLupa>
                    <input type="text" placeholder="BUSQUE AQUI..."/>
                    <img src={lupa} alt="" />
                </AreaLupa>
                <AreaFone>
                    <img src={zap} alt="" />
                    <span>(11) 9999-9999</span>
                </AreaFone>
                <AreaUser>
                    <img src={user} alt="" />
                    <Users>
                        <User>
                            <span>OLÁ, VISITANTE</span>
                            <img src={poligano} alt="" />
                        </User>
                        <span className="my-count">MINHA CONTA</span>
                    </Users>
                </AreaUser>
            </HeaderInfo>
            <Menu>
                <AreaMenu style={{marginLeft:'8%'}}>
                    <span>TODAS AS CATEGORIAS</span>
                </AreaMenu>
                <AreaMenu>
                    <span>SOM PROFISSIONAL</span>
                    <img src={poligano} alt="" />
                </AreaMenu>
                <AreaMenu>
                    <span>INSTRUMENTOS MUSICAIS</span>
                    <img src={poligano} alt="" />
                </AreaMenu>
                <AreaMenu>
                    <span>PROMOÇÕES</span>
                </AreaMenu>
                <AreaMenu>
                    <span>CONTATO</span>
                </AreaMenu>
            </Menu>
            <Count>
                <img src={car} alt="" />
                <span>SEU CARRINHO</span>
                <span>0 Item  (s)</span>
            </Count>
        </HeaderContainer>        
    );
}

export default Header;