import "./App.css";
import {
  UserNameInput,
  ChangeUserButton,
  NewTodoInput,
  Header,
  AddTodoButton,
  FilterTodoListButton,
  Todo,
} from "./components";

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
