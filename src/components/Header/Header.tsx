import React from 'react'
import { HeaderContainer, Logo, LogoContainer } from './Header.styles'
import LogoSencon from '../../assets/logo-sencon.webp'

const Header = () => {
  return (
    <HeaderContainer>
        <LogoContainer>
            <Logo src={LogoSencon} alt="" />
        </LogoContainer>
    </HeaderContainer>
  )
}

export default Header