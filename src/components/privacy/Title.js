import React, {Component} from 'react';
import styled from 'styled-components';
import BorderTable from '../BorderTable';

const TitleFont = styled.h2`
    font-size: 31.5px;
    letter-spacing: -3px;
    color: #92278f;
    line-height: 1.2;
    text-align: center;
    padding: 15px 0;

    @media (max-width: 750px) {
        font-size: 15.75px;
        letter-spacing: -2px;
    }
`

class Title extends Component {
    render(){
        return (
            <BorderTable>
                <TitleFont>
                    [개인정보 수집 및 이용에 관한 동의서]
                </TitleFont>
            </BorderTable>
        );
    }
}

export default Title;