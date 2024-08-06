import React from "react";
import Header from "./components/Header";
import TaskList from "./pages/TaskList/TaskList";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPrompt from "./components/LoginPromt";

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Header />
      {isAuthenticated ? <TaskList /> : <LoginPrompt />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
