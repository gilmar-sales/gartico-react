import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
	FaUserCircle,
	FaPlay,
	FaGripHorizontal,
	FaUser,
	FaUserPlus,
} from 'react-icons/fa'

import { NickSection, AuthSection } from './styles'
import Window from '../../components/Window'

import { ReactComponent as Logo } from '../../icons/logo.svg'

export default function Home(props) {
	const [nickname, setNickname] = useState(
		localStorage.getItem('nickname') ? localStorage.getItem('nickname') : ''
	)

	const renderAuthButton = () => {
		if (localStorage.getItem('id')) {
			return (
				<Link to='/sign-out'>
					<button className='button'>
						<FaUser />
						SignOut
					</button>
				</Link>
			)
		} else {
			return (
				<div>
					<Link to='/sign-in'>
						<button className='button'>
							<FaUser />
							SignIn
						</button>
					</Link>

					<Link to='/sign-up'>
						<button className='button'>
							<FaUserPlus /> SignUp
						</button>
					</Link>
				</div>
			)
		}
	}

	return (
		<div className='container' style={{ flexDirection: 'column' }}>
			<section className='header'>
				<Logo style={{ height: 150 }} />
			</section>

			<Window title='Play' style={{ width: '80%' }}>
				<div style={{ display: 'flex', height: '100%' }}>
					<NickSection>
						<label htmlFor=''>Select your nick and avatar</label>
						<FaUserCircle style={{ fontSize: 80 }} />
						<input
							placeholder='Nickname'
							value={nickname}
							onChange={(e) => setNickname(e.target.value)}
						/>

						<div className='row'>
							<Link to='/rooms' style={{ flex: 1 }}>
								<button className='button'>
									<FaGripHorizontal /> Rooms
								</button>
							</Link>

							<Link to='/play/random' style={{ flex: 1 }}>
								<button className='button'>
									{' '}
									<FaPlay /> Play
								</button>
							</Link>
						</div>
					</NickSection>

					<AuthSection>{renderAuthButton()}</AuthSection>
				</div>
			</Window>
		</div>
	)
}
