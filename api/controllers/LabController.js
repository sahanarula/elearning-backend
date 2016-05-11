/**
 * LabController
 *
 * @description :: Server-side logic for managing labs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   fetchDataMatchingRFID: function(req, res) {
     Lab.find({}).exec(function(err, labDetails) {
        Rfids.findOne({rfid: `${req.param('rfid')}`}).exec(function(err, rfidDetails) {
          var labMatchedDetailsWithRFID = []
          if (!rfidDetails) {
             return res.status(400).json({message: 'no RFID found'});
          }

          labMatchedDetailsWithRFID = labDetails.map(function(item) {
             if (item.rfid === rfidDetails.id) {
                return item
             }
          })
          res.json(labMatchedDetailsWithRFID);
        })
     })
   }
};
