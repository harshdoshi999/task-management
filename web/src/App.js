import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./pages/TaskList/TaskList";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <TaskList />
    </AuthProvider>
  );
}

export default App;
