import Header from "./Components/Header";
import Button from "./Components/Button";
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

function App() {
  return (
    <div className="App">
      <UserNameInput />
      <ChangeUserButton />
      <Header />
      <NewTodoInput />
      <Button text="Add Todo" />
    </div>
  );
}

export default App;
