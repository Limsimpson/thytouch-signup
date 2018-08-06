import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Section from './styles/Section';
import AgreeCheckbox from './styles/AgreeCheckbox';
import ListTable from './styles/ListTable';
import * as Action from '../../actions';

const Transfer = styled.p`
    font-family: 'NotoSansCJKkr-Medium';
    font-size: 11.5px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #4d4d4f;
    line-height: 1;
    text-align: left;
    @media (max-width: 750px){
        font-size: 5.75px;
    }
`
const TransferTable = styled.table`
    font-size: 11.5px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    color: #4d4d4f;
    text-align: center;
    margin: 10px 0;
    th{
        line-height: 2.5;
        background-color: #e2cae2;
    }
    td{
        letter-spacing: -0.5px; 
        line-height: 1;
        background-color: #f2eaf4; 
        padding: 5px;
    }
    @media (max-width: 750px){
        font-size: 5.75px;
        margin: 5px 0;
        td{
            padding: 2.5px;
        }
    }
` 

class Section4 extends Component {
    render(){
        return (
            <Section>
                <h2>4. 개인정보의 이전 (위탁 및 제공)</h2>
                <Transfer>
                    위 제 2조의 개인정보는 제 1조에 기재된 목적 및 기타 아래 기재된 목적을 위하여 아래와 같은 제3자에게 이전
                    (제공 또는/및 위탁)되며, 제 3조와 같은 기간 동안 보유 및 이용됩니다.
                </Transfer>
                <TransferTable>
                    <thead>
                        <tr>
                            <th style={{width: '43%'}}>
                                목적                              
                            </th>
                            <th style={{width: '43%'}}>
                                위임 받는 자/제공받는 자
                            </th>
                            <th style={{width: '14%'}}>
                                형태와 직
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                의약품 안전성 정보 관리 규정에 명시된 약물
                                감시 (Pharmacovigilance) 를 수행하기 위한
                                업무 대행 - 이상사례의 회사의 본사 보고
                                - 이상사례의 의약품안전관리원 보고                                
                            </td>
                            <td>
                                PAREXEL Int’l (IRL) Limited, (DLF Bldg.,
                                Tower D, 3rd Fl., Chandigarh Technology
                                Park Chandigarh, Chandigarh, India
                                160101)
                            </td>
                            <td rowSpan="7">
                                <AgreeCheckbox>
                                    <span>동의</span>
                                    <input type="checkbox" id="transferagree" name="transferagree" 
                                        checked={this.props.subAgree2Checked}
                                        onClick={(e)=>{
                                            this.props.setSubAgree2Checked(e.target.checked);
                                        }}/>
                                    <label name="agree" htmlFor="transferagree"></label>
                                </AgreeCheckbox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                위 제 1조의 목적 사항의 수행을 위한 이전                             
                            </td>
                            <td>
                                회사의 국내외 계열사 (Singapore), IQVIA France,
                                IQVIA Singapore
                            </td>
                        </tr>
                        <tr>
                            <td>
                                회사의 온라인 마케팅 활동 안내 및 동의서 수령                         
                            </td>
                            <td>
                                제품을 공동 판촉하는 회사<br />
                                [동화, 한미, 한독, 화이자, SK케미칼, 보령제약/보령바이오]
                            </td>
                        </tr>
                        <tr>
                            <td>
                                광고 대행사                             
                            </td>
                            <td>
                                Leoburnet, HAVAS, Diamond Ogilvy
                            </td>
                        </tr>
                        <tr>
                            <td>
                                커스텀 리서치, 시장 분석                             
                            </td>
                            <td>
                                Gfk, Kantar Health, QuintilesIMS, IPSOS,<br />
                                Millward Brown, Nielsen, The Research<br />
                                Partnership, CSD Health, Ubcare, CoreZetta
                            </td>
                        </tr>
                        <tr>
                            <td>
                                컨텐츠 개발                             
                            </td>
                            <td>
                                {"INNOBOOST, GROVE, Designleader&\n" + <br /> +
                                "BrandSynergy, TVC, Mccann Health, Springworks"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                사노피 주최 온/오프라인 심포지엄 대행 및 행사 안내                             
                            </td>
                            <td>
                               Mccann Health, Regency Comm,<br />
                               Hanire, IBUS, Webinars
                            </td>
                        </tr>
                    </tbody>
                </TransferTable>
                <ListTable>
                    <tbody>
                        <tr>
                            <td>※</td>
                            <td>
                                위 상기 명단에 포함되지 않은 제3자로써 회사가 추가적으로 귀하의 개인정보를 이전하게 되는 경우가 발생하는
                                경우, 관련 법령에 의거 적절한 방법으로 귀하께 동의를 구하거나 회사의 웹사이트 등에 게시하도록 하겠습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>※</td>
                            <td>
                                관련 법령 및 제약 산업협회 공정경쟁규약에 규정에 의한 국가기관 기타 제약 산업협회 보고의 경우에는 그러한
                                법령 및 규정을 그대로 적용합니다.
                            </td>
                        </tr>
                    </tbody>
                </ListTable>
            </Section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subAgree2Checked: state.subAgree2Checked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSubAgree2Checked: (checked) => {dispatch(Action.setSubAgree2Checked(checked))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section4);