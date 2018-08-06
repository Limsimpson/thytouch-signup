import React, {Component} from 'react';
import styled from 'styled-components';
import Section from './styles/Section';
import ListTable from './styles/ListTable';

const Disclaimer = styled.p`
    font-family: 'NotoSansCJKkr-Medium';
    font-size: 12.5px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.6px;
    color: #4d4d4f;
    line-height: 1;
    text-align: left;
    padding: 8px 0 10px;
    @media (max-width: 750px){        
        font-size: 6.25px;
        padding: 4px 0 5px;
    }
`;


class Section1 extends Component {
    render(){
        return (
            <Section>
                <h2>1. 개인정보의 수집 • 이용 목적</h2>
                <Disclaimer>
                    주식회사 사노피-아벤티스 코리아 (이하, “회사”)가 귀하의 개인정보를 수집 및 이용하는 목적은 다음과
                    같습니다. 귀하께서 제공하시는 개인정보는 아래 목적 이외의 다른 목적으로 사용되지 않음을 알려 드립니다.
                </Disclaimer>
                <ListTable>
                    <tbody>
                        <tr>
                            <td>①</td>
                            <td>
                                전화, 이메일, SMS, 우편, 웹사이트, 모바일 앱 등 다양한 온라인 및 오프라인 채널 (“다양한 채널”)을 이용한,
                                온라인 및 오프라인 제품설명회를 포함한 보건의료전문가를 대상으로 하는 마케팅 및 영업, 기타 학술 행사,
                                프로그램, 기타 교류 활동 등에 대한 초청, 안내 및 초대장 발송, 알림 서비스 제공 등의 제반 관련 활동 수행과
                                그 기록 및 사용
                            </td>
                        </tr>
                        <tr>
                            <td>②</td>
                            <td>
                                다양한 채널을 통한 회사 제품을 포함한 의약학적 정보 전달 및 귀하가 회사에 제공하는 관련 정보 및 의견의 취득
                                활동 수행 및 그 이용과 기록
                            </td>
                        </tr>
                        <tr>
                            <td>③</td>
                            <td>다양한 채널을 통한 기타 영업 및 마케팅, 학술 정보의 수집, 전달 및 통계 산출 및 이용</td>                         
                        </tr>
                        <tr>
                            <td>④</td>
                            <td>다양한 채널을 통한 의약학 정보 문의 및 제보, 의견 사항에 대한 처리 및 기록</td>                         
                        </tr>
                        <tr>
                            <td>⑤</td>
                            <td>의약학 등 정보 문의 사항 대응 및 귀하의 다양한 채널의 이용에 대한 통계 산출 및 분석</td>                         
                        </tr>
                        <tr>
                            <td>⑥</td>
                            <td>
                                회사가 필요로 하는 강연, 좌장 및 자문 등 서비스 제공자의 검색, 검토 및 서비스 의뢰와 계약의 체결, 이행 및 그
                                기록 및 기타 관련 제반 활동.
                            </td>
                        </tr>
                        <tr>
                            <td>⑦</td>
                            <td>
                                회사가 상기 목적의 업무를 수행하면서 관련 법령 및 제약 산업협회 (한국글로벌의약산업협회를 포함하나 이에
                                한하지 아니함)의 공정경쟁규약, 회사의 제반 규정에 의하여 귀하에게 제공하게 되는 여하의 경제적 이익의 기록
                                및 증빙 구비, 통계, 기타 자료의 작성. 관련 법령 및 제약 산업협회 공정경쟁규약에 의하여 이러한 사항 및 자료를
                                보건복지부 또는 제약 산업협회 보고해야 하는 경우 이와 관련 모든 제반 업무
                            </td>
                        </tr>
                        <tr>
                            <td>⑧</td>
                            <td>의약품 안전성 정보 관리 규정에 명시된 약물 감시(Pharmacovigilance) 및 이에 대한 정보 수령과 보고</td>                        
                        </tr>
                        <tr>
                            <td>⑨</td>
                            <td>상기 서술된 모든 목적 사항의 수행과 관련한 모든 활동</td>                         
                        </tr>
                    </tbody>
                </ListTable>
            </Section>
        )
    }
}

export default Section1;