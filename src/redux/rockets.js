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

export const cancelReservation = payload => ({
 type: CANCEL_RESVATION,
 payload,
});

export const loadRockets = () => async dispatch => {
 const rockets = await getRockets();
 if (rockets) {
  dispatch(setRockets(rockets));
 }
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case SET_ROCKETS: {
     const saved = Object.entries(action.payload).map(([id, rocket]) => {
       const { description, rocket_name, flickr_images: [img] } = rocket;
       return {
         id,
         description,
         rocket_name,
         img,
       };
     });
     return state.concat(saved);



