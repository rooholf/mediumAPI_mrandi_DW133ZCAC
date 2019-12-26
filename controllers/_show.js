const models = require("../models");
const Cat = models.categories;
const Art = models.articles;
const users = models.users;
const comment = models.comment

exports.showAllCategory = (req, res) => {
  //show all category
  Cat.findAll({
    include: [
      {
        model: Art,
        as: "articles"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.showCategoryById = (req, res) => {
  //show category by Id
  Cat.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Art,
        as: "articles"
      }
    ]
  }).then(data => res.send(data));
};

exports.articlesOnCategory = (req, res) => {
  //show articles based on category
  Art.findAll({
    where: { category_id: req.params.id },
    include: [
      {
        model: Cat,
        as: "categories",
        attributes: {
          exclude: "createdAt"
        }
      },
      {
        model: users,
        as: "users",
        attributes: {
          exclude: ["createdAt", "password"]
        }
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.showAllArticle = (req, res) => {
  //show all articles
  Art.findAll({
    include: [
      {
        model: Cat,
        as: "categories"
      },
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

exports.articleByCategory = (req, res) => {
  // show article inside category
  Art.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Cat,
        as: "categories"
      },
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(data => res.send(data))
    .catch(err => res.send(err));
};




// Users section
exports.showUsers = (req,res) => {
      users.findAll()
      .then(data => res.send(data))
      .catch(err => res.send(err))
}

exports.showUserDetail = (req,res) => {
    users.findOne({
      where: { id: req.params.id},
      include: [
        {
          model: Art,
          as: 'articles'
        }
      ]
    }).then(data=>res.send(data))
      .catch(err=> res.send(err))

}

exports.showOneUser = (req,res) =>{
  users.findOne({
    where: {id: req.params.id}
  }).then(data=>res.send(data)).catch(err => res.send(err))
}


//comment section
exports.showCommentOnUser = (req,res) => {
  users.findOne({
    where: {id: req.params.id},
    include: [
      {
        model: comment,
        as: 'comment'
      }
    ] 
  }).then(data=>res.send(data))
  .catch(data=>res.send(data))
}

exports.showAllComment = (req,res) => {
  comment.findAll().then(data=>res.send(data))
  .catch(data=>res.send(data))
}

exports.showCommentsOnArticle = (req,res)=>{
  Art.findOne({
    where: {id:req.params.id},
    include: [
      {
        model: comment,
        as: 'comment'
      }
    ]
  }).then(data=>res.send(data))
  .catch(data=>res.send(data))
}