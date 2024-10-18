import {useSelector} from "react-redux";

function Todos() {
  const todos = useSelector(state => state.todos);
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li className="flex items-center justify-center px-4 py-2 mt-4 bg-blue-500 rounded" key={todo.id}>
            <div className="text-white">{todo.text}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos