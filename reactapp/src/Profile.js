import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Profile);
        