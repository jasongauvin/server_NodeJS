/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
//

/*
Configuration
*/
    class FrontRouterClass {

      constructor(){}
      routes(){
        // Homepage
        frontRouter.get(`/`, (req, res)=>{
          res.render(`index`);
        })
        // Userpage
        frontRouter.get(`/me`, (req, res)=>{
          res.render(`me`);
        })

      }

      init(){
        // lancer les routes
        this.routes();

        // renvoyer router
        return frontRouter;
      }
    };
//

/*
Export
*/
      module.exports = { FrontRouterClass}; 
//