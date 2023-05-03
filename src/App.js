import "./styles.css";
import { Table } from "reactstrap";
import React from "react";
import { userDetail } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteAllUser, deleteUser } from "./store/slices/User";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const addUsers = (payload) => {
    dispatch(addUser(payload));
  };

  const deleteUsers = (email) => {
    dispatch(deleteUser(email));
  };

  const deleteAllUsers = () => {
    dispatch(deleteAllUser());
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>List of all users</h2>
        <button style={{ margin: 5 }} onClick={() => addUsers(userDetail())}>
          Add User
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => {
            return (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => deleteUsers(item.email)}>Del</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {users.length > 1 && (
        <button style={{ margin: 5 }} onClick={() => deleteAllUsers()}>
          Delete All User
        </button>
      )}
    </div>
  );
};

export default App;
