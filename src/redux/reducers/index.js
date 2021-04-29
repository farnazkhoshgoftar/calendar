import { ADD_EVENT } from "../actions/types";
import { DELETE_EVENT } from "../actions/types";
import { DELETE_EVENT_LIST } from "../actions/types";

const INITIAL_STATE = {
  EventsList: {},
};
export const events = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EVENT: {
      return {
        ...state,
        EventsList: {
          ...state.EventsList,
          [action.payload.dayName]: [
            ...(state.EventsList[action.payload.dayName]
              ? state.EventsList[action.payload.dayName]
              : ""),
            {
              id: action.payload.id,
              inputTime: action.payload.inputTime,
              inputTitle: action.payload.inputTitle,
              Description: action.payload.Description,
              dayName: action.payload.dayName,
            },
          ],
        },
      };
    }

    case DELETE_EVENT: {
      let item = state.EventsList[action.payload.dayName];
      item.pop();
      return {
        ...state,
        EventsList: {
          ...state.EventsList,
          [action.payload.dayName]: item,
        },
      };
    }

    case DELETE_EVENT_LIST: {
      let item = state.EventsList[action.payload.dayName];
      var filtered = item.filter((value) => {
        return value.id !== action.payload.id;
      });

      return {
        ...state,
        EventsList: {
          ...state.EventsList,
          [action.payload.dayName]: filtered,
        },
      };
    }

    default:
      return state;
  }
};
