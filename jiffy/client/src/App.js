//import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import ProductPage from "./pages/Shop";

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from "./pages/auth/Register";
import AccountPage from './pages/Account';
import OrderPage from './pages/OrderPage';

import LoginRedirect from './pages/redirect/LoginRedirect'
import AccountRedirect from './pages/redirect/AccountRedirect';


import CustomersPage from "./pages/dashboard/customerManagement/CustomersPage";
import DashboardHome from './pages/dashboard/DashboardHome'
import CustomerAddPage from "./pages/dashboard/customerManagement/CustomerAddPage"
import CustomerProfilePage from "./pages/dashboard/customerManagement/CustomerProfile";
import AccountUsagePage from './pages/dashboard/customerManagement/AccountUsagePage';
import SiteFeedbackPage from './pages/dashboard/customerManagement/SiteFeedbackPage';


import Ebill from "./pages/dashboard/transactionManagement/customerEbill";
import AddCustomerPayment from "./pages/dashboard/transactionManagement/AddCustomerPayment";
import SupplierPayment2 from "./pages/dashboard/transactionManagement/SupplierPayment.js";

//Vibashana
import InventoryHomePage from "./pages/dashboard/inventoryManagement/InventoryHomePage";
import InventoryProductsPage from "./pages/dashboard/inventoryManagement/InventoryProductsPage";
import InventoryAddNewProductPage from "./pages/dashboard/inventoryManagement/InventroyAddNewProductPage";
import InventoryProductOverviewPage from "./pages/dashboard/inventoryManagement/InventoryProductOverviewPage";
import InventoryUpdateProductPage from "./pages/dashboard/inventoryManagement/InventoryUpdateProductPage";
import InventoryRawMaterialsPage from "./pages/dashboard/inventoryManagement/InventoryRawMaterialsPage";
import InventoryAddRawMaterialPage from "./pages/dashboard/inventoryManagement/InventoryAddRawMaterialPage";
import InventoryRawMaterialOverview from "./pages/dashboard/inventoryManagement/InventoryRawMaterialOverviewPage";
import InventoryNewOrderPage from "./pages/dashboard/inventoryManagement/InventoryNewOrderPage";
import InventoryCartOverviewPage from "./pages/dashboard/inventoryManagement/InventoryCartOverviewPage";
import CustomerProductsPage from "./pages/dashboard/inventoryManagement/CustomerProductsPage";
import CustomerProductOverviewPage from "./pages/dashboard/inventoryManagement/CustomerProductOverviewPage";
import ShoppingCartPage from "./pages/dashboard/orderManagement/ShoppingCartPage.js";
import InventoryReportsPage from "./pages/dashboard/inventoryManagement/InventoryReportsPage";
import InventoryPendingOrdersPage from "./pages/dashboard/inventoryManagement/InventoryPendingOrdersPage";
import InventoryPastOrdersPage from "./pages/dashboard/inventoryManagement/InventoryPastOrdersPage";


import Suppliers from "./pages/dashboard/supplierManagement/Suppliers";
import SupplierDetails from "./pages/dashboard/supplierManagement/SupplierDetails";
import AddSupplier from "./pages/dashboard/supplierManagement/AddSupplier";
import Error404 from "./pages/dashboard/supplierManagement/Error404";
import SupplierDashboard from "./pages/dashboard/supplierManagement/SupplierDashboard";
import SupplierInfo from "./pages/dashboard/supplierManagement/SupplierInfo";
import SupplierPayment from "./pages/dashboard/supplierManagement/SupplierPayment";
import SupplierPaymentReport from "./pages/dashboard/supplierManagement/SupplierPaymentReport";
import PaymentInfo from "./pages/dashboard/supplierManagement/PaymentInfo";
import SupplierRawMaterialReport from "./pages/dashboard/supplierManagement/RawMaterialReport";


