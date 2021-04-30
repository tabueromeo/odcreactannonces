const DaoPrivilege = require('../dao/DaoPrivilege');
var Category = require('../dao/DaoCategory')
var carimgs = ["tabueromeo marie","https://res.cloudinary.com/lepiston/image/fetch/h_270/http://lepiston.fr/files/QQB3oowxErbkcvgpYopkodBp.jpeg","https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"];


function showAll(req, res) {
    console.log(" enter 3");
    //if (!req.body.limit) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        res.send(carimgs);
        //daologement.addLogement();
}
function addPrivilege (req,res){

       let donnee = req.body;
       var _privilege= new DaoPrivilege(donnee);

       _privilege.save(function (err, donnee) {
                if (err) {
                    res.status(500).json({
                        "text": "Erreur interne"
                    })
                } else {
                    console.log("ajout avec sucess")
                    res.status(200).json({
                        "text": "Succès--- privilege"
                    })
                }
            })
        
    
}
;
exports.addPrivilege = addPrivilege;
exports.showAll = showAll;

//exports.update=update;
//exports.deleteannonce = deleteannonce;