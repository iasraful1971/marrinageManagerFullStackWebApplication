/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid, Notification } from '@mantine/core';
import { IconDatabase, IconEdit, IconTrash } from '@tabler/icons';
import React, { useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from '../../more/Spinner';
import { get_single_schedule_by_user, schedule_delete } from '../../store/actions/scheduleAction';
import Layout from '../basc/layout/Layout';
import BioDataCard from '../findPartner/BioDataCard';
import WholeDetailsCard from '../findPartner/WholeDetailsCard';
import "./auth.css";
const MyDetails = () => {
    const {userInfo} = useSelector(state => state.userReducer);
    const {singleSchedule , scheduleSuccessMessage} = useSelector(state => state.ScheduleReducer);
    const email = userInfo?.email
    
const dispatch = useDispatch();
useEffect( () => {
    dispatch(get_single_schedule_by_user(email))
},[email , dispatch]);


console.log(singleSchedule   , "my details in array? ")

useEffect(() => {
    if (scheduleSuccessMessage) {
      toast.success(scheduleSuccessMessage);  
      window.location.reload()  
    }  
  }, [scheduleSuccessMessage , singleSchedule ]);


  if(!singleSchedule){
    return <Spinner/>
  }
    return (
        <Layout>
           <div className="me">
           <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
            <div className="margin-container">
              <h2>My details</h2>
               <Grid gutter="lg">
                 <Grid.Col md={12} lg={4}>
                    {
                         singleSchedule.map((s , i) => <BioDataCard s={s} i={i} />)
                    }
               </Grid.Col>
               <Grid.Col md={12} lg={8}>
                {
                    singleSchedule.map((s ,i) => <div key={i} className="edit-and-delete">
                    <div className="edit-btn">
                    
                    <Button variant="outline" leftIcon={<IconEdit size={14} />}>
                   Edit
                  </Button>
                    
                    </div>
                    <div className="delete-btn">
                    <Button onClick={() => dispatch( schedule_delete(s._id))} variant="gradient" gradient={{ from: 'orange', to: 'red' }}leftIcon={<IconTrash size={14} />}>
                   Delete
               </Button>
                    </div>
                </div>)
                }

               {
               singleSchedule.map((s , i) =>   <WholeDetailsCard s={s} i={i}/> )

               }

              
               </Grid.Col>
               {
                singleSchedule.length === 0 && <Grid.Col  lg={12}> <Notification title="We notify you that">
                    <Grid className='notification-grid'>  <Grid.Col className='notification-grid-image' md={6} lg={6}><img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg?size=626&ext=jpg&ga=GA1.2.169027009.1659106830" alt="" /></Grid.Col>
               <Grid.Col className='notification-grid-text' md={6} lg={6}> <h5>You are now added any bio data to us. please first add a bio data for yourself. If you want to publish a bio data so click here.</h5>
               
               <div className="btn-area"> <Link to="/schedule"><Button leftIcon={<IconDatabase size={14} />}>
                    Add Bio Data
            </Button></Link></div>
               </Grid.Col></Grid>
              </Notification>
              </Grid.Col>
               }
               </Grid>
            </div>
           </div>
        </Layout>
    );
};

export default MyDetails;