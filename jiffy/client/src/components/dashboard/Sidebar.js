import React from 'react';
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <!-- End Dashboard Nav --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav1" data-bs-toggle="collapse" href="#">
            <i className="bi-people"></i><span>Employee Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav1" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <Link to={{ pathname: `/employees/` }}>
              <li>
                {/* <a href="http://localhost:3000/add-leave"> */}
                <i className="bi bi-circle"></i>
                <span>Employee List</span>
                {/* </a> */}
              </li>
            </Link>
            <Link to={{ pathname: `/signup` }}>
              <li>
                {/* <a href="http://localhost:3000/leaves"> */}
                <i className="bi bi-circle"></i><span>Add employee</span>
                {/* </a> */}
              </li>
            </Link>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Financial Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/SupplierPayment">
                <i className="bi bi-circle-fill"></i><span>Suppliers transaction</span>
              </a>
            </li>
            <li>
              <a href="/supplier-payment-info">
                <i className="bi bi-circle-fill"></i><span>View Report</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#customers-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Customer Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="customers-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <Link to={{ pathname: `/customers/` }}>
              <li>
                {/* <a href="http://localhost:3000/customers"> */}
                <i className="bi bi-circle"></i><span>All Customers</span>
                {/* </a> */}
              </li>
            </Link>
            <Link to={{ pathname: `/profile-usage/` }}>
              <li>
                {/* <a href="http://localhost:3000/customers"> */}
                <i className="bi bi-circle"></i><span>Account Usage</span>
                {/* </a> */}
              </li>
            </Link>
            <Link to={{ pathname: `/site-feedbacks/` }}>
              <li>
                {/* <a href="http://localhost:3000/customers"> */}
                <i className="bi bi-circle"></i><span>Site Feedbacks</span>
                {/* </a> */}
              </li>
            </Link>
            {/* <Link to={{ pathname: `/add-customer/` }}>
              <li>
                <i className="bi bi-circle"></i><span>Add New Customer</span>
              </li>
            </Link> */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#inventory-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-layout-text-window-reverse"></i><span>Inventory Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="inventory-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li className="nav-item">
              <Link to="/inventory-homepage" className="nav-link collapsed" id="dashboardLink">
                <i className="bi bi-circle-fill"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inventory-prod-page" className="nav-link collapsed" id="productsLink">
                <i className="bi bi-circle-fill"></i>Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inventory-raw-materials-page" className="nav-link collapsed" >
                <i className="bi bi-circle-fill"></i>Raw Materials
              </Link>
            </li>


            <li className="nav-item">
              <Link to="#" className="nav-link collapsed">
                <i className="bi bi-circle-fill"></i>Orders
              </Link>

              <ul>
                <Link to="/inventory-new-order-page"> <li style={{ fontSize: '12px', fontStyle: 'italic' }}><strong>New</strong></li></Link>
                <Link to="/inventory-pending-orders-page"> <li style={{ fontSize: '12px', fontStyle: 'italic' }}><strong>Pending</strong></li></Link>
                <Link to="/inventory-past-orders-page"> <li style={{ fontSize: '12px', fontStyle: 'italic' }}><strong>Past </strong></li></Link>
              </ul>

            </li>

            {/*
      /inventory-new-order-page
       */}

            <li className="nav-item">
              <Link to="/inventory-reports-page" className="nav-link collapsed">
                <i className="bi bi-circle-fill"></i>Reports
              </Link>
            </li>

          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#supplier-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Supplier Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="supplier-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/suppliers">
                <i className="bi bi-circle-fill"></i><span>Suppliers</span>
              </a>
            </li>
            <li>
              <a href="/supplier-payment-info">
                <i className="bi bi-circle-fill"></i><span>Reports</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#delivery-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Delivery Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="delivery-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="http://localhost:3000/deliverymanager">
                <i className="bi bi-circle"></i><span>Packaged</span>
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/delivering">
                <i className="bi bi-circle"></i><span>Delivering</span>
              </a>
            </li>

            <li>
              <a href="http://localhost:3000/Completed">
                <i className="bi bi-circle"></i><span>Completed</span>
              </a>
            </li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
            <i class="bi bi-layout-text-window-reverse"></i><span>Factory Management</span><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/view-factory">
                <i class="bi bi-circle"></i><span>Factory Details</span>
              </a>
            </li>
            <li>
              <a href="/add-factory">
                <i class="bi bi-circle"></i><span>Insert Factory</span>
              </a>
            </li>
            <li>
              <a href="/view-machine">
                <i class="bi bi-circle"></i><span>Machine Details</span>
              </a>
            </li>
            <li>
              <a href="/add-machine">
                <i class="bi bi-circle"></i><span>Insert Machine</span>
              </a>
            </li>
            <li>
              <a href="/update-machine">
                <i class="bi bi-circle"></i><span>Update Machine Status</span>
              </a>
            </li>
            <li>
              <a href="/raw-insert">
                <i class="bi bi-circle"></i><span>Raw Insert Form</span>
              </a>
            </li>
            <li>
              <a href="/order-request">
                <i class="bi bi-circle"></i><span>Order Requests</span>
              </a>
            </li>
            <li>
              <a href="/product-stats">
                <i class="bi bi-circle"></i><span>Product Statistics</span>
              </a>
            </li>
            <li>
              <a href="/reports">
                <i class="bi bi-circle"></i><span>Reports</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#leave-nav" data-bs-toggle="collapse" href="#">
            <i className="bi-calendar2-plus"></i><span>Leaves</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="leave-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="http://localhost:3000/add-leave">
                <i className="bi bi-circle"></i>
                <span>Apply for Leave</span>
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/leaves">
                <i className="bi bi-circle"></i><span>Leave List</span>
              </a>
            </li>
          </ul>
        </li>
        {/* <!-- End Customer Nav --> */}

      </ul>

    </aside>
  );
}

export default Sidebar;