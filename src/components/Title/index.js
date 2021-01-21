import React from 'react';
import { Description, TitleOne, TitleTwo } from './styles';

function Title(){
    return(
        <Description>
            <TitleOne>
                <span className="instrumentos">INSTRUMENTOS</span>
                <span className="destaque">DESTAQUE</span>
            </TitleOne>
            <TitleTwo>
                <span className="description">
                    it is a long established fact a reader will be 
                    distracted by the readlable
                </span>
            </TitleTwo>
            
        </Description>
    );
}

export default Title;