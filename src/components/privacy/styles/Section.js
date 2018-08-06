import styled from 'styled-components';


export default styled.div`
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px 38px 10px 38px;
    background-color: #fff;    

    h2{
        font-size: 16.5px;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #722d7b;
        line-height: normal;
    }
    @media (max-width: 750px){
        border-radius: 5px;
        margin-top: 5px;
        padding: 5px 19px 5px 19px;
        h2{
            font-size: 8.25px;
        }
    }
`