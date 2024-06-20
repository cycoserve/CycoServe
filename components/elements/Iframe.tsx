import React from 'react';
import Frame from 'react-frame-component';

const Dashboard = () => (
    <div>
        <h1>Your Custom Dashboard</h1>
        <Frame style={{ width: '100%', height: '100vh', border: 'none' }}>
            <iframe src="https://external-dashboard-url.com" style={{ width: '100%', height: '100%', border: 'none' }} />
        </Frame>
    </div>
);

export default Dashboard;
