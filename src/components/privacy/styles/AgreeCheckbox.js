import styled from 'styled-components';

export default styled.div`
    position: relative;
    vertical-align: text-top;
    span{
        font-family: 'NotoSansCJKkr-Medium';
        font-size: 11.5px;
        color: #4d4d4f;
    }

    label{
        width: 16px;
        height: 16px;
        cursor: pointer;
        position: absolute;
        top: 1px;
        right: 10px;
        border: 1px solid #722d7b;
        box-sizing: border-box;

        &:after{
            content: '';
            width: 5px;
            height: 5px;
            position: absolute;
            top: 2px;
            left: 3.5px;
            border: 2px solid #722d7b;
            border-top: none;
            border-right: none;
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
    @media(max-width: 750px){        
        span{
            font-size: 5.75px;
        }

        label{
            width: 8px;
            height: 8px;
            top: 6px;
            right: 5px;
            border: 0.5px solid #722d7b;

            &:after{
                width: 2.5px;
                height: 2.5px;
                top: 1.5px;
                left: 1.75px;
                border: 0.5px solid #722d7b;
                border-top: none;
                border-right: none;
            }
        }
    }
`