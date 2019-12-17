require("express-group-routes");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

const todoController = require('./controllers/categoriesController')

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Header", "*")
    res.header("Access-Control-Allow-Method", "*")
    next();
})

app.group("/api/v1", (router) => {
  router.get("/categories", todoController.index);

  router.get("/category/:id", todoController.show);
  router.post("/category", todoController.store);

  router.patch("/category/:id", todoController.update);

  router.delete("/category/:id", todoController.delete);
});



app.listen(port, () => console.log(`Listening on port ${port}!`));
