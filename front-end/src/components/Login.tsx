import * as React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import Logo from '@App/components/Logo';
const LogoUrl = require('../assets/images/logo-birdie.svg');

interface LoginProps {
  handleLogin: (id: string) => void;
}

const Login: React.FC<LoginProps> = ({handleLogin}) => {

  const [id, setId] = React.useState('df50cac5-293c-490d-a06c-ee26796f850d');

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 350 }}>
          <Logo src={LogoUrl} />
        <Header as="h2" textAlign="center">
          {'Account Login'}
        </Header>
        <Form size="large" onSubmit={() => handleLogin(id)}>
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
