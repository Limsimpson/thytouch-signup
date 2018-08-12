import React, {Component} from 'react';
import styled from 'styled-components';
import Section from './styles/Section';

const Period = styled.p`  
    font-family: 'NotoSansCJKkr-Medium';
    font-size: 11.5px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #4d4d4f;
    line-height: 1.09;
    text-align: left;
    margin-top: 3px;
    @media (max-width: 750px){
        font-size: 5.75px;
        margin-top: 1.5px;
    }
`

export default class extends Component {
    render(){
        return (
            <Section>        
                <h3>3. 개인정보의 보유 및 이용기간</h3>
                <Period>
                   상술한 개인정보의 수집 목적이 달성된 때, 기타 귀하에게 상술한 수집 목적의 활동을 향후 제공하지 않기로
                   결정하는 경우 회사는 귀하의 개인정보를 지체 없이 파기합니다. 단, 관련 법령 또는 제약 산업협회의 공정경쟁규약,
                   회사의 정책에 의하여 추가로 귀하의 개인 정보를 보존할 필요가 있는 경우, 개인정보 보유 목적이 종료한 이후에도
                   회사는 그러한 일정한 기간 동안 개인정보를 보관합니다.
                </Period>
            </Section>
        );
    }
}
