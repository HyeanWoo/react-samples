import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  count: 0,
};

const counter = handleActions(
  {
    [INCREASE]: ({ count }, action) => ({ count: count + 1 }),
    [DECREASE]: ({ count }, action) => ({ count: count - 1 }),
  },
  initialState,
);

export default counter;
