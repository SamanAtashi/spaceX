import React from 'react';
import { useSelector } from 'react-redux';
import { Badge, Button, Table } from 'react-bootstrap';
import store from '../../redux/configureStore';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Missions = () => {
  const sth = useSelector((state) => state.missions);

  const joinMissionHandler = (id) => {
    store.dispatch(joinMission(id));
  };

  const leaveMissionHandler = (id) => {
    store.dispatch(leaveMission(id));
  };

  const dosth = () => sth.map((item) => (
    <tr key={item.mission_id}>
      <td>{item.mission_name}</td>
      <td>{item.description}</td>
      <td>
        {item.reserved ? (
          <Badge bg="success">Active Member</Badge>
        ) : (
          <Badge bg="secondary">Not A Member</Badge>
        )}
      </td>
      <td>{item.status}</td>
      <td>
        {item.reserved ? (
          <Button
            variant="outline-danger"
            onClick={() => leaveMissionHandler(item.mission_id)}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            variant="outline-secondary"
            onClick={() => joinMissionHandler(item.mission_id)}
          >
            Join Mission
          </Button>
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Desciptions</th>
            <th>Statue</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{dosth()}</tbody>
      </Table>
    </div>
  );
};

export default Missions;