import DeliverymanagerHomePage from "./pages/dashboard/deliveryManagement/deliverymanagerHomePage";
import CustomerTrackorderPage from "./pages/dashboard/deliveryManagement/customerTrackorderPage";
import Sampletr from "./pages/dashboard/deliveryManagement/sampletr";
import DashboardHomedelivery from './pages/dashboard/deliveryManagement/DashboardHomedelivery';
import DeliveringOrdersDeliverymanager from './pages/dashboard/deliveryManagement/deliveringOrdersDeliverymanager';
import CompletedOrdersDeliverymanager from './pages/dashboard/deliveryManagement/completedOrdersDeliverymanger';


import EmployeesPage from "./pages/dashboard/employeeManagement/EmployeesPage";
import EmployeeAddPage from "./pages/dashboard/employeeManagement/EmployeeAddPage"
import EmployeeProfilePage from "./pages/dashboard/employeeManagement/EmployeeProfile";

import LeavesAddPage from "./pages/dashboard/LeaveManagement/LeaveAddPage";
import LeavePage from "./pages/dashboard/LeaveManagement/LeavePage";
import LeavesPage from "./pages/dashboard/LeaveManagement/LeavesPage";
import AccessDenidedPage from './pages/dashboard/employeeManagement/AccessDeniedPage';


import FactoryAddPage from "./pages/dashboard/factory/FactoryAddPage";
import FactoryPage from "./pages/dashboard/factory/FactoryPage";
import FactoryDetailsPage from "./pages/dashboard/factory/FactoryDetails";
import MachineAddPage from "./pages/dashboard/machine/MachineAddPage";
import MachinePage from "./pages/dashboard/machine/MachinePage";
import MachineDetailsPage from "./pages/dashboard/machine/MachineDetails";
import MachineStatsPage from "./pages/dashboard/machine/MachineStatsPage";
import OrderRequestPage from "./pages/dashboard/factory/OrderRequestPage";
import RawInsertPage from "./pages/dashboard/factory/RawInsertPage";
import ProductStatsPage from "./pages/dashboard/machine/ProductStatsPage";
import ReportsPage from "./pages/dashboard/machine/ReportsPage";
import MachineReportPage from "./pages/dashboard/machine/MachineReportPage";


