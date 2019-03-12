/*
Imports
*/
const express = require('express');
const apiRouter = express.Router();
//

/*
Configuration
*/
class ApiRouterClass {

  constructor(){}
  routes(){
    // API Homepage
    apiRouter.get(`/`, (req, res)=>{
      res.json({msg: `hello api`, data: [`NodeJS`, `API`]});
    })
  };

  init(){
    // lancer les routes
    this.routes();

    // renvoyer router
    return apiRouter;
  }
};
//

/*
Export
*/
  module.exports = { ApiRouterClass}; 
//