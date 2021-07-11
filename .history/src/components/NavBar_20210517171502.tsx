import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <ul>
                <li>
                    <Link to='/'>
                     Home   
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                        About
                    </Link>         
                </li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    position: absolute;
    top:0;
    left:0;
    background-color:#262626;
    width:100%;
`;



export default NavBar;