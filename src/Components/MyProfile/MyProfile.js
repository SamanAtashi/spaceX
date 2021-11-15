/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const yourmissions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  const items = () => {
    const temp = yourmissions.filter((item) => item.reserved);
    return temp.map((item) => <li className="border px-3 py-1" key={item.mission_id}>{item.mission_name}</li>);
  };
  const items2 = () => {
    const temp = rockets.filter((item) => item.reserved);
    return temp.map((item) => <li className="border px-3 py-1" key={item.id}>{item.rocket_name}</li>);
  };

  return (
    <div className="flex items-start justify-between space-x-10 mt-4">
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold">My Missions</h2>
        <ul className="border rounded-sm">{items()}</ul>
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold">My Rockets</h2>
        <ul>{items2()}</ul>
      </div>
    </div>
  );
};

export default MyProfile;
