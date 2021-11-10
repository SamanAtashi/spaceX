/* eslint-disable max-len */
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const yourmissions = useSelector((state) => state.missions);

  const items = () => {
    const temp = yourmissions.filter((item) => item.reserved);
    return temp.map((item) => <ListGroup.Item key={item.mission_id}>{item.mission_name}</ListGroup.Item>);
  };

  return (
    <div>
      <h2>Your Missions</h2>
      <ListGroup>
        {items()}
      </ListGroup>
    </div>
  );
};

export default MyProfile;
