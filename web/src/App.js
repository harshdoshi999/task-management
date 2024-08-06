import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./pages/TaskList/TaskList";

function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
