import getRockets from "../API/rockets";

const SET_ROCKETS = 'rocketStore/rockets/SET_ROCKETS';
const SET_RESERVATION = 'rocketStore/rockets/SET_RESERVATION';
const CANCEL_RESVATION = 'rocketStore/rockets/CANCEL_RESERVATION';
const initialState = [];

const setRockets = payload => ({
 type: SET_ROCKETS,
 payload,
});

export const setReservation = payload => ({
 type: CANCEL_RESVATION,
 payload,
});



