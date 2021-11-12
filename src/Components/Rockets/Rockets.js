/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../../redux/configureStore';
import { setReservation, cancelReservation } from '../../redux/rockets/rockets';

const Rockets = () => {
  //   const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  const handleReservation = (id, reserved) => {
    if (reserved) {
      store.dispatch(cancelReservation(id));
    } else {
      store.dispatch(setReservation(id));
    }
  };

  return (
    <div>
      <ul className="flex flex-col my-5 space-y-10">
        {rockets.map((rocket) => (
          <li
            key={rocket.id}
            className=" w-full h-80 flex justify-between items-start "
          >
            <div className="w-2/5 lg:w-1/4 h-full">
              <img
                src={rocket.img}
                alt="expacex rocket"
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col w-3/4 justify-between h-full  pl-4 ">
              <span className="text-lg font-semibold">
                {rocket.rocket_name}
              </span>
              <span className="">
                {rocket.description}
              </span>
              {rocket.reserved
                ? (
                  <button
                    className="bg-gray-100-500 text-gray-600 border  text-base text-center rounded-md py-1 px-3 w-max hover:shadow-lg"
                    onClick={() => handleReservation(
								    rocket.id,
								    rocket.reserved,
								  )}
                  >
                    Cancel Reservation
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white text-base text-center rounded-md py-1 px-3 w-max"
                    onClick={() => handleReservation(
								    rocket.id,
								    rocket.reserved,
								  )}
                  >
                    {rocket.reserved
								  ? 'Cancel Reservation'
								  : 'Reserve Rocked'}
                  </button>
                )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
