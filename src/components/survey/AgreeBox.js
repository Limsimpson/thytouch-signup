import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as Action from '../../actions';

const FieldSet = styled.fieldset`
    width: 389px;
    border: 0 none;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 0 8px 0;
    box-sizing: border-box;
    &:after{
        display: block;
        content: '';
        clear: both;
        zoom: 1;
    }
    p{
        font-family: 'NotoSansCJKkr-Medium';
        font-size: 16.5px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        color: #4d4d4f;
        line-height: 1.3;
        text-align: center;
    }
    @media (max-width: 750px){
        position: absolute;
        top: 0;
        left: 50%;
        width: 194.5px;
        border: 0 none;
        border-radius: 5px;
        background-color: #fff;
        margin-left: -97.25px;
        Zpadding: 10px 0 4px 0;
        p{
            font-size: 8.25px;
            letter-spacing: -0.35px;
        }
    }
`
const ModalButton = styled.button`
    float: left;
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
    padding: 9px 26px;
    @media (max-width: 750px){
        font-size: 9px;
        padding: 4.5px 13px;
    }
`
const AgreeCheckbox = styled.div`
    padding: 12px 69px;
    background-color: transparent;
    div{
        float: left;
        padding-left: 20px;
        label{
            font-size: 18px;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;
            color: #4d4d4f;
            line-height: 2;
        }

        span{
            display: inline-block;
            position: relative;
            top: 1.5px;
            left: 4px;
            width: 25px;
            height: 25px;
            cursor: pointer;
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
    }
    @media (max-width: 750px){
        padding: 6px 34px;
        div{
            padding-left: 10px;
            span{                
                display: inline-block;
                position: relative;
                top: 2px;
                left: 2px;
                width: 12.5px;
                height: 12.5px;
                cursor: pointer;
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

            label{
                vertical-align: 7px;
                margin-top: -20px;
                font-size: 9px;
                line-height: 0;
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
                    <div>
                        <label name="agree" htmlFor="agree">동의합니다</label>
                        <span>
                        <input type="checkbox" id="agree" name="agree" 
                            checked={this.props.subAgree1Checked && this.props.subAgree2Checked}
                            onClick={this.onClickAgree}
                        />
                        </span>
                    </div>
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