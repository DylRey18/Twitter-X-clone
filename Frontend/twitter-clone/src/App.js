import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Sidebar from "./components/pagesLayout/SidebarLeft.js"


function App() {
  return (
    <>
    {/* If you put in router it shows regardless of the link or path */}
      <Router>
        {/* if you put in switch and give it the route, it will only show with specific path */}
        <Routes>
          <Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
