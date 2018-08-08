import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Modal from 'react-modal';

import Title from './Title';
import BorderTable from '../BorderTable';
import SignupForm from './SignupForm';
import Privacy from '../privacy';
import Header from '../header';
import Footer from '../footer';
import * as Action from '../../actions';

const Container = styled.div` /* index 전체 div */
    position: relative;
    h1{
        font-size: 31.5px;
        letter-spacing: -2px;
        color: #92278f;
        line-height: 1.2;
        text-align: center;
    }
    @media (max-width: 750px) {  
        h1{
            font-size: 15.75px;
            letter-spacing: -2px;
        }
    }
`
const TitleMargin = styled.div` /* Title과 SignupForm 사이의 여백 */
    width: 100%;
    height: 36px;
    @media (max-width: 750px){
        height: 18px;
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

const modalStyle = {
    content: {
        margin: '0 auto',
        padding: '0',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '750px',
        maxWidth: '100%',
        height: '100%',
        backgroundImage: 'url(/img/bg_main.png)',
        backgroundSize: 'cover'
    }
}

class Survey extends Component{
    afterModalOpened = () => {
        this.props.setAgreeModalChecked();
        this.props.setTotalAgreeChecked();
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <Container>
                    <Title />
                    <TitleMargin />
                    <BorderTable>
                        <SignupForm/>
                    </BorderTable>
                    <Button>SUBMIT</Button>
                </Container>
                <Modal 
                    isOpen={this.props.agreeModalOpened}
                    onAfterOpen={this.afterModalOpened}
                    onRequestClose={this.props.closeAgreeModal}
                    style={modalStyle}
                    shouldCloseOnOverlayClick={false}
                    >
                    <Privacy></Privacy>
                </Modal>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        agreeModalOpened: state.agreeModalOpened,
        agreeModalChecked: state.agreeModalChecked,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAgreeModal: () => {dispatch(Action.setAgreeModalOpened(false))},
        setAgreeModalChecked: () => {dispatch(Action.setAgreeModalChecked(true))},
        setTotalAgreeChecked: () => {dispatch(Action.setTotalAgreeChecked(false))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);