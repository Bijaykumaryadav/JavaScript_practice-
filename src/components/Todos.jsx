import {useSelector,  useDispatch
} from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import {
  removeTodo,
  toggleTodo,
  updateTodo,
} from "../features/todos/todoSlice";
import { useState , useEffect } from "react";


function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState('');
  const [updatedText, setUpdatedText] = useState('');

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setUpdatedText(todo.text);
    console.log(editingId);
  }

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: updatedText }));
    setEditingId(null);
    };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between px-4 py-2 mt-4 rounded bg-slate-500"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <input
                className="p-2 mr-4 rounded"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              <div
                className={`text-white ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </div>
            )}

            <div className="flex gap-2">
              {editingId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="p-1 text-white bg-green-500 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="p-1 text-white bg-yellow-500 rounded"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`text-white ${
                  todo.completed ? "bg-green-500" : "bg-yellow-500"
                } p-1 rounded`}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <button
                type="submit"
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500"
              >
                <FaDeleteLeft className="text-white" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;