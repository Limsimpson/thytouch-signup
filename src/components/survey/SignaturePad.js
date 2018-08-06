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
    render(){
        return (
            <SignatureStyle>
                <ReactSignaturePad />
            </SignatureStyle>
        );
    }
}

export default SignaturePad;