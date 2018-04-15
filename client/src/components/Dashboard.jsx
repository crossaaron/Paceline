import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <div className="container">
    <h1
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
  {secretData && <p style={{ fontSize: '16px', color: 'green' }}><strong>{user.name}</strong>!<br />{secretData}</p>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
