import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import{ ButtonContainer } from '../Styled-Button/Button'
import logo from '../../assets/Navbar/telephone.png'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               {/* <Link to="/" >
                   <img src={logo} alt="logo"  className="navbar-brand"/>
                </Link> */}
                
                     <ul className="navbar-nav align-items-center">
                         <li className="nav-item ml-5">
                             <Link to="/" className="nav-link">
                             products
                             </Link>
                         </li>
                     </ul>

                
                <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    My Cart
                </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
    .nav-link{
        text-transform: capitalize !important;
        font-size: 1.3rem;
        color: var(--mainWhite) important!
    }
`