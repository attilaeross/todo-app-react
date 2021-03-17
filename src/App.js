import "./App.css";
import {
  UserNameInput,
  ChangeUserButton,
  NewTodoInput,
  Header,
  AddTodoButton,
  FilterTodoListButton,
} from "./components";

const Todo = () => (
  <div className="todo-list">
    <p>Todo 1</p>
    <button className="complete-button">Complete</button>
    <button className="edit-button">Edit</button>
    <button className="delete-button">Delete</button>
  </div>
);

const TodoList = () => <Todo />;

const AppContainer = () => (
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

const App = () => <AppContainer />;

export default App;
