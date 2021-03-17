export const UserNameInput = () => (
  <input
    type="text"
    className="user-name"
    placeholder="Please enter user name"
  ></input>
);

export const ChangeUserButton = () => <button>Set User</button>;

export const NewTodoInput = () => (
  <input
    type="text"
    className="new-todo"
    placeholder="Please enter new todo here"
  ></input>
);

export const Header = () => (
  <header>
    <h1>Todo App React</h1>
  </header>
);

export const AddTodoButton = () => <button>Add todo</button>;

export const FilterTodoListButton = () => (
  <select>
    <option value="all">All</option>
    <option value="completed">Completed</option>
    <option value="outstanding">Outstanding</option>
  </select>
);

export const Todo = () => (
  <div className="todo-list">
    <p>Todo 1</p>
    <button className="complete-button">Complete</button>
    <button className="edit-button">Edit</button>
    <button className="delete-button">Delete</button>
  </div>
);
