// import express from "express";
// import ReactDOM from "react-dom/server";
// import { App } from "../App.tsx";
// import { indexTemplate } from "./indexTemplate.js";

// const app = express();

// app.use("/static", express.static("./dist/client"));

// // app.get('/auth', (req, res) => {
// //   res.send(indexTemplate(ReactDOM.renderToString(App())));
// // });
// // app.get('/', (req, res) => {
// //   res.send(indexTemplate(ReactDOM.renderToString(App())));
// // });
// // app.get('/posts/*/', (req, res) => {
// //   res.send(indexTemplate(ReactDOM.renderToString(App())));
// // });
// // app.get('/posts', (req, res) => {
// //   res.send(indexTemplate(ReactDOM.renderToString(App())));
// // });

// app.get("*", (req, res) => {
//   res.send(indexTemplate(ReactDOM.renderToString(App())));
// });

// app.listen(3100, () => {
//   console.log("server started on port http://localhost:3100");
// });


import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App.tsx";
import { indexTemplate } from "./indexTemplate";
import axios from 'axios';


const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get("/auth", (req, res) => {
  axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3100/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: "YVuyKuqNfgs6geqQ9p4Jt0ERsWTpVA",
        },
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      }
    )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data["access_token"])
      );
    });
});

app.listen(3100, () => {
  console.log("server started on port http://localhost:3100");
});
