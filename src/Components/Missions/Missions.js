import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button, Table } from 'react-bootstrap';
import store from '../../redux/configureStore';
import { fetchMissions, joinMission, leaveMission } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const sth = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const joinMissionHandler = (id) => {
    store.dispatch(joinMission(id));
  };

  const leaveMissionHandler = (id) => {
    console.log(id);
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
