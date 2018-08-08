import React, {Component} from 'react';
import styled from 'styled-components';
import BorderTable from '../BorderTable';

const TitleFont = styled.h1`
    font-size: 31.5px;
    letter-spacing: -3px;
    color: #92278f;
    line-height: 1.2;
    text-align: center;
    padding: 15px 0;

    @media (max-width: 750px) {
        font-size: 15.75px;
        letter-spacing: -1.5px;
    }
`

class Title extends Component {
    render(){
        return (
            <BorderTable>
                <TitleFont>
                    선생님께 Survey를 전송 드릴 수 있도록<br />아래 정보를 기입 부탁드립니다
                </TitleFont>
            </BorderTable>
        );
    }
}

export default Title;