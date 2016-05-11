/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 create: function(req, res) {
      console.log(parseInt(req.body.rfids))

     Rfids.findOne({rfid: parseInt(req.body.rfids)}).exec(function(err, rfid) {
       if(err) {
         return res.status(400).json(err);
       }
       if(!rfid) {
         return res.status(400).json({message: 'no RFID found'})
       }
       Events.create({rfids: rfid.id, user: req.body.user}).exec(function(err, event) {
         res.json(event);
       })
     })
   }
};
