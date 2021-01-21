import React, { useState, useEffect } from 'react';
import { VitrineSection, AreaVitrine, AreaCard, Card, Modal, Description, AreaBtn, Btn,
DescriptionText, Lupa, TitleOne, TitleTwo, AreaMarcas, Marcas, Sobre} from './styles';
import { IoSearchCircle } from "react-icons/io5";
import marca1 from '../../assets/marca1.png';
import marca2 from '../../assets/marca2.png';
import marca3 from '../../assets/marca3.png';
import marca4 from '../../assets/marca4.png';
import api from '../../services/api';


function Vitrine(){

    const [ dados, setDados ] = useState({
        products:['']
    });

    useEffect(() => {
        async function lerDados(){
            const response = await api.get('');
            setDados(response.data);
            console.log(response.data);
        }
        lerDados();

    }, []);

  

    return(
        <VitrineSection>
            <AreaVitrine>
                {dados.products.map( item => {
                    return(
                        <AreaCard href="#abrirModal">
                            <Card>
                                <img src={item.photo} alt="" />
                                <Description>
                                    <span className="nomeProduto">{item.productName}</span>
                                    <span className="descricao">{item.descriptionShort}</span>
                                    <span className="valor">R$ {item.price}</span>
                                </Description>
                                <Lupa>
                                    <IoSearchCircle className="lupa"/>
                                    <span className="name">Quick view</span>
                                </Lupa>
                            </Card>
                            <Modal id="abrirModal" className="modal">
                                <div className="quadro">
                                    <a href="#fechar" title="Fechar" className="fechar">X</a>
                                    <img className="imgModal" src={item.photo} alt="" />
                                    <div className="descricaoModal">
                                        <span>{item.productName}</span>
                                        <span className="modalPrice">R$ {item.price}</span>
                                        <span className="modalescription">{item.descriptionShort}</span>
                                        <a className="modalLink" href="/" alt="/">Veja mais detalhes em Produtos </a>
                                        <div className="add">Adicionar ao carrinho</div>
                                    </div>
                                </div>
                            </Modal>
                        </AreaCard>
                    );
                })}
            </AreaVitrine>
            <AreaBtn>
                <Btn>VER MAIS</Btn>
            </AreaBtn>

            <DescriptionText>
                <TitleOne>
                    <span className="instrumentos">AS</span>
                    <span className="destaque">MELHORES</span>
                    <span className="instrumentos">MARCAS</span>
                </TitleOne>
                <TitleTwo>
                    <span className="description">
                        it is a long established fact a reader will be 
                        distracted by the readlable
                    </span>
                </TitleTwo>
            </DescriptionText>
            <AreaMarcas>
                <Marcas>
                    <img className="marca1" src={marca1} alt="" />
                    <img className="marca2" src={marca2} alt="" />
                    <img className="marca3" src={marca3} alt="" />
                    <img className="marca4" src={marca4} alt="" />
                </Marcas>
            </AreaMarcas>
            <DescriptionText>
                <TitleOne>
                    <span className="destaque1">SOBRE NÓS</span>
                </TitleOne>
                <Sobre>
                    <span className="description1">
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using 
                        ‘Content here, content here’, making it look like readable English. Many desktop
                        publishing packages and web page editors now use Lorem Ipsum as their default model
                        text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
                    </span>
                </Sobre>
            </DescriptionText>
        </VitrineSection>
    );
}

export default Vitrine;
