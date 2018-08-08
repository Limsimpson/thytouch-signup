import styled from 'styled-components';


export default styled.div`
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px 38px 10px 38px;
    background-color: #fff;    

    h2{
        position: relative;
        font-size: 16.5px;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #722d7b;
        line-height: normal;
        &:before{
            position: absolute;
            top: 2px;
            left: -20px;
            width: 15px;
            height: 20px;
            content: '';
            display: block;
            background: url(/img/ico_form.png) no-repeat;
            background-size: cover;
        }
    }
    @media (max-width: 750px){
        border-radius: 5px;
        margin-top: 5px;
        padding: 5px 19px 5px 19px;
        h2{
            font-size: 8.25px;
            &:before{
                top:3px;
                left: -10px;
                width: 7.5px;
                height: 10px;
            }
        }
    }
`