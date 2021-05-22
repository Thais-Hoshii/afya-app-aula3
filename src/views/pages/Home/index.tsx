import React from 'react';

import { Container } from "./styles";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Container>
                <h1>Home</h1>
            </Container>
            <Footer />
        </>
    );
}

export default Home;