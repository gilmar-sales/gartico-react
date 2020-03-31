import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    border-radius: 16px;
    overflow: auto;
    border-top: 4px ${props => props.theme.colors.secondary} solid;
    border-left: 4px ${props => props.theme.colors.secondary} solid;
    border-right: 8px ${props => props.theme.colors.secondary} solid;
    border-bottom: 8px ${props => props.theme.colors.secondary} solid;
    
    @media (max-width: 992px) {
      width: 80%;
    }
  
    @media (min-width: 992px) {
        width: 500;
    }
`;

export const Title = styled.div`
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    user-select: none;
`;

export const Body = styled.div`
    height: 100%;
    min-height: 250px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;