const models = require('../models')
const Cat  = models.Categories


exports.index = (req, res) => {
  Cat.findAll().then(data => res.send(data)).catch(err => res.send(err));
};

exports.show = (req, res) => {
  Cat.findOne({where: {id: req.params.id}}).then(data=> res.send(data))
}

exports.store = (req, res) => {
  Cat.create(req.body).then(data=>res.send({
    message:"success",
    data
  }))
};

exports.update = (req, res) => {
  Cat.update(
    req.body,
    {where: {id: req.params.id}}
  ).then(data=>{
    res.send({
      message:"Updated",
      data
    })
  })  
};

exports.delete = (req, res) => {
  Cat.destroy({where: {id: req.params.id}}
  ).then(data=>{
    res.send({
      message: "Deleted",
      data
    })
  })
};
