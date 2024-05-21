import React, {useState} from 'react'

export default function ToDoList() {

    const [tasks, setTasks] = useState(['Wake up', 'Brush your teeth']);
    const [newTask, setNewTask] = useState('');

    function addTask() {
        if(newTask.trim() !== "") {
            const updatedTasks = (t => [...t, newTask]);
            setTasks(updatedTasks);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index ));
    }

    function moveUpTask(index) {
        const updatedTasks = [...tasks];
        if(index>0) {
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDownTask(index) {
        const updatedTasks = [...tasks];
        if((index+1)!==tasks.length) {
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }


  return (
    <>
        <div className="todoContainer">
        <h1>To-do-list</h1>
        <input type="text" onChange={handleInputChange} value={newTask} id="todoInput" placeholder='Enter a task'/>
        <button onClick={addTask}>Add task</button>
        <br />
        <ol className='todo-list'>{tasks.map((task, index) => <li className='todo-listItem' key={index}>
                                        <span className='todo-text'> {task} </span> 
                                        <span className="buttons">
                                            <button className='todo-buttons' onClick={() => deleteTask(index)}>Delete</button>                                                
                                            <button className='todo-buttons' onClick={() => moveUpTask(index)}>Move up</button>
                                            <button className='todo-buttons' onClick={() => moveDownTask(index)}>Move down</button>
                                        </span> 
                                        </li>)}
        </ol>
        </div>
    </>
  )
}
