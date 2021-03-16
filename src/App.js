import Input from "./Components/Input";
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

function App() {
  return (
    <div className="App">
      <UserNameInput />
      <Button text="Set User" />
      <Header />
      <Input
        type="text"
        className="new-todo"
        placeholder="Please enter new todo"
      />
      <Button text="Add Todo" />
    </div>
  );
}

export default App;
