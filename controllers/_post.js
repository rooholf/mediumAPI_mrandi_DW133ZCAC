const models = require("../models");
const Cat = models.categories;
const Art = models.articles;
const user = models.users
const comment = models.comment

//add category
exports.storeCategory = (req, res) => {
  Cat.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  );
};

exports.storeArticle = (req, res) => {
  //add article
  Art.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  );
};


//post new comment
exports.storeComment= (req,res) => {
  comment.create(req.body).then(data=>
    res.send({
      message:'success',
      data
    }))
}