import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container">
        <h1 title="React Application" subtitle="This is the home page." />
          {Auth.isUserAuthenticated() ? (
            <p style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in kind sir!!!!.</p>
          ) : (
            <p style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</p>
          )}
      </div>
    )
  }
};

export default HomePage;
