import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../../redux/configureStore';
import { fetchMissions } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const sth = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const dosth = () => sth.missions.map((item) => (
    <p key={item.mission_id}>{item.mission_name}</p>
  ));

  return (
    <div>
      <p>this is Missions</p>
      {dosth()}
      {/* {missions.map((item) => (
        <p key="item.mission_id">{item}</p>
      ))} */}
    </div>
  );
};

export default Missions;
