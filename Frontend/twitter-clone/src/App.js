import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pagesFunction/Home.js";
import Bookmark from "./components/pagesFunction/Bookmark.js";
import Layout from "./components/pagesLayout/Layout.js";

function App() {
  return (
    <>
    {/* If you put in router it shows regardless of the link or path */}
      <Router>
        {/* if you put in switch and give it the route, it will only show with specific path */}
        <Routes>
          {/* For the sake of making it easier lets do all in 1 layout first */}
          <Route path= '/' element={<Layout> <Home /> </Layout>}/>
          <Route path= '/home' element={<Layout />}/>

          {/* Realistically we want this after privateRouter and only changing the middle section*/}
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/bookmarks' component={<Bookmark />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
