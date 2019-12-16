import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    background: #59540a;
    color: white;
    box-shadow: 0px 0px 8px 1px #111111;
`;

const Header = () => {
    return (
        <Nav>
            <h3>Zbornak Zingers</h3>
            {/* <a>Golden Girls Quotes API</a> */}
        </Nav>
    )
}

export default Header