import { Button, Group, NumberInput, Select, Stepper, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import success from "../../image/successful-businessman-celebrating-victory_1150-39772.webp";
import { add_schedule } from '../../store/actions/scheduleAction';
import Footer from '../basc/footer/Footer';
import Navbar from '../basc/navbar/Navbar';
export function ThreeForm() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  // const {successMessage} = useSelector(state => state.ScheduleReducer);
  const {userInfo} = useSelector(state => state.userReducer);

  const form = useForm({
    
    initialValues: {
      
      creatorEmail: userInfo.email,
      name: "",
      age: 0,
      division: "",
      oldAddress: "",
      newAddress: "",
      sex: "",
      birthDate: "",

        
     
      religious: "",
      maritalStatus: "",
      height: 0,
      weight: 0,
      bloodGroup: "",


      // website: '',
      familyMember: 0,
      motherIsDead: "",
      fatherIsDead: "",
      brother: 0,
      sister: 0,
      familyEconomicStatus: "",



      // edu: '',
      educationMethod: "",
      middleEducation: "",
      higherEducation: "",
      profession: "",
      salary: 0,



    },

    validate: (values) => {
      if (active === 0) {
        return {
  
            name:
            values.name.length === 0
              ? "Username must include at least 2 characters"
              : null,
          age:
            values.age.length === 0 ? "Include your current age" : null,
          oldAddress:
            values.oldAddress.length === 0
              ? "Old Address required"
              : null,
          newAddress:
            values.newAddress.length === 0
              ? "New Address required"
              : null,
          division:
            values.division.length === 0 ? "Select Your division" : null,
            sex: values.sex.length === 0 ? "Select Gender" : null,
            birthDate:
            values.birthDate.length === 0
              ? "Select Your Birth date"
              : null,
        };
      }
      if (active === 1) {
        return {
        
          // email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
          religious:
          values.religious.length === 0
            ? "Select Your Religious"
            : null,
            maritalStatus:
            values.maritalStatus.length === 0
              ? "Select marital status"
              : null,
              height: values.height.length === 0 ? "Add your height" : null,
              weight: values.weight.length === 0 ? "Add your weight" : null,
              bloodGroup:
              values.bloodGroup.length === 0
                ? "Select  Blood Group"
                : null,
        };
      }

      if (active === 2) {
        return {
          familyMember:values.familyMember.length === 0 ? "Add family members number" : null,
          motherIsDead:values.motherIsDead.length === 0 ? "Select One" : null,
           fatherIsDead:values.fatherIsDead.length === 0 ? "Select One" : null,
          sister:values.sister.length === 0 ? "How many sister your have ? add this" : null,
          brother:values.brother.length === 0 ? "How many brother your have ? add this": null,
          familyEconomicStatus:values.familyEconomicStatus.length === 0 ? "Add family status" : null,
     
        };
      }
      
      if (active === 3) {
        return {
          // edu :values.edu.length === 0 ? "add" : null,
          educationMethod:values.educationMethod.length === 0 ? "Select One" : null,
          middleEducation:values.middleEducation.length === 0 ? "Select One" : null,
          higherEducation:values.higherEducation.length === 0 ? "Select One" : null,
          
          profession:values.profession.length === 0 ? "Your Profession" : null,
          salary:values.salary.length === 0 ? "Add salary range": null,
          
     
        };
      }
      

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      if(current === 3){
        dispatch(add_schedule(form.values))
      }
      
      return current < 4 ? current + 1 : current;
      
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


   

  return (
    <>
    <Navbar/>
      <div className="margin-container">
    
    <form>
    <Stepper active={active} breakpoint="sm">
        {/* bsic persoanl info */}
        <Stepper.Step label="First step" description="Personal Info">
        
      
            {/* name */}
            <TextInput
              label="Name"
              placeholder="Username"
              {...form.getInputProps("name")}
            />
            {/* age  */}
            <NumberInput
              {...form.getInputProps("age")}
              placeholder="Your age"
              label="Your age"
              required
            />
         

            {/* division  */}
            <Select
              {...form.getInputProps("division")}
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
              {...form.getInputProps("oldAddress")}
            />

            {/* new address  */}
            <TextInput
              label="New Address"
              placeholder="add your new village , upozela , district"
              {...form.getInputProps("newAddress")}
            />

                {/* sex  */}
            <Select
              {...form.getInputProps("sex")}
              label="Gender"
              placeholder="Choose your gender"
              searchable
              nothingFound="No options"
              data={["Male", "Female"]}
            />

         {/* date of birth  */}
         <DatePicker
                 placeholder="Pick date"
                 {...form.getInputProps("birthDate")}
                 label="Birth Date"
                 required
               />









        </Stepper.Step>
      {/* more perosnal  */}
        <Stepper.Step label="Second step" description="More personal">
              
          {/* <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} /> */}
          
                 {/* religious  */}
                 <Select
                 {...form.getInputProps("religious")}
                 label="Religious Status"
                 placeholder="Choose your religious"
                 searchable
                 nothingFound="No options"
                 data={["Muslim", "Christian", "Buddist", "Hindu", "Others"]}
               />
                 {/* married status  */}
            <Select
              {...form.getInputProps("maritalStatus")}
              label="Marital Status"
              placeholder="Choose your Marital Status"
              searchable
              nothingFound="No options"
              data={["Single", "Married", "Divorced"]}
            />
               {/*height  */}
               <NumberInput
                 {...form.getInputProps("height")}
                 placeholder="Your Height (inches)"
                 label="Your Height"
                 required
               />
               {/* weight */}
               <NumberInput
                 {...form.getInputProps("weight")}
                 placeholder="Your weight (k.g)"
                 label="Your weight"
                 required
               />
                {/* blood group  */}
                <Select
                 {...form.getInputProps("bloodGroup")}
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
                 {...form.getInputProps("familyMember")}
                 placeholder="Family member"
                 label="Family member"
                 required
               />
                  {/* mother is dead */}
            <Select
              {...form.getInputProps("motherIsDead")}
              label="Mother Is Dead"
              placeholder="Mother Is Dead"
              searchable
              nothingFound="No options"
              data={["No", "Yes"]}
            />
                  {/* father is dead */}
            <Select
              {...form.getInputProps("fatherIsDead")}
              label="Father Is Dead"
              placeholder="Father Is Dead"
              searchable
              nothingFound="No options"
              data={["No", "Yes"]}
            />
          {/* brother  */}
          <NumberInput
                 {...form.getInputProps("brother")}
                 placeholder="Brother Number"
                 label="Brother Number"
                 required
               />
               {/* sister  */}
               <NumberInput
                 {...form.getInputProps("sister")}
                 placeholder="sister Number"
                 label="Sister Number"
                 required
               />

               {/* family status  */}
                <Select
              {...form.getInputProps("familyEconomicStatus")}
              label="family Economic Status"
              placeholder="family Economic Status"
              searchable
              nothingFound="No options"
              data={["Higher Class Family", "Middle Class Family" , "Lower Class Family"]}
            />

        </Stepper.Step>

        {/* carrier */}
        <Stepper.Step label="Final step" description="Career">
          {/* <TextInput label="Educ" placeholder="edu" {...form.getInputProps('edu')} /> */}
          {/* method  */}
          <Select
              {...form.getInputProps("educationMethod")}
              label="education Method"
              placeholder="education Method"
              searchable
              nothingFound="No options"
              data={["General", "Madrasha"]}
            />
            {/* middle  */}
          <Select
              {...form.getInputProps("middleEducation")}
              label="Secondary Education"
              placeholder="Secondary Education"
              searchable
              nothingFound="No options"
              data={["J.S.C", "S.S.C" , "H.S.C" , "DAKHIL", "VOCATIONAL"]}
            />
            {/* heigher  */}
          <Select
              {...form.getInputProps("higherEducation")}
              label="Higher Education"
              placeholder="Higher Education"
              searchable
              nothingFound="No options"
              data={["Honours", "Masters" , "P.hd" , "Kameel"]}
            />

            {/* profession  */}
            <TextInput label=" profession" placeholder=" profession" {...form.getInputProps('profession')} />
              {/* salary  */}

              <NumberInput
                 {...form.getInputProps("salary")}
                 placeholder="salary"
                 label="salary"
                 required
               />

        </Stepper.Step>



        <Stepper.Completed>
               <div className='success'>
                 <h1>Congratulations!</h1>
                 <img src={success} alt="" />
               </div>
        </Stepper.Completed>
      </Stepper>
    </form>

      <Group position="right" mt="xl">
        {active === 0 && active === 1 && active === 2 && active === 3 &&  (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
       
        {active !== 4 && <Button onClick={nextStep}>Next step</Button>}
        {active === 4 && <Link to="/me"><Button >See my data </Button></Link>}
      </Group>
      </div>
      <Footer/>
    </>
  );
}