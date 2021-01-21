import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Capa from '../../components/Capa';
import Menu from '../../components/Menu';
import Artigo from '../../components/Artigo';
import Title from '../../components/Title';
import Vitrine from '../../components/Vitrine';
import Footer from '../../components/Footer';
import Adress from '../../components/Adress';

function Home(){
    return(
        <Container>
            <Header />
            <Capa />
            <Menu />
            <Artigo />
            <Title />
            <Vitrine />
            <Footer />
            <Adress />
        </Container>
    );
}

export default Home;