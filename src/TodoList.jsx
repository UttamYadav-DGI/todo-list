import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIdx(index);
    setEditTask(todos[index]);
  };

  const handleUpdate = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIdx] = editTask; 
    setTodos(updatedTodos);
    setEditIdx(null);
    setEditTask("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
     
      <h1 className="text-3xl font-bold text-blue-700 mb-6">My Todo List</h1>

      {/* Input & Add btn */}
      <div className="flex gap-2 mb-6">
        <input
          className="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={handleChange}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="w-full max-w-md space-y-3">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow"
          >
            {editIdx === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  className="border px-2 py-1 rounded"
                />
                <button
                  onClick={handleUpdate}
                  className="ml-2 px-2 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="text-gray-800">{todo}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    ❌
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-2 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    ✏️ Update
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
