import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function Login() { //export exporta assim q ele for renderizado
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev"></img>
                <input
                    placeholder="Digite seu usuário do Github"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}