import React from 'react'
import { signOutClickHandler } from '../services/AuthService'
import { useMsal } from '@azure/msal-react';
// import LineChart from '../components/LineChart/LineChart';
// import { LineChartMock } from '../mocks/LineChartMock';
import Header from '../components/Header/Header';

const Home:React.FC = () => {
    
    
    return (
        <div>
            <Header />
            {/* <LineChart data={LineChartMock}/> */}
        </div>
    )
}

export default Home;