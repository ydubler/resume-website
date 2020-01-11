import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

// To use streams
import fs from "fs";

// React Components
import Navbar from "../components/navbar/Navbar";
import Bio from "../components/bio/Bio";
import Experience from "../components/experience/Experience";
import Skills from "../components/skills/Skills";
import Education from "../components/education/Education";
import Resume from "../components/resume/Resume";
import Articles from "../components/articles/Articles";
import ThreeDModels from "../components/threeDModels/ThreeDModels";
import Contact from "../components/contact/Contact";

// Aphrodite (CSS)
// NOTES: Aphrodite requires a slightly different approach to support server-side rendered CSS.
// This approach is implemented below.
import { StyleSheetServer } from "aphrodite";
import InsertionSort from "../components/articles/Articles/InsertionSort/InsertionSort";
import { Stream } from "stream";

// Get the port
const PORT = process.env.PORT || 3000;

// Create express server
const server = express();

// Set up server properties
server.use("/dist", express.static("dist/"));
// Tell express that when it sees /public make it translate it to __dirname + /public
server.use("/public", express.static(__dirname + "/public"));

// Send neccessary files server->client
server.get("/public/images/:id", (req, res) => {
  // log the activity to the server console
  console.log('server.get("/") [html request]');

  res.sendFile(__dirname + "/public/" + req.params.id);
});

// Getting "/"
server.get("/", (req, res) => {
  console.log("get request to /");

  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Bio />
      </>
    );
  });

  res.send(`
<html>
<head>
<title>SSR React App</title>
<style data-aphrodite>${css.content}</style>
</head>
<body style="margin:0px;font-family:Helvetica Neue" id="body">
<div id="mountNode">${html}</div>
<script src="../dist/main.js"></script>
</body>
</html>
`);
});

// Getting "/experience"
server.get("/experience", (req, res) => {
  console.log("get request to /experience");

  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Experience />
      </>
    );
  });

  res.send(`
<html>
<head>
<title>SSR React App</title>
<style data-aphrodite>${css.content}</style>
</head>
<body style="margin:0px;font-family:Helvetica Neue" id="body">
<div id="mountNode">${html}</div>
<script src="../dist/main.js"></script>
</body>
</html>
`);
});

// Getting "/skills"
server.get("/skills", (req, res) => {
  console.log("get request to /skills");

  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Skills />
      </>
    );
  });

  res.send(`
<html>
<head>
<title>SSR React App</title>
<style data-aphrodite>${css.content}</style>
</head>
<body style="margin:0px;font-family:Helvetica Neue" id="body">
<div id="mountNode">${html}</div>
<script src="../dist/main.js"></script>
</body>
</html>
`);
});

// Getting "/education"
server.get("/education", (req, res) => {
  console.log("get request to /education");

  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Education />
      </>
    );
  });

  res.send(`
  <html>
  <head>
      <title>SSR React App</title>
  </head>
  <body style="margin:0px;font-family:Helvetica Neue" id="body">
      <div id="mountNode">${html}</div>
      <script src="dist/main.js"></script>
  </body>
  </html>
  `);
});

// Getting "/resume"
server.get("/resume", (req, res) => {
  console.log("get request to /resume");
  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  // const { html, css } = StyleSheetServer.renderStatic(() => {
  //   return ReactDOMServer.renderToString(
  //     <>
  //       <Navbar />
  //       <Resume />
  //     </>
  //   );
  // });

  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Resume />
      </>
    );
  });

  res.send(`
  <html>
  <head>
      <title>SSR React App</title>
  </head>
  <body style="margin:0px;font-family:Helvetica Neue" id="body">
      <div id="mountNode">${html}</div>
      <script src="dist/main.js"></script>
  </body>
  </html>
  `);

  // GOOD
  // var file = fs.createReadStream(__dirname + "/public/testResume.pdf");
  // var stat = fs.statSync(__dirname + "/public/testResume.pdf");
  // res.setHeader("Content-Length", stat.size);
  // res.setHeader("Content-Type", "application/pdf");
  // res.setHeader("Content-Disposition", "attachment; filename=testResume.pdf");
  // file.pipe(res);

  // BAD
  // var path = require("path");
  // var file = path.join(__dirname, "/public/testResume.pdf");
  // res.setHeader("Content-Type", "application/pdf");
  // res.download(file);
  //res.download(__dirname + "/public/testResume.pdf");
});

// Getting "/articles"
server.get("/articles", (req, res) => {
  console.log("get request to /articles");
  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Articles />
      </>
    );
  });

  res.send(`
  <html>
  <head>
      <title>SSR React App</title>
      <style data-aphrodite>${css.content}</style>
  </head>
  <body style="margin:0px;font-family:Helvetica Neue" id="body">
      <div id="mountNode">${html}</div>
      <script src="dist/main.js"></script>
  </body>
  </html>
  `);
});

// Getting "/3d-models"
server.get("/3dmodels", (req, res) => {
  console.log("get request to /3dmodels");
  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <ThreeDModels />
      </>
    );
  });

  res.send(`
  <html>
  <head>
      <title>SSR React App</title>
      <style data-aphrodite>${css.content}</style>
  </head>
  <body style="margin:0px;font-family:Helvetica Neue" id="body">
      <div id="mountNode">${html}</div>
      <script src="dist/main.js"></script>
  </body>
  </html>
  `);
});

// Getting "/contact"
server.get("/contact", (req, res) => {
  console.log("get request to /contact");
  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <Contact />
      </>
    );
  });

  res.send(`
  <html>
  <head>
      <title>SSR React App</title>
      <style data-aphrodite>${css.content}</style>
  </head>
  <body style="margin:0px;font-family:Helvetica Neue" id="body">
      <div id="mountNode">${html}</div>
      <script src="dist/main.js"></script>
  </body>
  </html>
  `);
});

// Getting "/articles/insertion-sort"
server.get("/articles/insertion-sort", (req, res) => {
  console.log("get request to /articles/insertion-sort");
  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(
      <>
        <Navbar />
        <InsertionSort />
      </>
    );
  });

  res.send(`
  <html>
  <head>
      <title>SSR React App</title>
      <style data-aphrodite>${css.content}</style>
  </head>
  <body style="margin:0px;font-family:Helvetica Neue" id="body">
      <div id="mountNode">${html}</div>
      <script src="../dist/main.js"></script>
  </body>
  </html>
  `);
});

server.listen(PORT, console.log("Server on."));
