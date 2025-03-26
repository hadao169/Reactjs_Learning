import { useState } from "react";

const CreateNewTask = ({ tasks, onAdd, onDelete }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  // Caution: have to check if enteredTask is existing
  function handleClick() {
    if (enteredTask) {
      onAdd(enteredTask);
      setEnteredTask(""); 
    }
  }

  return (
    <div>
      <h3 className="font-bold text-2xl mb-4">Tasks</h3>
      <div className="flex gap-5">
        <input
          value={enteredTask}
          className="rounded-lg bg-stone-300 px-3 py-0.5 w-auto"
          placeholder="Enter task name"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="px-2 rounded hover:bg-stone-200"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && <p className="mt-4">This project does not have any tasks yet.</p>}
      {tasks.length > 0 && (
        <ul className="bg-gray-100 mt-6 px-5 py-5 rounded-lg">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-2"
            >
              {task.task} {/* Display the task description */}
              <button
                onClick={() => onDelete(task.id)} // Pass the task ID for deletion
                className="px-2 text-red-600 hover:text-red-800"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreateNewTask;
