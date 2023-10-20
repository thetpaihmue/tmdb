import { MovieActionEnum, StateData } from "../Types";

interface Action {
  type: MovieActionEnum;
  payload?: any;
}

const moviesReducer = (state: StateData, action: Action): StateData => {
  switch (action.type) {
    case MovieActionEnum.MOVIES_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case MovieActionEnum.MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case MovieActionEnum.MOVIES_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("Unsupported action type");
  }
};

export default moviesReducer;
