import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRockets, setReservation, cancelReservation } from '../../redux/rockets';


const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rocketsReducer);

  useEffect(
    () => {
      if (rockets.length === 0) dispatch(loadRockets());
    },
    [],
  );
