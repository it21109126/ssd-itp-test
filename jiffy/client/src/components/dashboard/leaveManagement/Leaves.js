import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import generatePDF from './ReportGeneration';

function Leaves() {
    const [leaves, setLeaves] = useState(null)
    const [search,setSearch]= useState("");

    const columnNames = [{description: "Description", startDate: "StartDate",endDate:"EndDate",type:"Type"}]

    useEffect(() => {
        const fetchLeaves = async () => {
            const response = await fetch(`/api/leaves`)
            const json = await response.json()
            console.log(json)
            console.log(json[0])
            if (response.ok) {
                setLeaves(json)
            }
        }

        fetchLeaves()
    }, [])

    return (
        <main id="main" className="main">

    <div className="pagetitle">
      <h1>Leaves</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item">Leaves</li>
          <li className="breadcrumb-item active">Leaves</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Leave List</h5>

              {/* <!-- Default Table --> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Description</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Type</th>
                    <th></th>
                    
                  </tr>
                </thead>
                <tbody>
                    {leaves && leaves.map((leave) => (
                        <tr key={leave._id}>
                            <th scope="row">{leave._id}</th>
                            <td>{leave.description}</td>
                            <td>{leave.startDate}</td>
                            <td>{leave.endDate}</td>
                            <td>{leave.type}</td>
                            <td><Link to ={{pathname:`/leave/${leave._id}`}}>View Leave</Link></td>
                        </tr>
                    ))}
                </tbody>
              </table>
              {/* <!-- End Default Table Example --> */}
              <button class= "btn btn-primary" onClick={() => generatePDF(
          leaves.map(m => ({
            description: m.description,
            startDate: m.startDate,
            endDate:m.endDate,
            type: m.type
          }
          )), columnNames, false, "LeaveReport")} >Generate Report</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
    );
}

export default Leaves;