import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import UserForm from './components/UserForms';
import UserList from './components/UserList';

function App() {
  const  [users,setUsers] = useState([]);
  function addUser(user){
    setUsers([...users,user]);
  }
  function deleteUser(id){
    const updatedUser = users.filter((user) => user.id !==  id);
    setUsers(updatedUser);
  }
  return (
    <div className="App">
      <h1>User Managerment App </h1>
      <UserForm onAddUser = {addUser}/>
      <UserList users = {users} onDeleteUser = {deleteUser}/>
    </div>
  );
}

export default App;
