import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="root">
        <input
          type="text"
          className="user-input"
          placeholder="Please enter username"
        />
        <button className="change-user">Set User</button>
        <header>
          <h1 className="header">Todo App</h1>
        </header>
        <form>
          <input
            type="text"
            className="new-todo"
            placeholder="Please enter todo here"
          />
          <button className="add">Add</button>
          <select>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="outstanding">Outstanding</option>
          </select>
        </form>
        <h2 className="list-header"> </h2>
        <ul className="list"></ul>
      </div>
    </div>
  );
}

export default App;
