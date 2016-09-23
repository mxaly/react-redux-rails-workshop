import React from 'react';
import { connect } from 'react-redux';

const renderMembers = members => members.map(m => <li>{m}</li>);

const Team = ({ team }) => (
  <ul>
    {renderMembers(team)}
  </ul>
);

export default connect(
  state => ({
    team: state.team
  })
)(Team);
