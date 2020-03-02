import * as React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import Logo from '@App/components/Logo';
import { useDispatch } from 'react-redux';
import { fetchEventTypes, setRecipient } from '@App/store/actions';

const LogoUrl = require('../assets/images/logo-birdie.svg');

const Login: React.FC = () => {

  const [id, setId] = React.useState('df50cac5-293c-490d-a06c-ee26796f850d');
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    dispatch(setRecipient(id));
    dispatch(fetchEventTypes());
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 350 }}>
          <Logo src={LogoUrl} />
        <Header as="h2" textAlign="center">
          {'Account Login'}
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid={true}
              icon="user"
              iconPosition="left"
              placeholder="Care Recipient ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />

            <Button color="green" fluid={true} size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>

  );
};

export default Login;
