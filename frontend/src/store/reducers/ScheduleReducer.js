const initState = {

  loader: false,
  scheduleError: "",
  scheduleSuccessMessage: "",
  singleSchedule: "",
  allSchedule: [],
  perPage: 0,
  scheduleCounts: 0,
  editSchedule: "",
  editRequest: false,
  };


  export const ScheduleReducer = (state = initState, action) => {
    const { payload, type } = action;
    
    if (type === "SCHEDULE_GET_SUCCESS") {
      return {
        ...state,
        loader: false,
        allSchedule: payload.allSchedule,
        scheduleCounts: payload.scheduleCounts,
        perPage: payload.perPage,
      };
    }
    if (type === "SINGLE_BIO_DATA_GET_SUCCESS" || type === "SINGLE_BIO_DATA_NY_USER_GET_SUCCESS") {
      return {
        ...state,
        loader: false,
        singleSchedule:payload
      };
    }
    if (type === "DELETE_SUCCESS") {
      return {
        ...state,
        loader: false,
        scheduleError: "",
        scheduleSuccessMessage: payload.successMessage
      };
    }

    if (type === "EDIT_SCHEDULE_GET_SUCCESS") {
      return {
        ...state,
        editSchedule: payload.editSchedule
      };
    }
    if (type === "EDIT_SCHEDULE_REQUEST_SET") {
      return {
        ...state,
        editRequest: true,
      };
    }


    
      return state;

}