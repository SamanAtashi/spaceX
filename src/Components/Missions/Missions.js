import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../../redux/configureStore';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const sth = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const dosth = () => sth.map((item) => (
    <tr key={item.mission_id}>
      <td>{item.mission_name}</td>
      <td>{item.description}</td>
      <td>Otto</td>
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
