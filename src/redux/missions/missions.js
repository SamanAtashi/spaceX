/* eslint-disable max-len */
export const DISPLAY_M = 'display';
export const JOINED = 'joined';
export const NOT_JOINED = 'not_joined';

export const fetchMissions = () => async (dispatch) => {
  const data = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await data.json();

  return dispatch({ type: DISPLAY_M, payload: missions });
};

export const joinMission = (id) => ({ type: JOINED, id });

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_M:
      return [...state, ...action.payload];
    case JOINED:
      return state.map((mission) => ((mission.mission_id === action.id) ? { ...mission, reserved: true } : { ...mission }));
    case NOT_JOINED:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;
