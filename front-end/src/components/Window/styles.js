import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	border-top: 4px ${(props) => props.theme.colors.secondary} solid;
	border-left: 4px ${(props) => props.theme.colors.secondary} solid;
	border-right: 8px ${(props) => props.theme.colors.secondary} solid;
	border-bottom: 8px ${(props) => props.theme.colors.secondary} solid;

	@media (max-width: 992px) {
		width: 80%;
		max-height: 60%;
	}

	@media (min-width: 992px) {
		max-height: 90%;
	}
`

export const Title = styled.div`
	font-size: 34px;
	font-weight: bold;
	text-align: center;
	user-select: none;
	background-color: transparent;
	border-bottom: 4px ${(props) => props.theme.colors.secondary} solid;
`

export const Body = styled.div`
	height: 100%;
	width: 100%;
	overflow: auto;
	padding: 16px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: transparent;
`
export const Footer = styled.div`
	height: 25px;
	background-color: transparent;
	border-top: 2px ${(props) => props.theme.colors.secondary} solid;
`
