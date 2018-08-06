import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import NotoSansCJKkrBold from './fonts/NotoSansCJKkr-Bold.otf';
import NotoSansCJKkrMedium from './fonts/NotoSansCJKkr-Medium.otf';
import Survey from './components/survey';

injectGlobal`
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,p,
fieldset,legend,textarea,input, select,textarea,
button,article,aside,dialog,footer,
header,section,footer,nav,figure,main{
  font-family: 'NotoSansCJKkr-Bold';
  margin: 0;
  padding: 0;
  word-break: break-all;
}
table,th,td,form,button{
  font-family: 'NotoSansCJKkr-Medium';
}

@font-face {
  font-family: 'NotoSansCJKkr-Bold';  
  src: url('${NotoSansCJKkrBold}') format('opentype');
}
@font-face {
  font-family: 'NotoSansCJKkr-Medium';  
  src: url('${NotoSansCJKkrMedium}') format('opentype');
}
`;

const Container = styled.div`
  width: 750px;
  height: 100%;
  background-color: #f5eff6;
  margin: 0 auto;
  padding: 107px 78px;
  box-sizing: border-box;
  @media (max-width: 750px) {
    width: 100%;
    padding: 53.5px 39px;
  }
`

class App extends Component {
  render() {
    return (
      <Container>
        <Survey />
      </Container>
    );
  }
}

export default App;