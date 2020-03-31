import React from 'react';
import { Link } from 'react-router-dom';

import Window from '../../components/Window';

export default function SignUp(props) {
    return (
        <div className="container">

            <Window title="SignUp">
                <form>
                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="email" name="email" placeholder="E-mail" required/>
                    <div className="row">
                        <input type="password" name="password" placeholder="Password" style={{marginRight: 15}} required/>
                        <input type="password" name="confirm_password" placeholder="Confirm Password" required/>
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