import React from 'react';
import { useHistory } from 'react-router-dom';

import Window from '../../components/Window';

export default function SignIn(props) {
    const history = useHistory();

    function signOut() {
        localStorage.removeItem('id');
        localStorage.removeItem('nickname');
    
        setTimeout(() => history.push('/'), 800) 
    }

    return (
        <div className="container">
            <Window title="SignOut">
                <h2>
                    Sign out successfuly!
                </h2>
            </Window>
            { signOut() }
        </div>
    );
}