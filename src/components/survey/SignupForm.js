import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import AgreeBox from './AgreeBox';
import SignaturePad from './SignaturePad';

import {signup} from '../../api';
import {b64toBlob} from '../../utils';

const Form = styled.form`
    padding: 0 45px 0 75px;
    ul{
        margin: 0 auto;
        li{
            position: relative;
            list-style: none;
            &:before{
                position: absolute;
                top: 12px;
                left: -30px;
                width: 20px;
                height: 26px;
                content:'';
                display:block;
                background: url(/img/ico_form.png) no-repeat;
                background-size: cover;
            }
            border-bottom: 1px solid #722d7b;
            margin-top: 70px;

            &.inputFlex{                          /* 이름, 부서, 이메일, 핸드폰 디자인 */
                display: flex;
                label{
                    width: 35%;
                    font-size: 31px;
                    list-style: none;
                    text-align: left;
                    color: #722d7b;
                }
                input{
                    width: 70%;
                    font-size: 20px;
                    border: 0 none;
                    height: 45.6px;
                    background-color: transparent;
                    box-shadow: none;
                }
            }
            &.firstName{                            /* 이름 디자인 */
                margin-top: 50px;
                label{
                    letter-spacing: -3.5px;
                }
            }
            &.department, &.eMail, &.phone{         /* 부서, 이메일, 핸드폰 디자인*/
                label{
                    letter-spacing: 9.8px;
                }
            }
            &.modal{                                /* 동의서 박스 디자인 */
                border-bottom: 0 none; 
                margin-top: 54px;
                &:before{
                    display: none;
                }
            }
            &.sign{                                 /* 서명 패드 디자인 */
                border-bottom: 0 none;
                margin: 36px 0 60px;
                label{                    
                    letter-spacing: 25.0px;
                }
            }

            label{                                  /* 전체 label 공통 디자인 */
                font-size: 31px;
                list-style: none;
                color: #722d7b;
            }
        }
    }

    @media (max-width: 750px){
        padding: 0 22.5px 0 37.5px;
        ul{
            li{
                border-bottom: 0.5px solid #722d7b;
                margin-top: 35px;
                &:before{
                    top: 6px;
                    left: -15px;
                    width: 10px;
                    height: 13px;
                }
                &.inputFlex{                          /* 이름, 부서, 이메일, 핸드폰 디자인 */
                    label{
                        font-size: 15.5px;
                    }
                    input{
                        font-size: 10px;
                        border: 0 none;
                        height: 22.8px;
                    }
                }
                &.firstName{                            /* 이름 디자인 */
                    margin-top: 25px;
                    label{                        
                        letter-spacing: -1.75px;
                    }
                }
                &.department, &.eMail, &.phone{         /* 부서, 이메일, 핸드폰 디자인*/
                    label{                        
                        letter-spacing: 4.9px;
                    }
                }
                &.modal{                                /* 동의서 박스 디자인 */
                    position: relative;
                    text-align: center;
                    margin-top: 27px;
                    margin-bottom: 26px;
                }
                &.sign{                                 /* 서명 패드 디자인 */                    
                    margin: 115px 0 30px;
                    label{
                        letter-spacing: 12.5px;
                    }
                }
                label{                                  /* 전체 label 공통 디자인 */
                    font-size: 15.5px;
                }
            }
        }
    }
`

const Button = styled.button` /* Submit Button */
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -94.5px;
    font-size: 22.5px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.1;
    letter-spacing: -1px;
    color: #ffffff;
    cursor: pointer;
    border: 0 none;
    border-radius: 10px;
    width: 189px;
    background-color: #92278f;
    @media (max-width: 750px){
        bottom: -10px;
        left: 50%;
        margin-left: -47.25px;
        font-size: 11.25px;
        font-weight: 500;
        border: 0 none;
        border-radius: 5px;
        width: 94.5px;
        background-color: #92278f;        
    }
`

class SignupForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {subAgree1Checked, subAgree2Checked} = this.props;
        if (!subAgree1Checked || !subAgree2Checked){
            alert('개인정보 수집 및 이용에 동의해 주세요.')
            return;
        }

        if (this.refs.sig.isEmpty()){
            alert('서명을 작성해 주세요.')
            return;
        }

        const formData = new FormData();
        formData.append('lastName', e.target[0].value);
        formData.append('firstName', e.target[1].value);
        formData.append('hospital', e.target[2].value);
        formData.append('specialty', e.target[3].value);
        formData.append('email', e.target[4].value);
        formData.append('phone', e.target[5].value);
        formData.append('signature', b64toBlob(this.refs.sig.toDataURL(), 'image/png'));
        console.log(formData);

        signup(formData)
            .then(resp => {
                console.log(resp);
                alert('선생님의 정보가 성공적으로 등록 완료되었습니다.')
            })
            .catch(e => {
                console.log(e);
                if (!!e.response.data && e.response.data.message.match(/duplicate/g)){
                    alert('이미 등록된 이메일입니다.')
                } else {
                    alert('선생님의 정보를 등록하는 도중에 에러가 발생하였습니다.')
                }
            })
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <ul>
                    <li className="inputFlex lastName">
                        <label htmlFor="lastName">성  (한글)</label>
                        <input type="text" title="이름" required/>
                    </li>
                    <li className="inputFlex firstName">
                        <label htmlFor="firstName">이름(한글)</label>
                        <input type="text" title="이름" required/>
                    </li>
                    <li className="inputFlex">
                        <label htmlFor="company">소속기관</label>
                        <input type="text" title="소속기관" required/>
                    </li>
                    <li className="inputFlex department">
                        <label htmlFor="department">근무과</label>
                        <input type="text" title="근무과" required/>
                        </li>
                    <li className="inputFlex eMail">
                        <label htmlFor="email">이메일</label>
                        <input type="email" required />
                    </li>
                    <li className="inputFlex phone">
                        <label htmlFor="phone">휴대폰</label>
                        <input type="tel" required />
                    </li>
                    <li  className="modal">
                        <AgreeBox />
                    </li>
                    <li className="sign">
                        <label htmlFor="sign">서명</label>
                        <SignaturePad ref="sig"/>
                    </li>
                </ul>
                <Button type="submit">SUBMIT</Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subAgree1Checked: state.subAgree1Checked,
        subAgree2Checked: state.subAgree2Checked,
    }
}

export default connect(mapStateToProps, null)(SignupForm);