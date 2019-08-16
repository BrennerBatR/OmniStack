import React from 'react';

import './Main.css';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }) { //dentro do match tenho todos parametros q foram passados para essa rota
    return (
        <div className="main-container">
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/30882359?v=4" alt="" />
                    <footer>
                        <strong>Brenner Batista</strong>
                        <p>Back-end developer</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                            <img src={like} alt="dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/30882359?v=4" alt="" />
                    <footer>
                        <strong>Brenner Batista</strong>
                        <p>Back-end dend developerBack-end developerBack-end deveveloperBack-end developerBack-end developerBack-end developer</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                            <img src={like} alt="dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/30882359?v=4" alt="" />
                    <footer>
                        <strong>Brenner Batista</strong>
                        <p>Back-end developer</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                            <img src={like} alt="dislike" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}