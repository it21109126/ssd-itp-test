import React from 'react';

import Header from '../../../components/dashboard/Header';
import MachineReport from '../../../components/dashboard/machine/machineReport';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';

function MachineReportPage() {
    return (
        <div>
            {/* <Header />
            <Sidebar /> */}
            <MachineReport />
            {/* <Footer /> */}
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default MachineReportPage;