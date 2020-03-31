import React from 'react';

import { Container, Title, Body } from './styles';

export default function Window(props) {
    return (
        <Container style={props.style}>
            <Title>
                {props.title}
            </Title>
            <Body>
                {props.children}
            </Body>
        </Container>
    );
}