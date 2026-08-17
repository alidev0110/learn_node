import router from "express";

const Router = router();

Router.get("/", (req, res) => {
  res.send("Welcome to the Movie API");
});

Router.post("/", (req, res) => {
  res.send("Welcome to the Movie API");
});

Router.delete("/", (req, res) => {
  res.send("Welcome to the Movie API");
});

Router.put("/", (req, res) => {
  res.send("Welcome to the Movie API");
});


export default Router;      
