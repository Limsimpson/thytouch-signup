import React, {Component} from 'react';
import styled from 'styled-components';
import ReactSignaturePad from 'react-signature-pad';

const SignatureStyle = styled.div`
    .m-signature-pad--body{
        canvas {
            background-color: #d1d3d4;
            height: 130px;
            width: 100%;
        }
    }
`;

class SignaturePad extends Component {
    isEmpty = () => {
        return this.refs.sig.isEmpty();
    }

    toDataURL = () => {
        return this.refs.sig.toDataURL();
    }

    render(){
        return (
            <SignatureStyle>
                <ReactSignaturePad ref="sig"/>
            </SignatureStyle>
        );
    }
}

export default SignaturePad;