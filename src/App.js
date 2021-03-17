import "./App.css";

const UserNameInput = () => (
  <input
    type="text"
    className="user-name"
    placeholder="Please enter user name"
  ></input>
);

const ChangeUserButton = () => <button>Set User</button>;

const NewTodoInput = () => (
  <input
    type="text"
    className="new-todo"
    placeholder="Please enter new todo here"
  ></input>
);

const Header = () => (
  <header>
    <h1>Todo App React</h1>
  </header>
);

const AddTodoButton = () => <button>Add todo</button>;

const FilterTodoListButton = () => (
  <select>
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="outstanding">Outstanding</option>
  </select>
);

const Todo = () => (
  <div className="todo-list">
    <p>Todo 1</p>
    <button className="complete-button">Complete</button>
    <button className="edit-button">Edit</button>
    <button className="delete-button">Delete</button>
  </div>
);

const TodoList = () => <Todo />;

function App() {
  return (
    <div className="App">
      <UserNameInput />
      <ChangeUserButton />
      <Header />
      <NewTodoInput />
      <AddTodoButton />
      <FilterTodoListButton />
      <TodoList />
    </div>
  );
}

export default App;
