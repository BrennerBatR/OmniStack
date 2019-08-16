import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }) { //dentro do match tenho todos parametros q foram passados para essa rota
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                //aqui sao os headers
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]) //1 parametro -> qual funcao quero executar e segundo aprametro quando quero executar a funcao (no caso toda vez o id do parametro for alterado eu chamo a funcao novamente)

    async function handleLike(id) { //recebe o id do usuario q vou dar o like
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id },
        }) //post = (url, body , headers)
        setUsers(users.filter(user => user._id !== id)); //agora preciso retirar do map o usuario q dei like ou deslike para ele nao aparecer na tela mais
    }

    async function handleDisLike(id) { //recebe o id do usuario q vou dar o like
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id },
        }) //post = (url, body , headers)
        setUsers(users.filter(user => user._id !== id)); //agora preciso retirar do map o usuario q dei like ou deslike para ele nao aparecer na tela mais
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDisLike(user._id)}>
                                    <img src={dislike} alt="dislike" />
                                </button>
                                <button type="button" onClick={() => handleLike(user._id)}>

                                    <img src={like} alt="dislike" />
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                    <div className="empty"> Acabou :( </div>
                )}

        </div>
    )
}