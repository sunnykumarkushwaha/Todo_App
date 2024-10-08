import "./App.css";
import { Heading } from "./Components/Heading";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 conatiner bg-info ">
        <div className="p-5 bg-light border rounded ">
          <Heading></Heading>
          <TodoItem></TodoItem>
          <TodoList></TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
