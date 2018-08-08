import React, {Component} from 'react';
import styled from 'styled-components';

const FootLogo = styled.div`
    margin-top: 57px;
    margin-bottom: 34px;
    img{
        &.leftLogo{
            width: 218px;
            height: 26px;
        }
        &.rightLogo{
            width: 147px;
            height: 35px;
            padding-left: 229px;
        }
    }
    @media (max-width: 750px){
        position: relative;
        margin-top: 40px;
        margin-bottom: 0;
        img{
            position: absolute;
            max-width: 100%;
            height: auto;
            &.leftLogo{
                bottom: 0;
                left: 0;
                width: 109px;
                height: 13px;              
            }
            &.rightLogo{
                bottom: 0;
                right: 0;
                width: 73.5px;
                height: 17.5px;
                padding-left: 0;
            }
        }
    }
`

class Footer extends Component {
    render(){
        return (
            <FootLogo>
                <img src="/img/ft_left_logo.png" alt="SANOFI GENZYME" className="leftLogo"/>
                <img src="/img/ft_right_logo.png" alt="Thyrogen thyrotropin alfa for injection" className="rightLogo"/>
            </FootLogo>
        );
    }
}

export default Footer;