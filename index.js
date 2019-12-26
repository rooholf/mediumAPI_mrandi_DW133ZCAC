require("express-group-routes");
const express = require("express");
const bodyParser = require("body-parser");

const { authenticated } = require('./middleware')

const app = express();
const port = 5000;

const showController = require("./controllers/_show");
const deleteController = require("./controllers/_delete");
const postController = require("./controllers/_post");
const updateController = require("./controllers/_update");
const authController = require("./controllers/_auth")

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

app.group("/api/v1", router => {

  // login endpoint
  router.post('/login',authController.login)
  // register endpoint
  router.post("/register",authController.register);

  //  Category endpoint
  router.get("/categories", showController.showAllCategory); //show all category
  router.get("/category/:id", showController.showCategoryById); //show category by id
  router.post("/category", authenticated, postController.storeCategory); //input category
  router.patch("/category/:id", authenticated, updateController.updateCategory); //update category by id
  router.delete("/category/:id",authenticated, deleteController.deleteCategory); //delete category by id
  router.get("/category/:id/article", showController.articlesOnCategory); //show articles on one category

  //  Articles endpoint
  router.get("/articles", showController.showAllArticle); //show all articles
  router.get("/article/:id", showController.articleByCategory); //show one article with category and user
  router.post("/article", authenticated, postController.storeArticle); //post article
  router.patch("/article/:id",authenticated, updateController.updateArticle); //update article
  router.delete("/article/:id", authenticated, deleteController.deleteArticle); //delete article
  

  // Users endpoint
  router.get("/users", showController.showUsers);
  router.get("/user/:id", showController.showOneUser)
  router.get("/user/:id/article", showController.showUserDetail); //show articles inside user
  
  router.patch("/user/:id", authenticated, updateController.updateUser);
  router.delete("/user/:id",authenticated, deleteController.deleteUser);

  //comment endpoint
  router.get("/user/:id/comment", showController.showCommentOnUser);
  router.get("/comments", showController.showAllComment);
  router.post("/comments", authenticated, postController.storeComment);
  router.delete("/comment/:id", authenticated, deleteController.deleteComment);
  router.get("/article/:id/comments", showController.showCommentsOnArticle);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
