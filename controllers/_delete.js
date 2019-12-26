const models = require("../models");
const Cat = models.categories;
const Art = models.articles;
const user = models.users
const comment = models.comment

exports.deleteArticle = (req, res) => {
  //delete article
  Art.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "Deleted",
      data
    });
  });
};

//delete category
exports.deleteCategory = (req, res) => {
  Cat.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "Deleted",
      data
    });
  });
};


//delete user
exports.deleteUser = (req,res) => {
  user.destroy({where: {id: req.params.id}}).then(data=>{
    res.send({
      message:"deleted",
      data
    })
  })
}

//delete comment
exports.deleteComment = (req,res) => {
  comment.destroy({where: {id: req.params.id}}).then(data=>{
    res.send({
      message:"delete",
      data
    })
  })
}

