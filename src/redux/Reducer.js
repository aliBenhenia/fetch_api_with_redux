import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from './Action';
  
  const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === FETCH_DATA_REQUEST) 
        return { ...state, loading: true };
    if (action.type === FETCH_DATA_SUCCESS)
        return { ...state, loading: false, data: action.payload, error: '' };
    if (action.type === FETCH_DATA_FAILURE)
        return { ...state, loading: false, data: [], error: action.payload };
    else
    return state;
  };
  
  export default reducer;