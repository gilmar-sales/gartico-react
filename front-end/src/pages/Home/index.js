import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaPlay, FaGripHorizontal, FaUser, FaUserPlus } from 'react-icons/fa';

import { NickSection, AuthSection } from './styles';
import Window from '../../components/Window';

import {ReactComponent as Logo} from '../../icons/logo.svg';

export default function Home(props) {

    return (
        <div className="container" style={{flexDirection: 'column'}}>
            <section className="header">
                <Logo style={{height: 150}}/>
            </section>

            <Window title="Play" style={ { width: '80%' } } >
                
                <div style={{display: 'flex', height: '100%', width: '80%'}}>
                    <NickSection>
                        <label htmlFor="">Select your nick and avatar</label>
                        <FaUserCircle style={{fontSize: 80}} />
                        <input placeholder="Nickname" value={localStorage.getItem('nickname')} />

                        <div className="row">
                            <Link to="/rooms" style={{flex: 1, marginRight: 15}}>
                                <button className="button" ><FaGripHorizontal/> Rooms</button>
                            </Link>

                            <Link to="/play/random" style={{flex: 1}}>
                                <button className="button"> <FaPlay/> Play</button>
                            </Link>
                        </div>
                    </NickSection>

                    <AuthSection>
                        <Link to="/sign-in">
                            <button className="button"><FaUser/>SignIn</button>
                        </Link>
            
                        <Link to="/sign-up">
                            <button className="button"><FaUserPlus/> SignUp</button>
                        </Link>
                    </AuthSection>
                </div>

            </Window>
            
        </div>
    );
}