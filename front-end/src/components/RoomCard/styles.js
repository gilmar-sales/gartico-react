import styled from 'styled-components'

export const Card = styled.div`
	width: 100%;
	border-radius: 16px;
	border-top: 4px ${(props) => props.theme.colors.secondary} solid;
	border-left: 4px ${(props) => props.theme.colors.secondary} solid;
	border-right: 8px ${(props) => props.theme.colors.secondary} solid;
	border-bottom: 8px ${(props) => props.theme.colors.secondary} solid;
`

export const CardTitle = styled.div`
	display: flex;
	width: 100%;
	height: 50px;
	flex-direction: row;
	padding: 16px;
	align-items: flex-end;
	justify-content: space-between;
	background-color: transparent;
`
export const Category = styled.div`
	font-size: 18px;
	text-align: center;
	user-select: none;
	opacity: 70%;
	background-color: transparent;
`
export const Subcategory = styled.div`
	font-size: 28px;
	font-weight: bold;
	text-align: start;
	user-select: none;
`

export const Content = styled.div`
	height: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: transparent;
`

export const Label = styled.div`
	font-size: 14px;
	text-align: center;
	user-select: none;
	margin-bottom: 16px;
	background-color: transparent;
`
