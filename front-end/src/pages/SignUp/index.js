import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Window from '../../components/Window';

export default function SignUp(props) {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    function handleSignUp(e)  {
        e.preventDefault();

        if(password !== confirmPassword) {
            return alert('Senhas não coincidem!');
        }

        const body = {
            username,
            password,
            nickname,
            email
        }

        api.post('/user', body)
        .then((response) => {
            if(response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('nickname', nickname);
                history.push('/');
            }
        })
        .catch(response => {
            alert(response);
        });
    }

    return (
        <div className="container">

            <Window title="SignUp">
                <form onSubmit={handleSignUp}>
                    <input type="text" name="username" placeholder="Username" required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                    <input type="text" name="nickname" placeholder="Nickname" required
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    />
                    <input type="email" name="email" placeholder="E-mail" required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <div className="row">
                        <input type="password" name="password" placeholder="Password" style={{marginRight: 15}} required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <input type="password" name="confirm_password" placeholder="Confirm Password" required
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="row">
                    <input className="button" type="submit" value="SignUp" style={{marginRight: 15}} />

                    <Link to="/">
                        <button className="button" >Back</button>
                    </Link>
                    </div>
                </form>
            </Window>
        </div>
    );
}