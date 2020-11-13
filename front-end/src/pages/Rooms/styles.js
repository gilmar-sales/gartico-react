import styled from 'styled-components'

export const Container = styled.section`
	display: grid;
	column-gap: 11px;
	row-gap: 16px;
	padding: 16px;
	background-color: transparent;

	@media (max-width: 600px) {
		grid-template-columns: auto;
	}

	@media (min-width: 600px) {
		grid-template-columns: auto auto;
	}

	@media (min-width: 855px) {
		grid-template-columns: auto auto auto;
	}

	@media (min-width: 992px) {
		grid-template-columns: auto auto auto auto;
	}
`

export const AuthSection = styled.section`
	width: 50%;
`
