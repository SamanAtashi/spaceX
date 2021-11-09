export const DISPLAY_M = 'display';

export const fetchMissions = () => async (dispatch) => {
  const data = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await data.json();

  return dispatch({ type: DISPLAY_M, payload: missions });
};

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_M:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;
