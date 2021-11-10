import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import store from '../../redux/configureStore';
import { fetchMissions, joinMission } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const sth = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const joinMissionHandler = (id) => {
    console.log(id);
    store.dispatch(joinMission(id));
  };

  const dosth = () => sth.map((item) => (
    <tr key={item.mission_id}>
      <td>{item.mission_name}</td>
      <td>{item.description}</td>
      <td>
        {item.reserved ? (
          <Button variant="success">Joined</Button>
        ) : (
          <Button variant="secondary">Not joined</Button>
        )}

      </td>
      <td>{item.status}</td>
      <td>
        <Button
          variant="outline-secondary"
          onClick={() => joinMissionHandler(item.mission_id)}
        >
          Join Mission
        </Button>
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
