const { add_schedule, get_all_schedules ,get_single_schedule ,get_single_schedule_by_user , delete_schedule,  edit_schedule ,  update_schedule} = require("../controllers/scheduleController");

const  router = require("express").Router();
router.post("/add-schedule"  ,  add_schedule);
router.get("/get-schedules"  ,  get_all_schedules);
router.get("/get-single-schedule/:id"  ,  get_single_schedule);
router.get("/get-single-schedule-by-user/:email"  ,  get_single_schedule_by_user);
router.delete("/schedule-delete/:id"  ,  delete_schedule);
router.get("/schedule-edit/:id"  ,  edit_schedule);
router.patch("/schedule-update/:id"  ,  update_schedule);


module.exports = router;