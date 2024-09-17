import { useNavigate } from 'react-router-dom'

function Reports() {
  const navigate = useNavigate()
 
  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Machine Reports</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Reports - Machines</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">All Machines</h5>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label" >View Machine Report</label>
                  <button type="button" class="btn btn-primary" onClick={() => navigate("/report-machine")}>View PDF</button>

                </div>

                
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}


export default Reports;





// import React from "react";
// import { Link } from "react-router-dom";

// const MachineReportComponent = ({ machines }) => {

//   return (
//     <div className="container">
//       {machines.length === 0 ? (
//         "You currently have no machines created"
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Machine ID</th>
//               <th scope="col">Product</th>
//               <th scope="col">Total Productions Done</th>
//               <th scope="col">Total Running Hours</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {machines.map(machine => (
//               <tr key={machine.id}>
//                 <td>{machine.mId}</td>
//                 <td>{machine.product}</td>
//                 <td>{machine.totalProductions}</td>
//                 <td>{machine.totalRunningHrs}</td>
//                 <td>
//                   <Link to={`/machine/${machine.id}`}>See comments</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MachineReportComponent;