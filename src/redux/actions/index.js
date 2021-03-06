import { ADD_EVENT } from "./types";
import { DELETE_EVENT } from "./types";
import { DELETE_EVENT_LIST } from "./types";

export const addEvent = (inputTime, inputTitle, Description, dayName) => ({
  type: ADD_EVENT,
  payload: {
    id: Date.now(),
    inputTime,
    inputTitle,
    Description,
    dayName,
  },
});
export const deleteEvent = (dayName) => ({
  type: DELETE_EVENT,
  payload: {
    dayName,
  },
});
export const deleteEventList = (dayName,id) => ({
  type: DELETE_EVENT_LIST,
  payload: {
    dayName,
    id
  },
});
