import React, {Component} from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    width: 175px;
    height: 47px;
    padding: 38px 0 22px 467px;
    @media (max-width: 750px){
        position: absolute;
        top: -20px;
        right: 24.5px;
        width: 87.5px;
        height: 23.5px;
        img{
            max-width: 100%;
            height: auto;
        }
    }
`

class Header extends Component {
    render(){
        return (
            <Logo>
                <img src="/img/logo.png" alt="touch by ThyTouch!" />
            </Logo>
        );
    }
}

export default Header;