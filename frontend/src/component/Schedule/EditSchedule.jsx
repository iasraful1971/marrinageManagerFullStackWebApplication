/* eslint-disable react-hooks/exhaustive-deps */
import {
    Button,
    Code,
    Group,
    NumberInput,
    Select,
    Stepper,
    TextInput
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    schedule_edit,
    update_schedule
} from "../../store/actions/scheduleAction";
import Layout from "../basc/layout/Layout";

const EditSchedule = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);
  const { editSchedule, editRequest } = useSelector(
    (state) => state.ScheduleReducer
  );

  useEffect(() => {
    if (editRequest) {
      setState({
        creatorEmail: editSchedule.creatorEmail,
        name: editSchedule.name,
        age: editSchedule.age,
        division: editSchedule.division,
        oldAddress: editSchedule.oldAddress,
        newAddress: editSchedule.newAddress,
        sex: editSchedule.sex,
        birthDate: editSchedule.birthDate,
        religious: editSchedule.religious,
        maritalStatus: editSchedule.maritalStatus,
        height: editSchedule.height,
        weight: editSchedule.weight,
        bloodGroup: editSchedule.bloodGroup,
        familyMember: editSchedule.familyMember,
        motherIsDead: editSchedule.motherIsDead,
        fatherIsDead: editSchedule.fatherIsDead,
        brother: editSchedule.brother,
        sister: editSchedule.sister,
        familyEconomicStatus: editSchedule.familyEconomicStatus,
        educationMethod: editSchedule.educationMethod,
        middleEducation: editSchedule.middleEducation,
        higherEducation: editSchedule.higherEducation,
        profession: editSchedule.profession,
        salary: editSchedule.salary,
      });
      dispatch({ type: "EDIT-REQUEST_CLEAR" });
    } else {
      dispatch(schedule_edit(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editSchedule, id]);

  const [active, setActive] = useState(0);

  const [state, setState] = useState({
    creatorEmail: userInfo.email,
    name: "",
    age: "",
    division: "",
    oldAddress: "",
    newAddress: "",
    sex: "",
    birthDate: "",

    religious: "",
    maritalStatus: "",
    height: "",
    weight: "",
    bloodGroup: "",

    familyMember: "",
    motherIsDead: "",
    fatherIsDead: "",
    brother: "",
    sister: "",
    familyEconomicStatus: "",

    educationMethod: "",
    middleEducation: "",
    higherEducation: "",
    profession: "",
    salary: "",
  });

 

  const nextStep = () =>
    setActive((current) => {
      if (current === 3) {
    
        dispatch(update_schedule(editSchedule._id , state))
      }

      return current < 4 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Layout>
        <div className="margin-container">
          <Stepper active={active} breakpoint="sm">
            {/* bsic persoanl info */}
            <Stepper.Step label="First step" description="Personal Info">
              {/* name */}
              <TextInput
                label="Name"
                placeholder="Full name"
                onChange={handleInput}
                name="name"
                value={state.name}
              />
              {/* age  */}
              <NumberInput
                onChange={handleInput}
                name="age"
                value={state.age}
                placeholder="Your age"
                label="Your age"
                required
              />

              {/* division  */}
              <Select
                onChange={handleInput}
                name="division"
                value={state.division}
                label="Division"
                placeholder="Choose your division"
                searchable
                nothingFound="No options"
                data={[
                  "Dhaka",
                  "Khulna",
                  "Sylhet",
                  "Rangpur",
                  "Rajshahi",
                  "Chittagong",
                  "Comilla",
                  "Myminsingh",
                ]}
              />

              {/* old address  */}
              <TextInput
                label="Old Address"
                placeholder="add your old village , upozela , district"
                onChange={handleInput}
                name="oldAddress"
                value={state.oldAddress}
              />

              {/* new address  */}
              <TextInput
                label="New Address"
                placeholder="add your new village , upozela , district"
                onChange={handleInput}
                name="newAddress"
                value={state.newAddress}
              />

              {/* sex  */}
              <Select
                onChange={handleInput}
                name="sex"
                value={state.sex}
                label="Gender"
                placeholder="Choose your gender"
                searchable
                nothingFound="No options"
                data={["Male", "Female", "Others"]}
              />

              {/* date of birth  */}
              <DatePicker
                placeholder="Pick date"
                label="Birth Date"
                required
                onChange={handleInput}
                name="birthDate"
                value={state.birthDate}
              />
            </Stepper.Step>
            {/* more perosnal  */}
            <Stepper.Step label="Second step" description="More personal">
              {/* religious  */}
              <Select
                onChange={handleInput}
                name="religious"
                value={state.religious}
                label="Religious Status"
                placeholder="Choose your religious"
                searchable
                nothingFound="No options"
                data={["Muslim", "Christian", "Buddist", "Hindu", "Others"]}
              />
              {/* married status  */}
              <Select
                onChange={handleInput}
                name="maritalStatus"
                value={state.maritalStatus}
                label="Marital Status"
                placeholder="Choose your Marital Status"
                searchable
                nothingFound="No options"
                data={["Single", "Married", "Divorced"]}
              />
              {/*height  */}
              <NumberInput
                onChange={handleInput}
                name="height"
                value={state.height}
                placeholder="Your Height"
                label="Your Height"
                required
              />
              {/* weight */}
              <NumberInput
                onChange={handleInput}
                name="weight"
                value={state.weight}
                placeholder="Your weight"
                label="Your weight"
                required
              />
              {/* blood group  */}
              <Select
                onChange={handleInput}
                name="bloodGroup"
                value={state.bloodGroup}
                label="Blood Group"
                placeholder="Your Blood group"
                searchable
                nothingFound="No options"
                data={[
                  "A positive",
                  "B positive",
                  "O positive",
                  "A negative",
                  "B negative",
                  "O negative",
                ]}
              />
            </Stepper.Step>

            {/* family  */}
            <Stepper.Step label="Third step" description="Family Info">
              {/* <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} /> */}
              {/* family member  */}
              <NumberInput
                onChange={handleInput}
                name="familyMember"
                value={state.familyMember}
                placeholder="Family member"
                label="Family member"
                required
              />
              {/* mother is dead */}
              <Select
                onChange={handleInput}
                name="motherIsDead"
                value={state.motherIsDead}
                label="Mother Is Dead"
                placeholder="Mother Is Dead"
                searchable
                nothingFound="No options"
                data={["No", "Yes"]}
              />
              {/* father is dead */}
              <Select
                onChange={handleInput}
                name="fatherIsDead"
                value={state.fatherIsDead}
                label="Father Is Dead"
                placeholder="Father Is Dead"
                searchable
                nothingFound="No options"
                data={["No", "Yes"]}
              />
              {/* brother  */}
              <NumberInput
                onChange={handleInput}
                name="brother"
                value={state.brother}
                placeholder="Brother Number"
                label="Brother Number"
                required
              />
              {/* sister  */}
              <NumberInput
                onChange={handleInput}
                name="sister"
                value={state.sister}
                placeholder="sister Number"
                label="Sister Number"
                required
              />

              {/* family status  */}
              <Select
                onChange={handleInput}
                name="familyEconomicStatus"
                value={state.familyEconomicStatus}
                label="family Economic Status"
                placeholder="family Economic Status"
                searchable
                nothingFound="No options"
                data={[
                  "Higher Class Family",
                  "Middle Class Family",
                  "Lower Class Family",
                ]}
              />
            </Stepper.Step>

            {/* carrier */}
            <Stepper.Step label="Final step" description="Career">
              {/* <TextInput label="Educ" placeholder="edu" {...form.getInputProps('edu')} /> */}
              {/* method  */}
              <Select
                onChange={handleInput}
                name="educationMethod"
                value={state.educationMethod}
                label="education Method"
                placeholder="education Method"
                searchable
                nothingFound="No options"
                data={["General", "Madrasha"]}
              />
              {/* middle  */}
              <Select
                onChange={handleInput}
                name="middleEducation"
                value={state.middleEducation}
                label="Secondary Education"
                placeholder="Secondary Education"
                searchable
                nothingFound="No options"
                data={["J.S.C", "S.S.C", "H.S.C", "DAKHIL", "VOCATIONAL"]}
              />
              {/* heigher  */}
              <Select
                onChange={handleInput}
                name="higherEducation"
                value={state.higherEducation}
                label="Higher Education"
                placeholder="Higher Education"
                searchable
                nothingFound="No options"
                data={["Honours", "Masters", "P.hd", "Kameel"]}
              />

              {/* profession  */}
              <TextInput
                label=" profession"
                placeholder=" profession"
                onChange={handleInput}
                name="profession"
                value={state.profession}
              />
              {/* salary  */}

              <NumberInput
                onChange={handleInput}
                name="salary"
                value={state.salary}
                placeholder="salary"
                label="salary"
                required
              />
            </Stepper.Step>

            <Stepper.Completed>
              Completed! Form values:
              <Code block mt="xl"></Code>
            </Stepper.Completed>
          </Stepper>

          <Group position="right" mt="xl">
            {active !== 0 && (
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
            )}
            {active !== 4 && <Button onClick={nextStep}>Next step</Button>}
          </Group>
        </div>
      </Layout>
    </>
  );
};

export default EditSchedule;
