import React, { useState } from 'react';
import './App.css';

function App() {

  let [todolist, setTodolist] = useState([]);


  let saveTodoList = (e) => {
    let toname = e.target.toname.value;
    if (!todolist.includes(toname)) {
      let finaldoList = [...todolist, toname];
      setTodolist(finaldoList);
      // e.target.toname.value = '';
    } else {
      alert('Already Exist');
    }
    e.preventDefault();
  }

  let list = todolist.map((item, index) => {
  return (
    <TodoListItems key={index} value={item} indexNumer={index} todolist={todolist} setTodolist={setTodolist} />
  );
    
  })

  

  return (
    <div className='App'>
      <h1 className='bg-black'>TODO</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' name="toname" placeholder='Add a Items' />
        <button>Save</button>
      </form>

      <div className='outerdiv' >
        <ul>
          {list}
        </ul>
      </div>

    </div>
  );
}

export default App;
function TodoListItems({value,indexNumer,todolist,setTodolist}) {
  let [status,setStatus] = useState(false);
 let deleteRow = () => {
   let newTodoList = [...todolist];
   newTodoList.splice(indexNumer,1);
   setTodolist(newTodoList);
 }
 let checkStatus = (e) => {
    setStatus(!status);
}
  return (
    <li className={(status)? 'completeTodo':''} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
  )

  
}