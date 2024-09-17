import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {
    Chart as ChartJS, ArcElement, CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend, Filler
} from "chart.js"
import { Line } from "react-chartjs-2"
import axios from "axios";

import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

function AccountUsage() {
    const [chartData, setChartData] = useState(null)
    const [error, setError] = useState(null)

    const handleDeleteSubmit = async (e) => {

        const response = await fetch('http://localhost:5000/api/users/' + e, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            console.log(json.error)
        }

        if (response.ok) {
            console.log('User deleted', json)
            window.location.reload()
        }
    }

    const printChart = () => {
        const input = document.getElementById('saveChart');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;
    }

    const printTable = () => {
        const input = document.getElementById('saveTable');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("oldAccounts.pdf");
            })
            ;
    }

    useEffect(() => {
        const fetchChartData = async () => {
            const { data } = await axios.get(`/api/users/usage`)
            //console.log(data)
            console.log(data.map((item) => item.month))

            setChartData({
                labels: data.map((item) => item.month),
                datasets: [
                    {
                        label: "Active users",
                        data: data.map(item => item.users),
                        fill: true,
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.3)"
                    }
                ]
            })

        }

        fetchChartData()
    }, [])

    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch(`/api/users/old-users`)
            const json = await response.json()
            console.log(json)
            //console.log(json[0])
            if (response.ok) {
                setCustomers(json)
            }
        }

        fetchCustomers()
    }, [])


    if (chartData) {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Account Usage</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={{ pathname: `/dashboard/` }}>Home</Link></li>
                            <li className="breadcrumb-item active">Account Usage Report</li>
                        </ol>
                    </nav>
                </div>
                <section class="section">
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-9">
                            <div class="card">
                            <center><button type="button" onClick={printChart} class="btn btn-primary btn-sm">Download as pdf</button></center>
                                    
                                <div class="card-body" id="saveChart">
                                    
                                        <h5 class="card-title">Usage Chart ({parseInt(new Date().getFullYear())}-{parseInt(new Date().getFullYear()-1)})</h5>
                                        <div className="chart">
                                            <Line
                                                data={chartData}
                                                options={{
                                                    responsive: true,
                                                    plugins: {
                                                        legend: { position: "top" },
                                                        title: { display: true, text: "Active users" }
                                                    },
                                                }}
                                            />
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                    <div className="col-lg-12">

                        <div className="card">
                            <center><button type="button" onClick={printTable} class="btn btn-primary btn-sm">Download as pdf</button></center>

                            <div className="card-body" id="saveTable">
                                <h5 className="card-title">Inactive Customer Accounts (Last login two years ago)</h5>
                                {/* <!-- Default Table --> */}
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers && customers.map((customer) => (
                                            <tr key={customer._id}>
                                                <th scope="row">{customer._id}</th>
                                                <td>{customer.name}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.phone}</td>
                                                <td><Link to={{ pathname: `/customer/${customer._id}` }} data-html2canvas-ignore="true">View Profile</Link></td>
                                                <td><div class="icon">
                                                    <i class="bi bi-trash" data-bs-toggle="modal" data-bs-target={`#verticalycentered${customer._id}`} data-html2canvas-ignore="true"></i></div>
                                                    <div class="modal fade" id={`verticalycentered${customer._id}`} tabindex="-1">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title">You are about to delete this account</h5>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    This process can not be undone.
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" class="btn btn-primary" onClick={event => handleDeleteSubmit(customer._id)} data-bs-dismiss="modal">Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* <!-- End Default Table Example --> */}
                            </div>
                        </div>
                    </div>
                </section >
            </main>
        )
    }
}

export default AccountUsage