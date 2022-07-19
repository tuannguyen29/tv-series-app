import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Series from '../../containers/Series'
import SingleSeries from '../../containers/SingleSeries'

const SingleSeriesComponent = () => {
    const { id } = useParams();
    return <SingleSeries id={id} />;
  };

const Home = () => (
    <Routes>
        <Route exact path="/" element={<Series />} />
        <Route path="/series/:id" element={<SingleSeriesComponent />} />
    </Routes>
);

export default Home;
