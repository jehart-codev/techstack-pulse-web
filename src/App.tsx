import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Editor from "./pages/Editor";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
