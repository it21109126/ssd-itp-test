import React from 'react';

import Header from '../../../components/dashboard/Header';
import EmployeeAddForm from '../../../components/dashboard/employeeManagement/EmployeeAddForm';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function CustomersPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <EmployeeAddForm />
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default CustomersPage;