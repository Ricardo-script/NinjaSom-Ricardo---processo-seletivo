import React from 'react';
import { Address, TextAddress, Logo, AreaLogo  } from './styles';
import econverse from '../../assets/econverse.png';
import vtex from '../../assets/vtex.png';


function Adress(){
    return(
        <Address>
            <TextAddress>
                <span>
                    NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, Todos os direitos reservados.
                    Rua Santa Efigência
                </span>
                <span>
                    556/560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15
                </span>
            </TextAddress>
            <Logo>
                <AreaLogo>
                    <img src={econverse} alt="" />
                    <img src={vtex} alt="" />
                </AreaLogo>
            </Logo>
        </Address>  
    );
}

export default Adress;