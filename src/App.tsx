import Home from "./pages/Home";
import Detail from './pages/Detail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
