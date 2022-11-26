import "./App.css";
import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Books from "./Pages/Books";
import Add from "./Pages/Add";
import Update from "./Pages/Update";
import Shows from "./Pages/Shows";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import Favourites from "./Pages/Favourites";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/movies/:email" element={<Movies />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/favourites/:email" element={<Favourites />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
