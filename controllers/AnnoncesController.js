const annonce = require('../model/Annonces');

module.exports = function (app) {
    console.log("entre_____________________________controleurAnnonce")
    app.post('/addannonce',annonce.addannonce);
    app.get('/read',annonce.showAllAnnonce);
    app.get('/one',annonce.showOneAnnonce)
  //  app.get('/show-by-criteria',logement.showByCriteria)
    app.post('/update',annonce.updateAnnonce)
    app.post('/deletelogement',annonce.deleteannonce)
}
