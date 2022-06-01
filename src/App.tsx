import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import ItemList from './components/ItemList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
