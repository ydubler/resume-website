// React & ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Bootstrap
// https://getbootstrap.com/docs/4.0/getting-started/webpack/
// import "bootstrap/dist/css/bootstrap.min.css"; // Imports a minified bootstrap file?
// import "bootstrap"; // Includes the entire bootstrap library (large file)

// The BrowserRouter is required to allow URL routing with the Route Object (imported next)
// The Route object allows us to load the appropriate React-Object based on the supplied URL.
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// Detect the device being used
import { isBrowser, isMobile } from "react-device-detect";

// React Components
import Navbar from "./components/navbar/Navbar";
import Bio from "./components/bio/Bio";
import Articles from "./components/articles/Articles";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Resume from "./components/resume/Resume";
import ThreeDModels from "./components/threeDModels/ThreeDModels";
import Contact from "./components/contact/Contact";
import InsertionSort from "./components/articles/Articles/InsertionSort/InsertionSort";

//document.body.style.fontFamily = "Helvetica Neue";
//document.body.style.margin = 0;

// Hydrate the DOM, choosing what to render based on the provided Route Path (like "/portfolio")
ReactDOM.hydrate(
  <BrowserRouter>
    <Route path="/" component={Navbar}></Route>
    <Route exact path="/" component={Bio}></Route>
    <Route exact path="/experience" component={Experience}></Route>
    <Route exact path="/skills" component={Skills}></Route>
    <Route exact path="/education" component={Education}></Route>
    <Route exact path="/resume" component={Resume}></Route>

    <Route exact path="/articles" component={Articles}></Route>
    <Route exact path="/3d-models" component={ThreeDModels}></Route>

    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/articles/insertion-sort" component={InsertionSort} />
  </BrowserRouter>,
  document.getElementById("mountNode")
);
