import "./App.css";
import {
  UserNameInput,
  ChangeUserButton,
  NewTodoInput,
  Header,
  AddTodoButton,
  FilterTodoListButton,
  TodoList,
} from "./components";

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
