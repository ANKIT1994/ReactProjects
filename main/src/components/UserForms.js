import { useState } from "react";

function UserForms({onAddUser}){
const [name,setName] = useState('');
const [role,setRole] = useState('');

function handleSubmit(e){
    e.preventDefault();

    if(name.trim() == '' || role.trim() == ''){
        alert('Please fill in all fields');
        return;

    }

const newUser = {
    id: Date.now(),
    name,
    role,
};

onAddUser(newUser);
setName('');
setRole('');
}

return (
<form onSubmit = {handleSubmit}>
<input
    type = "text"
    placeholder="Enter Name"
    value={name}
    onChange = {(e) => setName(e.target.value)}
/>
<input
    type = "text"
    placeholder="Enter Role"
    value={role}
    onChange = {(e) => setRole(e.target.value)}
/>
<button type = "submit">Add User</button>
</form>

    );
}

export default UserForms;
