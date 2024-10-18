function AddTodo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full p-6 bg-white border border-gray-300 rounded-lg shadow-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h1 className="text-2xl font-semibold text-center text-gray-900">Todo List</h1>
        <form className="flex flex-col space-y-4">
          <label htmlFor="todo" className="text-lg font-medium text-gray-700">
            Add Todo:
            <input
              id="todo"
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your task"
              aria-label="Add new todo"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
