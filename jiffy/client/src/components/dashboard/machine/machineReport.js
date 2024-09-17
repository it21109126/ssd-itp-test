import { useEffect, useState } from 'react'
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'

function MachineReport() {

  const exportMachinePDF = () => {
    const input = document.getElementById("main")
    html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("MachineReport.pdf");
    })
  }

  const [machine, setMachines] = useState([])
  const [factories, setFactories] = useState([])
  const [factoryFilter, setFactoryFilter] = useState('')
 
  const fetchMachines = async ({factory}) => {
    const url = factory && factory !== "ALL" ? `/api/machine?factory=${factory}` : '/api/machine'
    const response = await fetch(url)
    const json = await response.json()

    if (response.ok) {
      setMachines(json)
    }
  }

  const fetchFactories = async () => {
    const response = await fetch( '/api/factory')
    const json = await response.json()

    if (response.ok) {
      setFactories(json)
    }
  }

  useEffect(() => {
    fetchFactories()
    fetchMachines()
  }, [])

  useEffect(() => {
    fetchMachines({factory: factoryFilter})
  }, [factoryFilter])

  return (
    <main id="main" className="main">

      <section className="section">

      <div className="card">
              <div className="card-body">
                <h5 className="card-title">Machine Summary Report</h5>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label" >Select a factory:</label>
                  <br />

                  <div className="col-4">
                    <div className="input-group mb-3">

                      <select className="form-select" onChange={e => setFactoryFilter(e.target.value)}>
                        <option value={"ALL"} selected>All factories</option>
                        {factories.map(factory => (
                          <option key={factory.fId} value={factory.fId}>{factory.fId}</option>
                        ))}
                       
                      </select>
                      
                    </div>
                  </div>

                </div>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Machine ID</th>                      
                      <th scope="col">Product</th>
                      <th scope="col">Total Productions</th>
                      <th scope="col">Total Ran Hours</th>
                      <th scope="col">Factory ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machine && machine.map((machine) => (
                      <tr key={machine._id}>
                        <th scope="row">{machine.mId}</th>
                        <td>{machine.product}</td>
                        <td>{machine.totalProductions}</td>
                        <td>{machine.totalProductions}</td>
                        <td>{machine.mFactory}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}
              </div>
              
            </div>

            <button type="button" class="btn btn-primary" onClick={() => exportMachinePDF()}>Download PDF</button>

      </section>

    </main>
  );
}


export default MachineReport;


