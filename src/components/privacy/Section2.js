import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Section from './styles/Section';
import AgreeCheckbox from './styles/AgreeCheckbox';
import ListTable from './styles/ListTable';
import * as Action from '../../actions';

const Table = styled.table`
    margin-top: 5px;
    border-collapse: collapse;
    td{
        font-size: 11.5px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: -0.9px;
        color: #4d4d4f;
        line-height: 1;
        text-align: center;
        vertical-align: center;
        background-color: #f2eaf4;
        border: 0.6px solid #fff;
        box-sizing: border-box;
    }
    label{
        top: 1px;
        right: 20px;

        &:after{
            top: 2px;
            left: 3.5px;
        }
    }

    @media(max-width: 750px){
        margin-top: 2.5px;
        td{
            font-size: 5.75px;            
            border: 0.3px solid #fff;
        }
        label{
            top: 5px;
            right: 10px;

            &:after{
                top: 1.5px;
                left: 2px;
            }
        }
    }
`

class Section2 extends Component {
    render(){
        return (
            <Section>
                <h2>2. 수집하는 개인정보의 항목</h2>
                <Table>
                    <tbody>
                        <tr>
                            <td style={{width: '17%'}}>
                                개인정보
                            </td>
                            <td style={{padding: '12px 8px 9px 16px'}}>
                                이메일, 비밀번호, 휴대전화번호, 한글 및 영문 이름, 전공과목, 소속 병의원명,
                                근무형태와 직급/직책, 병의원주소, 병의원 전화번호, 학력 및 경력정보,
                                병의원을 제외한 소속기관이 있는 경우 이에 관한 정보
                            </td>
                            <td style={{width: '17%'}}>
                                <AgreeCheckbox>
                                    <span>동의</span>
                                    <input type="checkbox" id="personalInfo" name="personalInfo" 
                                        checked={this.props.subAgree1Checked} 
                                        onClick={(e)=>{
                                            this.props.setSubAgree1Checked(e.target.checked);
                                        }}/>
                                    <label name="personalInfo" htmlFor="personalInfo"></label>
                                </AgreeCheckbox>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <ListTable>
                    <tbody>
                        <tr>
                            <td>
                                ※
                            </td>
                            <td>
                                귀하는 개인정보 수집에 대한 동의를 거부할 수 있으나, 동의하지 않을 경우에는 회사가 제공하는 위 목적
                                서비스의 이용이 제한될 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ※
                            </td>
                            <td>
                                기타 회사는 귀하가 자발적으로 제공하는 다른 정보에 대한 수집을 할 수 있습니다.
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
        subAgree1Checked: state.subAgree1Checked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSubAgree1Checked: (checked) => {dispatch(Action.setSubAgree1Checked(checked))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section2);
