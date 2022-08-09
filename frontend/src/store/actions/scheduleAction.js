import axios from "axios";



// Handle add schedule
export const add_schedule = (data) => async (dispatch) => {

    try {
      const response = await axios.post(
        "http://localhost:8080/rest-api/add-schedule",
        data,
       
      );
       dispatch({ type: "USER_SCHEDULE_SUCCESS", payload: response.data.result });
    console.log(response.data)
      
    } catch (error) {
     console.log(error.response)
    }
  };


  // get all schedule

  export const get_schedules = (page) => async (dispatch) => {
   
     try {
       const response = await axios.get(
         `http://localhost:8080/rest-api/get-schedules?page=${page}`,
       );
       dispatch({
        type: "SCHEDULE_GET_SUCCESS",
        payload: {
          allSchedule: response.data.allSchedule,
          perPage: response.data.perPage,
          scheduleCounts: response.data.scheduleCounts,
        },
      });
       
     } catch (error) {
      console.log(error.response)
     }
   };
  
  // get all schedule

  export const get_single_schedule_by_user = (email) => async (dispatch) => {

     try {
       const response = await axios.get(
         `http://localhost:8080/rest-api/get-single-schedule-by-user/${email}`,
       );
      
      dispatch({
        type: "SINGLE_BIO_DATA_NY_USER_GET_SUCCESS",
        payload :response.data.getSingleScheduleByUser
      })
       
     } catch (error) {
      console.log(error.response)
     }
   };



  // get single schedule 
  export const get_single_schedule = (id) => async (dispatch) => {
   
     try {
       const response = await axios.get(
         `http://localhost:8080/rest-api/get-single-schedule/${id}`,
       );
      dispatch({
        type: "SINGLE_BIO_DATA_GET_SUCCESS",
        payload : response.data.getSingleSchedule
      })
       
     } catch (error) {
      console.log(error.response)
     }
   };
  

  //delete
  export const schedule_delete = (id) => async (dispatch) => {
 
     try {
       const response = await axios.delete(
         `http://localhost:8080/rest-api/schedule-delete/${id}`,
       );
      dispatch({
        type: "DELETE_SUCCESS",
        payload: {
          successMessage: response.data.successMessage,
        }
      })
       console.log(response)
     } catch (error) {
      console.log(error.response)
     }
   };



   //edit

   export const schedule_edit = (id) => async (dispatch) => {
   
      try {
        const response = await axios.get(
          `http://localhost:8080/rest-api/schedule-edit/${id}`,
        );
        dispatch({
          type: "EDIT_SCHEDULE_GET_SUCCESS",
          payload: {
            editSchedule: response.data.editSchedule
          },
        });
        dispatch({
          type: "EDIT_SCHEDULE_REQUEST_SET",
        });
      } catch (error) {
       console.log(error.response)
      }
    };
 


    // update 
   export const update_schedule = (id , data) => async (dispatch) => {
   
    try {
      const response = await axios.patch(
        `http://localhost:8080/rest-api/schedule-update/${id}`,
        data,
        
      );
      console.log(response)
      dispatch({
        type: "SCHEDULE_UPDATE_SUCCESS",
        payload: {
          successMessage: response.data.successMessage,
        },
      });
    } catch (error) {
      dispatch({
        type: "SCHEDULE_UPDATE_FAIL",
        payload: {
          error: error.response.data.errorMessage,
        },
      });
    };
 
   }