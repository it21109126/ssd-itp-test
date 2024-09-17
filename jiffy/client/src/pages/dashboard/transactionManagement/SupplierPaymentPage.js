import React from 'react';

import Header from '../../../components/dashboard/Header';
import SupplierPayment from '../../../components/dashboard/transactionManagement/supplierPayment';
import Sidebar from '../../../components/dashboard/Sidebar';
import Footer from '../../../components/dashboard/Footer';


function supplierPayment() {
    return (
        <div>
            <Header />
            <Sidebar />
           <SupplierPayment/>
            <Footer />
            <a href="#" 
            className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    );   
}

export default supplierPayment;