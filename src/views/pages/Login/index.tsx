import React from 'react';
import { SectionComponent } from './styles';

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import FormSignIn from "../../../components/FormSignIn";

const Login: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <SectionComponent>
                    <h1>Login</h1>
                    <FormSignIn />
                </SectionComponent>
            </div>
            <Footer />
        </>
    );
}

export default Login;