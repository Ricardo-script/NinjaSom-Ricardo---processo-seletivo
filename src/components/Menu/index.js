import React from 'react';
import { AreaMenu, AreaItens, Item } from './styles';
import guitarra from '../../assets/guitarra.png';
import microfone from '../../assets/microfone.png';
import mesa from '../../assets/mesa.png';
import teclado from '../../assets/teclado.png';
import violao from '../../assets/violao.png';
import bateria from '../../assets/bateria.png';


function Menu(){
    return(
        <AreaMenu>
            <AreaItens>
                <Item>
                    <img src={guitarra} alt="" />
                    <legend>GUITARRAS</legend>
                </Item>
                <Item>
                    <img src={microfone} alt="" />
                    <legend>MICROFONES</legend>
                </Item>
                <Item>
                    <img src={mesa} alt="" />
                    <legend>MESA DE SOM</legend>
                </Item>
                <Item>
                    <img src={teclado} alt="" />
                    <legend>TECLADOS</legend>
                </Item>
                <Item>
                    <img src={violao} alt="" />
                    <legend>VIOLAO</legend>
                </Item>
                <Item>
                    <img src={bateria} alt="" />
                    <legend>BATERIAS</legend>
                </Item>
            </AreaItens>
        </AreaMenu>
    );
}

export default Menu;