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
      <Button text="Set User" />
      <Header />
      <NewTodoInput />
      <Button text="Add Todo" />
    </div>
  );
}

export default App;