function App() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<ProductPage />}/>

                <Route path="/login" element={!localStorage.getItem('user')? <LoginPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/signup" element={!localStorage.getItem('user')? <RegisterPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/account" element={localStorage.getItem('user')? <AccountPage />:<Navigate to='/login-redirect'/>}/>
                <Route path="/my-order/:id" element={localStorage.getItem('user')? <OrderPage />:<Navigate to='/login-redirect'/>}/>
                <Route path="/login-redirect" element={<LoginRedirect />}/>
                <Route path="/account-redirect" element={<AccountRedirect />}/>
                <Route path="/dashboard" element={<DashboardHome />}/>
                <Route path="/customers" element={<CustomersPage />}/>
                <Route path="/customer/:id" element={<CustomerProfilePage />}/>
                <Route path="/add-customer" element={<CustomerAddPage />}/>
                <Route path="/profile-usage" element={<AccountUsagePage />}/>
                <Route path="/site-feedbacks" element={<SiteFeedbackPage />}/>


                <Route path="/cart" element={<ShoppingCartPage />}/>
                <Route path="/ebill/:id/:qty" element={<Ebill />}/>
                <Route path="/AddCustomerPayment" element={<AddCustomerPayment />}/>
                <Route path="/SupplierPayment" element={<SupplierPayment />}/>
                <Route path="/SupplierPayment2" element={<SupplierPayment2 />}/>


                <Route path="/inventory-homepage" element={<InventoryHomePage />}/>
                <Route path="/inventory-prod-page" element={<InventoryProductsPage />}/>
                <Route path="/inventory-add-product-page" element={<InventoryAddNewProductPage />}/>
                <Route path="/inventory-product-overview-page/:id" element={<InventoryProductOverviewPage />}/>
                <Route path="/inventory-product-update-page/:id" element={<InventoryUpdateProductPage />}/>
                <Route path="/inventory-raw-materials-page" element={<InventoryRawMaterialsPage />}/>
                <Route path="/inventory-add-raw-material-page" element={<InventoryAddRawMaterialPage />}/>
                <Route path="/inventory-raw-material-overview-page/:id" element={<InventoryRawMaterialOverview />}/>
                <Route path="/inventory-new-order-page" element={<InventoryNewOrderPage />}/>
                <Route path="/inventory-cart-overview-page" element={<InventoryCartOverviewPage />}/>
                <Route path="/inventory-pending-orders-page" element={<InventoryPendingOrdersPage />}/>
                <Route path="/inventory-reports-page" element={<InventoryReportsPage />}/>
                <Route path="/inventory-past-orders-page" element={<InventoryPastOrdersPage />}/>

                <Route path="/products" element={<CustomerProductsPage />} />
                <Route path="/product-overview/:id" element={<CustomerProductOverviewPage/>} />


                <Route path="/supplier-dashboard" element={<SupplierDashboard/>}/>
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/update-supplier-details/:id" element={<SupplierDetails />} />
                <Route path="/add-supplier" element={<AddSupplier />} />
                <Route path="/supplier-info/:id" element={<SupplierInfo />} />
                <Route path="/supplier-details" element={<Error404 />} />
                <Route path="/add-supplier-payment" element={<SupplierPayment />}/>
                <Route path="/supplier-reports/:name/:rawMaterial" element={<SupplierPaymentReport/>} />
                <Route path="/supplier-reports/:rawMaterial" element={<SupplierRawMaterialReport/>} />
                <Route path="/supplier-payment-info/:name/:rawMaterial" element={<PaymentInfo/>} />


                <Route path="/deliverymanager" element={<DeliverymanagerHomePage />}/>
                <Route path="/dashboardHome" element={<DashboardHomedelivery />}/>
                <Route path="/delivering" element={<DeliveringOrdersDeliverymanager/>}/>
                <Route path="completed" element={<CompletedOrdersDeliverymanager/>}/>                
                <Route path="/:id/trackorder" element={<CustomerTrackorderPage />}/>
                <Route path="/sampletr" element={<Sampletr/>}/>


                <Route path="/emp-login" element={ <LoginPage />}/>
                <Route path="/emp-signup" element={localStorage.getItem('employee')? <RegisterPage />:<Navigate to='/account-redirect'/>}/>
                <Route path="/emp-account" element={localStorage.getItem('employee')? <AccountPage />:<Navigate to='/login-redirect'/>}/>


                <Route path="/employees" element={<EmployeesPage />}/>
                <Route path="/employee/:id" element={<EmployeeProfilePage />}/>
                <Route path="/add-employee" element={<EmployeeAddPage />}/>
                <Route path="/error" element={<AccessDenidedPage/>}/>


                <Route path="/leaves" element={<LeavesPage />}/>
                <Route path="/leave/:id" element={<LeavePage />}/>
                <Route path="/add-leave" element={<LeavesAddPage />}/>


                <Route path="/add-factory" element={<FactoryAddPage />}/>
                <Route path="/view-factory" element={<FactoryPage />}/>
                <Route path="/factory-details/:id" element={<FactoryDetailsPage />}/>
                <Route path="/add-machine" element={<MachineAddPage />}/>
                <Route path="/view-machine" element={<MachinePage />}/>
                <Route path="/machine-details/:id" element={<MachineDetailsPage />}/>
                <Route path="/update-machine" element={<MachineStatsPage />}/>
                <Route path="/order-request" element={<OrderRequestPage />}/>
                <Route path="/raw-insert" element={<RawInsertPage />}/>
                <Route path="/stats" element={<ProductStatsPage />}/>
                <Route path="/reports" element={<ReportsPage />}/>
                <Route path="/report-machine" element={<MachineReportPage />}/>
            </Routes>
        </BrowserRouter>  
    );
}

export default App;