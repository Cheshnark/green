import React from "react";
import Navbar from "./Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Portfolio from "./pages/Portfolio";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from "./pages/Blog";
import BlogEntry from "./pages/BlogEntry";
import NotFound from "./pages/NotFound";
import useFetch from "./useFetch";

// Custom palette, imported and modified to change animation and text colors. 
// To change colors in the mui componentes is necessary to do it from here. No "sx", no css, palette. 

const customTheme = createTheme({
    typography:{
      fontFamily:["'Overpass', sans-serif"]
    },
    palette: {
      primary: {
        main: "#EEF2E6", //this overide blue color
        light: "your own color", //overides light blue
        dark: "your own color", //overides dark blue color
      },
    },
});

function App() {
    const {data:itemData} = useFetch('http://localhost:8000/img');

    return (
        <ThemeProvider theme={customTheme}>
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio itemData={itemData} />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogEntry />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
        </ThemeProvider>
  );
}

export default App;
