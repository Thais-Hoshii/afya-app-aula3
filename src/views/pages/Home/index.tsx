import React from 'react';

import { SectionComponent } from "./styles";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <SectionComponent>
                    <h1>Home</h1>
                </SectionComponent>
            </div>
            <Footer />
        </>
    );
}

export default Home;