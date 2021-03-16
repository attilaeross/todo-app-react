import InputElement from "./Components/InputElement";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <InputElement
        type="text"
        className="user-name"
        placeholder="Please enter user name"
      />
      <Header />
      <InputElement
        type="text"
        className="new-todo"
        placeholder="Please enter new todo"
      />
    </div>
  );
}

export default App;
