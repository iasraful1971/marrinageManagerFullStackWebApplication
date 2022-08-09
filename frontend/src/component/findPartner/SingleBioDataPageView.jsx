/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mantine/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../more/Spinner';
import { get_single_schedule } from '../../store/actions/scheduleAction';
import Layout from '../basc/layout/Layout';
import BioDataCard from './BioDataCard';
import WholeDetailsCard from './WholeDetailsCard';

const SingleBioDataPageView = () => {
    const {singleSchedule}= useSelector(state => state.ScheduleReducer);

    const dispatch= useDispatch();
    const {id} =useParams();
   useEffect(() => {
    dispatch(get_single_schedule(id))
   }, [id , singleSchedule]);

  if(!singleSchedule){
    return <Spinner/>
  }
    return (
        <Layout>
            <div className="single-page-new-container">
               <div className="margin-container">
                <Grid>
                    <Grid.Col md={12} lg={4}>
                        
                          
                             <BioDataCard s={singleSchedule} i={singleSchedule.name} />
                          
                        
                    </Grid.Col>
                    <Grid.Col md={12} lg={8}>
                       
                              <WholeDetailsCard s={singleSchedule} i={singleSchedule.name} />
                          
                    </Grid.Col>
                </Grid>
               </div>
            </div>
        </Layout>
    );
};

export default SingleBioDataPageView;