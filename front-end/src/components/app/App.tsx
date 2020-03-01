import * as React from 'react';
import Login from '../Login';
import Profile from '../Profile';
import { Container } from 'semantic-ui-react';
// import { RootState } from '@App/store/reducers';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';

const App: React.FC = () => {
  
  const [recipient, setRecipient] = React.useState('');

  return (
      <Container>
        {
          recipient 
          ?
          <Profile recipientId={recipient} />
          :
          <Login handleLogin={setRecipient}/>
        }
      </Container>
    );

};

// const mapStateToProps = (state: RootState, ownProps: object) => {};

// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;