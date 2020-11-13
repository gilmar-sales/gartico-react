import React from 'react'
import Window from '../../components/Window'
import RoomCard from '../../components/RoomCard'

import { Container } from './styles'

export default function Rooms(props) {
	return (
		<div className='container' style={{ flexDirection: 'column' }}>
			<Window title='Rooms'>
				<Container>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
						return (
							<RoomCard key={value} title='Animes' subtitle='Naruto'></RoomCard>
						)
					})}
				</Container>
			</Window>
		</div>
	)
}
