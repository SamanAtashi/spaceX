/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector } from 'react-redux';
// import Table from 'react-bootstrap/Table';
// import { Badge, Button } from 'react-bootstrap';
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

  const dosth = () => sth.map((item, idx) => (
    <tr
      key={item.mission_id}
      className={`${
				  idx % 2 ? 'bg-gray-200' : 'bg-white'
      }  border border-gray-400`}
    >
      <td className="border border-gray-400 text-center">
        {item.mission_name}
      </td>
      <td className="border border-gray-400 text-left pb-6 px-3 pt-3">
        {item.description}
      </td>
      <td className="border border-gray-400 text-center px-1">
        {item.reserved ? (
          <p className=" px-2 w-max border bg-blue-500 text-white rounded-md ">
            Active Member
          </p>
        ) : (
          <p className=" px-2 w-max border bg-gray-500 rounded-md text-white ">
            Not A Member
          </p>
        )}
      </td>
      {/* <td className="border border-gray-400">{item.status}</td> */}
      <td className="border border-gray-400 text-center px-4 ">
        {item.reserved ? (
          <button
            className="border bg-red-500 text-white rounded-md w-max px-3 py-2 "
            onClick={() => leaveMissionHandler(
							    item.mission_id,
							  )}
          >
            Leave Mission
          </button>
        ) : (
          <button
            className="border border-gray-500 text-gray-700 rounded-md w-max px-3 py-2"
            onClick={() => joinMissionHandler(
							    item.mission_id,
							  )}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="table-auto border border-gray-400 sborder-collapse  my-6">
        <thead className="border border-gray-400">
          <tr>
            <th className="border border-gray-400">Missions</th>
            <th className="border border-gray-400">Desciptions</th>
            <th className="border border-gray-400">Status</th>
            <th className="border border-gray-400"> </th>
          </tr>
        </thead>
        <tbody>{dosth()}</tbody>
      </table>
    </div>
  );
};

export default Missions;
