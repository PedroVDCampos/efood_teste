import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../style/theme'

const baseButton = `
  padding: 5px;
  width: 82px;
  height: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.secondaryColor};
  border: 2px solid ${theme.colors.secondaryColor};

  &:hover {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
    transition: background-color 0.3s;
  }
`

export const ButtonContainer = styled.button`
  ${baseButton}
`
export const LinkButtonContainer = styled(Link)`
  ${baseButton}
`
