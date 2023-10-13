import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification} = useStateContext();

  useEffect(() => {
    getUsers();
  }, [])

  const onDeleteClick = user => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return
    }
    axiosClient.delete(`/users/${user.id}`)
      .then(() => {
        setNotification(<div className="card animated fadeInDown" style={{backgroundColor: "#ffffff", textAlign: "center"}}>User was successfully deleted</div>)
        getUsers()
      })
  }

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        {/* <Link className="btn-add" to="/users/new">Add new</Link> */}
      </div>
      <div className="card animated fadeInDown mb-4 border-start-lg border-start-success" style={{padding: "10px 20px 10px 20px"}}><br/>
        <div className="card-header" style={{backgroundColor: "#ffffff"}}>
          <div style={{backgroundColor: "#ffffff", fontSize: "20px", fontWeight: "bold"}}>Users</div>
          <div className="card-body p-0" style={{padding: "20px 20px 20px 20px"}}>
            <div className="table-responsive table-billing-history">
              <table id="example" className="display table-bordered table-striped table-hover table-lg table" style={{width: "100%"}}>
                <thead className="table-success">
                  <tr>
                    <th className="border-gray-200" scope="col">ID</th>
                    <th className="border-gray-200" scope="col">Name</th>
                    <th className="border-gray-200" scope="col">Email</th>
                    <th className="border-gray-200" scope="col">Created Date</th>
                    <th className="border-gray-200" scope="col">Action</th>
                  </tr>
                </thead>
                {loading &&
                  <tbody>
                    <tr>
                      <td colSpan="5" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  </tbody>
                }
                {!loading &&
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.created_at}</td>
                        <td>
                          {/* <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link> */}&nbsp;
                          <button className="btn-delete" onClick={ev => onDeleteClick(u)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}