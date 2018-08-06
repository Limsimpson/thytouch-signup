import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Title from './Title';
import AgreeBar from './AgreeBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import * as Action from '../../actions';

/*
const Title = styled.div`
    border-radius: 10px;
    border: 2px solid #92278f;
    margin: 0 auto 21px;
    padding: 15.1px 0;
    background-color: transparent;
    box-sizing: border-box;

    h1 {
        font-size: 33px;
        color: #92278f;
        font-stretch: normal;
        text-align: center;
        letter-spacing: normal;
        line-height: 1;
        margin: 0;
    }

  h2{
    font-size: 16.5px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #722d7b;
  }

    @media (max-width: 750px){
            border-radius: 5px;
            border: 1px solid #92278f;
            margin: 0 auto 18px;
            padding: 5.5px 0;        
        h1{
            font-size: 16.5px;
        }
    }
`
*/

const Address = styled.address`
    font-family: 'NotoSansCJKkr-Medium';
    font-size: 11.5px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    line-height: 1;
    text-align: left;
    color: #4d4d4f;
    margin-top: 10px;
    @media (max-width: 750px){
        font-size: 5.75px;
        margin-top: 5px;
    }
`

class Privacy extends Component{
    componentDidUpdate(){
        if (this.props.subAgree1Checked && this.props.subAgree2Checked){
            this.props.closeAgreeModal();
        }
    }

    render(){
        return(
            <Fragment>
                <Title />
                <AgreeBar />
                <Section1/>
                <Section2 />
                <Section3 />
                <Section4 />
                <Address>
                    (주)사노피젠자임 코리아 서울특별시 서초구 반포대로 235 (반포동). 
                    T.02-2136-9000 www.sanofi.co.kr
                </Address>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subAgree1Checked: state.subAgree1Checked,
        subAgree2Checked: state.subAgree2Checked,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAgreeModal: () => {dispatch(Action.setAgreeModalOpened(false))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);