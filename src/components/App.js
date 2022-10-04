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

const itemData = [
  {
      img: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'waterfall'
  },
  {
      img: 'https://images.pexels.com/photos/12800709/pexels-photo-12800709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'hostel'
  },
  {
      img: 'https://images.pexels.com/photos/12041967/pexels-photo-12041967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'waterfall-girl'
  },
  {
      img: 'https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'roots'
  },
  {
      img: 'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'forest-road'
  },
  {
      img: 'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'bridge'
  },
  {
      img: 'https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'couple-floaters'
  },
  {
      img: 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'hut'
  },
  {
      img: 'https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'wanderer'
  },
  {
      img: 'https://images.pexels.com/photos/5533417/pexels-photo-5533417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'monstera'
  },
  {
      img: 'https://images.pexels.com/photos/5425627/pexels-photo-5425627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'love'
  },
  {
      img: 'https://images.pexels.com/photos/13058811/pexels-photo-13058811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'forest'
  }
];

function App() {
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
