import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as Action from '../../actions';

const Agree = styled.div`
    position: relative;
    background-color: #722d7b;
    border-radius: 10px;
    margin-top: 19px;
    padding: 10px 62px 10px 40px;
    span{
        font-size: 20px;
        color: #fff;
        line-height: 0.2;
    }

    label{
        width: 27px;
        height: 27px;
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 62px;
        border: 2px solid #fff;
        background-color: #722d7b;
        box-sizing: border-box;

        &:after{
            content: '';
            width: 9px;
            height: 9px;
            position: absolute;
            top: 3px;
            left: 5.5px;
            border: 3px solid #fff;
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
        border-radius: 5px;
        margin-top: 9.5px;
        padding: 2.5px 31px 2.5px 20px;
        span{
            font-size: 10px;
            line-height: 3;
        }
        label{
            width: 13.5px;
            height: 13.5px;
            top: 11px;
            right: 31px;
            border: 1px solid #fff;

            &:after{
                width: 4.5px;
                height: 4.5px;
                top: 1.5px;
                left: 2.5px;
                border: 1.5px solid #fff;
                border-top: none;
                border-right: none;
            }
        }
    }

`   

class AgreeBar extends Component{
    render(){
        return(            
            <Agree>
                <span>내용 전체 동의하기</span>
                <input type="checkbox" id="allAgree" name="allAgree" 
                    checked={this.props.subAgree1Checked && this.props.subAgree2Checked}
                    onClick={this.props.setTotalAgreeChecked}/>
                <label name="allagree" htmlFor="allAgree"></label>
            </Agree>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subAgree1Checked: state.subAgree1Checked,
        subAgree2Checked: state.subAgree2Checked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTotalAgreeChecked: () => {dispatch(Action.setTotalAgreeChecked(true))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreeBar);