import UserItem from './UserItem';

function UserList({ users, onDeleteUser }) {
    if(users.length == 0){
        return <p>No Users Added</p>
    }
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete = {onDeleteUser} />
      ))}
    </div>
  );
}

export default UserList;