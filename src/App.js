import Input from "./Components/Input";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input
        type="text"
        className="user-name"
        placeholder="Please enter user name"
      />
      <Header />
      <Input
        type="text"
        className="new-todo"
        placeholder="Please enter new todo"
      />
    </div>
  );
}

export default App;
