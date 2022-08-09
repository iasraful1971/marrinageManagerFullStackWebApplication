import React from 'react';
import Layout from '../basc/layout/Layout';
import Accordions from './Accordion';
import { Hero } from './Hero';
import Timeliner from './Timeline';

const Home = () => {
    return (
        <Layout>
            <div className="margin-container">
                <Hero/>
                <Timeliner/>
                <Accordions/>
            </div>
        </Layout>
    );
};

export default Home;