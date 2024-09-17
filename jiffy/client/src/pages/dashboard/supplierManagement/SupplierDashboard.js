import React from "react";
import Header from "../../../components/dashboard/Header";
import Sidebar from "../../../components/dashboard/Sidebar";
import InfoCard from "../../../components/dashboard/supplierManagement/InfoCard";
import PaymentBarChart from "../../../components/dashboard/supplierManagement/PaymentBarChart";
import RecentlyAddedSuppliers from "../../../components/dashboard/supplierManagement/RecentlyAddedSuppliers";
import RecentSupplierPayment from "../../../components/dashboard/supplierManagement/RecentSupplierPayment";
import SupplierPieChart from "../../../components/dashboard/supplierManagement/SupplierPieChart";

function SupplierDashboard() {

    return (
        <>
            <Header />
            <Sidebar />
            <main className="main" id="main">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item">Dashboard</li>
                </ol>

                <div className="row" style={{ margin: "20px 0", justifyContent: "center" }} >
                    <div className="col-lg-10" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <InfoCard />
                    </div>
                </div>

                <div className="row" style={{ margin: "20px 0", justifyContent: "center" }} >
                    <div className="col-lg-5 card" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <RecentSupplierPayment />
                    </div>

                    <div className="col-lg-5 card" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <RecentlyAddedSuppliers />
                    </div>
                </div>

                <div className="row" style={{ margin: "20px 0", justifyContent: "center" }}>
                    <div className="col-lg-10 card" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <PaymentBarChart />
                    </div>

                    
                </div>

                <div className="row" style={{ margin: "20px 0", justifyContent: "center" }}>
                    
                    <div className="col-lg-5 card" style={{ margin: "0 15px 0 0", padding: "20px" }}>
                        <SupplierPieChart />
                    </div>
                </div>

            </main>
        </>
    )
}

export default SupplierDashboard;