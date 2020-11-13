import React from 'react'

import {
	Card,
	CardTitle,
	Category,
	Subcategory,
	Content,
	Label,
} from './styles'

export default function RoomCard(props) {
	return (
		<Card style={props.style}>
			<CardTitle>
				<Subcategory>{props.subtitle}</Subcategory>
				<Category>{props.title}</Category>
			</CardTitle>
			<Content>
				<Label>0/10 Jogando</Label>
				<button className='button'>Entrar</button>
			</Content>
		</Card>
	)
}
