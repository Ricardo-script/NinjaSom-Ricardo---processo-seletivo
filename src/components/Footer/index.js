import React from 'react';
import { AreaFooter, InfoFooter, One, Two, PartA, PartB, PartC, PartD,
Icons, Titulo, SubTitulo, Cards, CardsSegurança, Form, Talk, AreaTalk,
Name, Baloon, Talktext} from './styles';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';
import card5 from '../../assets/card5.png';
import seg1 from '../../assets/seg1.png';
import seg2 from '../../assets/seg2.png';
import foto from '../../assets/foto.png';
import seta from '../../assets/seta.png';

function Footer(){
    return(
        <AreaFooter>
            <InfoFooter>
                <One>
                    <PartA>
                        <Titulo>INSTITUCIONAL</Titulo>
                        <SubTitulo>QUEM SOMOS</SubTitulo>
                        <SubTitulo>NOSSAS LOJAS</SubTitulo>
                        <Titulo>ATENDIMENTO</Titulo>
                        <SubTitulo>FALE CONOSCO</SubTitulo>
                        <SubTitulo>VENDAS@NINJASOM.COM.BR</SubTitulo>
                    </PartA>
                    <PartB>
                        <Titulo>AJUDA E SUPORTE</Titulo>
                        <SubTitulo>POLÍTICA DE PRIVACIDADE</SubTitulo>
                        <SubTitulo>POLÍTICA DE TROCAS</SubTitulo>
                        <SubTitulo>PRAZO DE ENTREGA</SubTitulo>
                        <SubTitulo>TERMOS DE USO</SubTitulo>
                        <Icons>
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                        </Icons>
                    </PartB>
                </One>
                <Two>
                    <PartC>
                        <Titulo>FORMAS DE PAGAMENTO</Titulo>
                            <Cards>
                                <img src={card1} alt="" />
                                <img src={card2} alt="" />
                                <img src={card3} alt="" />
                                <img src={card4} alt="" />
                                <img src={card5} alt="" />
                            </Cards>
                        <Titulo>SEGURANÇA</Titulo>
                            <CardsSegurança>
                                <img src={seg1} alt="" />
                                <img src={seg2} alt="" />
                            </CardsSegurança>
                    </PartC>
                    <PartD>
                        <Form>
                            <span>ASSINE NOSSO <strong>NEWSLETTER</strong></span>
                            <span>E RECEBA NOVIDADES E PROMOÇÕES</span>
                            <div className="inputForm">
                                <input type="text" placeholder="SEU NOME"/>
                            </div>
                            <div className="inputForm">
                                <input type="text" placeholder="SEU E-MAIL"/><br/>
                            </div>
                            <input type="button" className="button" value="Enviar" />
                        </Form>
                    </PartD>
                </Two>
            </InfoFooter>
            <Talk>
                <AreaTalk>
                    <img src={foto} alt="" />
                        <Name>
                            <span>Felipe Salmim</span>
                            <span style={{fontWeight:'400',fontSize:'10px'}}>Designer</span>
                        </Name>
                        <Baloon>
                            <img src={seta} alt="" />
                            <Talktext>
                                <span>
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum 
                                    as their default model text, and a search for 'lorem ipsum'
                                </span>
                            </Talktext>
                        </Baloon>
                </AreaTalk>
            </Talk>
        </AreaFooter>
    );
}

export default Footer;