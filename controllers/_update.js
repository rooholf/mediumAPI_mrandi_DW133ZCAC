const models = require("../models");
const Cat = models.categories;
const Art = models.articles;
const user = models.users


//update category
exports.updateCategory = (req, res) => {
  Cat.update(req.body, { where: { id: req.params.id } }).then(data => {
    res.send({
      message: "Updated",
      data
    });
  });
};

 // updating article
exports.updateArticle = (req, res) => {
 
  Art.update(req.body, { where: { id: req.params.id } }).then(data => {
    res.send({
      message: "Updated",
      data
    });
  });
};

//update user
exports.updateUser = (req,res) => {
  user.update(req.body, {where: {id: req.params.id}}).then(data=>{
    res.send(data)
  }).catch(err =>{
    res.send(err)
  })
}