import React from 'react';

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import FormSignUp from "../../../components/FormSignUp";

import { SectionComponent } from './styles';

const SignUp: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1>Crie sua conta</h1>
                <FormSignUp />
            </div>
            <Footer />
        </>
    );
}

export default SignUp;