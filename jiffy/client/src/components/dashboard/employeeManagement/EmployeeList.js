import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

function Employees() {
  const [staffs, setStaffs] = useState(null)
  const [filteredStaffs, setFilteredStaffs] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchCategory, setSearchCategory] = useState("")
  const isMounted = useRef(false)

  useEffect(() => {
    const fetchStaffs = async () => {
      const response = await fetch(`/api/employees`)
      const json = await response.json()
      console.log(json)
      if (response.ok) {
        setStaffs(json)
      }
    }

    fetchStaffs()
  }, [])


  useEffect(() => {

    if (searchTerm!=="") {
      const handleSearch = (data) => {

        let term;

        if (searchTerm !== null) {
          term = searchTerm.replace(/[^a-zA-Z0-9_ \d]/, '');
          console.log(term);
        }


        const regExp = new RegExp(term, "i");
        console.log(regExp);
        //*If search category is emp name
        if (searchCategory === "empName") {
          if (data) {
            const filteredStaff = data.filter(data => data.name.match(regExp));
            setFilteredStaffs(filteredStaff);
          }
        }//*If search category is emp role
        else if (searchCategory === "empRole") {
          if (data) {
            const filteredStaff = data.filter(data => data.role.match(regExp));
            setFilteredStaffs(filteredStaff);
          }
        }
      }
      handleSearch(staffs);

    }
  }, [searchCategory, searchTerm]);

  //* Get search term from Search Bar Component
  const getSearchTerm = (data) => {
    setSearchTerm(data)
  }

  //* Get search category from Search Bar Component
  const getSearchCategory = (data) => {
    setSearchCategory(data);
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Employee List</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={{ pathname: `/dashboard/` }}>Home</Link></li>
            <li className="breadcrumb-item active">All Employees</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <SearchBar
        searchTerm={getSearchTerm}
        searchCategory={getSearchCategory}
      />
      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Employee List</h5>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">DOB</th>
                      <th scope="col">Role</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchTerm===""?staffs && staffs.map((staff) => (
                      <tr key={staff._id}>
                        <th scope="row">{staff._id}</th>
                        <td>{staff.name}</td>
                        <td>{staff.dob}</td>
                        <td>{staff.role}</td>
                        <td>{staff.email}</td>
                        <td>{staff.phone}</td>
                        <td><Link to={{ pathname: `/employee/${staff._id}` }}>View Profile</Link></td>
                      </tr>
                    )):filteredStaffs && filteredStaffs.map((staff) => (
                      <tr key={staff._id}>
                        <th scope="row">{staff._id}</th>
                        <td>{staff.name}</td>
                        <td>{staff.dob}</td>
                        <td>{staff.role}</td>
                        <td>{staff.email}</td>
                        <td>{staff.phone}</td>
                        <td><Link to={{ pathname: `/employee/${staff._id}` }}>View Profile</Link></td>
                      </tr>
                    ))}
                    {/* {staffs && staffs.map((staff) => (
                      <tr key={staff._id}>
                        <th scope="row">{staff._id}</th>
                        <td>{staff.name}</td>
                        <td>{staff.dob}</td>
                        <td>{staff.role}</td>
                        <td>{staff.email}</td>
                        <td>{staff.phone}</td>
                        <td><Link to={{ pathname: `/employee/${staff._id}` }}>View Profile</Link></td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Employees;