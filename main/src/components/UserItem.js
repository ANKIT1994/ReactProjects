function UserItem({user,onDelete}){
    function handleDelete(){
        onDelete(user.id);
    }
    return (
        <div style={styles.userItem}>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td><strong>Roles:</strong></td>
                        
                    </tr>
                    <tr>
                        <td >{user.name}</td>
                        <td>{user.role}</td>
                        <td>
                        <button onClick={handleDelete} style={styles.deleteButton}>Delete X</button>

                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}
const styles = {
    userItem: {
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '3px',
        cursor: 'pointer',
      },
  };
  export default UserItem;