import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as Action from '../../actions';

const FieldSet = styled.fieldset`
    border: 0 none;
    border-radius: 10px;
    background-color: #fff;
    padding: 17px 0 20px;
    p{
        font-family: 'NotoSansCJKkr-Medium';
        font-size: 16.5px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: -0.7px;
        color: #4d4d4f;
        line-height: 1.3;
        text-align: center;
    }
    @media (max-width: 750px){
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -97.25px;
        border: 0 none;
        border-radius: 5px;
        background-color: #fff;   
        width: 194.5px;
        padding: 0 none;
        p{
            font-size: 8.25px;
            letter-spacing: -0.35px;
        }
    }
`
const ModalButton = styled.button`
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    cursor: pointer;
    color: #fff;
    line-height: 1;
    text-align: left;
    border: 0 none;
    background-color: #92278f;
    margin-left: 76px;
    padding: 9px 26px;
    @media (max-width: 750px){
        font-size: 9px;
        margin-top: 6px;
        margin-left: 0;
        padding: 4.5px 13px;
    }
`
const AgreeCheckbox = styled.div`
    position: relative;
    top: 12px;
    padding-bottom: 14px;
    background-color: transparent;
    span{
        font-size: 18px;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #4d4d4f;
        line-height: 1;
        text-align: left;
        padding-left: 10px;
    }

    label{
        width: 25px;
        height: 25px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        left: 290px;
        border: 1px solid #92278f;
        box-sizing: border-box;

        &:after{
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            top: 2px;
            left: 5.5px;
            border: 3px solid #92278f;
            border-top: none;
            border-right: none;
            background: transparent;
            opacity: 0;
            transform: rotate(-45deg);
        }
        &:hover:after{
            opacity: 0.3;
        }
    }

    input[type=checkbox]{
        visibility: hidden;
        
        &:checked + label:after, &:focus + label:after {
            opacity: 1;
        }
    }
    @media (max-width: 750px){
        top: 6px;
        padding-bottom: 7px;
        span{
            font-size: 9px;
            padding-left: 8px;
        }

        label{
            width: 12.5px;
            height: 12.5px;
            cursor: pointer;
            position: absolute;
            top: 9px;
            left: 155px;
            border: 0.5px solid #92278f;
            box-sizing: border-box;

            &:after{
                content: '';
                width: 5px;
                height: 5px;
                position: absolute;
                top: 1px;
                left: 2.75px;
                border: 1.5px solid #92278f;
                border-top: none;
                border-right: none;
                background: transparent;
                opacity: 0;
                transform: rotate(-45deg);
            }
            &:hover:after{
                opacity: 0.3;
            }
        }
    }
`

class AgreeBox extends Component{
    onClickAgree = (e) => {
        if (!this.props.agreeModalChecked){
            alert('동의서를 읽은 후에 동의가 가능합니다.')
        } else {
            this.props.setTotalAgreeChecked(e.target.checked)
        }
    }

    render(){
        return(
            <FieldSet>
                <p>[개인정보 수집 및 이용에 관한 동의서]</p>     
                <AgreeCheckbox>
                    <ModalButton onClick={(e)=>{
                        e.preventDefault();
                        this.props.openAgreeModal();
                    }}>내용보기</ModalButton>      
                    <span>동의합니다</span>
                    <input type="checkbox" id="agree" name="agree" 
                        checked={this.props.subAgree1Checked && this.props.subAgree2Checked}
                        onClick={this.onClickAgree}/>
                    <label name="agree" htmlFor="agree"></label>
                </AgreeCheckbox>
            </FieldSet>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        agreeModalChecked: state.agreeModalChecked,
        subAgree1Checked: state.subAgree1Checked,
        subAgree2Checked: state.subAgree2Checked,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAgreeModal: () => {dispatch(Action.setAgreeModalOpened(true))},
        setTotalAgreeChecked: (checked) => {dispatch(Action.setTotalAgreeChecked(checked))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreeBox);