import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Login from '../Login';
import Profile from '../Profile';
// import { RootState } from '@App/store/reducers';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

// import Title from '@App/components/Title';
// import Logo from '@App/components/Logo';
// import SubTitle from '@App/components/SubTitle';

// const LogoUrl = require('../../assets/images/logo-birdie.svg');

// interface AppProps {

// }

// interface AppState {

// }

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App: React.FC = () => {
  
  const [recipient, setRecipient] = React.useState('');

  return (
      <>
        <GlobalStyle />
        <AppContainer>
          {
            recipient 
            ?
              <Profile recipientId={recipient} />
            :
              <Login handleLogin={setRecipient}/>
          }
        </AppContainer>
      </>
    );

};

// const mapStateToProps = (state: RootState, ownProps: object) => {};

// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;