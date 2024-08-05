import Home from "./pages/Home";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </div>
  );
};

export default App;
