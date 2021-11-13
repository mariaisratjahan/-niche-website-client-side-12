import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user}=useAuth()
    return (
        <div> 
             <p>Hello {user.displayName}...</p>
            <h2>Welcome To Dashboard</h2>
            
        </div>
    );
};

export default DashboardHome;