import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Window from '../../components/Window';

export default function SignIn(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleSignIn(e) {
        e.preventDefault();

        const body = {
            username,
            password
        }

        api.post('/user_auth', body)
        .then((response) => {
            if(response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('nickname', response.data.nickname);
                history.push('/');
            }
        })
        .catch(response => {
            alert(response);
        });

    }

    return (
        <div className="container">

            <Window title="SignIn">
                <form onSubmit={handleSignIn}>
                    <input type="text" name="username" placeholder="Username" required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />

                    <input type="password" name="password" placeholder="Password" required  
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <div className="row">
                    <input className="button" type="submit" value="SignIn" style={{marginRight: 15}} />

                    <Link to="/">
                        <button className="button" >Back</button>
                    </Link>
                    </div>
                </form>
            </Window>
        </div>
    );
}