import React from 'react'

import { Container, Title, Body, Footer } from './styles'

export default function Window(props) {
	return (
		<Container style={props.style}>
			<Title>{props.title}</Title>
			<Body>{props.children}</Body>
			<Footer />
		</Container>
	)
}
