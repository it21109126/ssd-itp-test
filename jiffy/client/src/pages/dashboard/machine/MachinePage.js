import React from 'react';

import Header from '../../../components/dashboard/Header';
import MachineList from '../../../components/dashboard/machine/MachineList';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

function MachinePage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <MachineList />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default MachinePage;