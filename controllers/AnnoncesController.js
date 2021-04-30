const annonce = require('../model/Annonces');

module.exports = function (app) {
    console.log("entre_____________________________controleurAnnonce")
    app.post('/addannonce',annonce.addannonce);
    app.get('/read',annonce.showAll);
    app.get('/one',annonce.showOne)
  //  app.get('/show-by-criteria',logement.showByCriteria)
    app.post('/update',annonce.update)
    app.post('/deletelogement',annonce.deleteannonce)
}