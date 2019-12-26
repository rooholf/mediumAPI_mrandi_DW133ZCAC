"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name_category: "HOME"
        },
        {
          name_category: "ONEZERO"
        },
        {
          name_category: "GAMING"
        },
        {
          name_category: "PROGRAMMING"
        },
        {
          name_category: "HUMAN"
        },
        {
          name_category: "AXIOS"
        },
        {
          name_category: "REACT"
        },
        {
          name_category: "CAPE"
        },
        {
          name_category: "PENGEN"
        },
        {
          name_category: "BERES"
        },
        {
          name_category: "AJA"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  }
};
