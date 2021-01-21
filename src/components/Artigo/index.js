import React from 'react';
import { AreaArticle, Article, Description, Btn, AreaBtn, AreaText } from './styles';
import audiopro from '../../assets/audiopro.png';
import instrumento from '../../assets/instrumento.png';

function Artigo(){
    return(
        <AreaArticle>
            <Article>
                <img src={audiopro} alt="" />
                <Description>
                    <AreaText>
                        <span>NOVIDADES</span>
                        <span className="underline"></span>
                        <span className="audio">ÁUDIO</span>
                        <span className="profissional">PROFISSIONAL</span>
                        <AreaBtn>
                            <Btn>CONFIRA</Btn>
                        </AreaBtn>
                    </AreaText>
                </Description>
            </Article>

            <Article>
                <img src={instrumento} alt="" />
                <Description>
                    <AreaText>
                        <span>NOVIDADES</span>
                        <span className="underline"></span>
                        <span className="audio">INSTRUMENTOS</span>
                        <span className="profissional">MUSICAIS</span>
                        <AreaBtn>
                            <Btn>CONFIRA</Btn>
                        </AreaBtn>
                    </AreaText>
                </Description>
            </Article>

        </AreaArticle>
    );
}

export default Artigo;