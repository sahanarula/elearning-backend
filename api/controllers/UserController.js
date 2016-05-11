/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 login: function(req, res) {
     User.findOne({username: req.param('username'), password: req.param('password')}).exec(function(err, user) {
       if(err) {
         return res.status(400).json(err);
       }
       if(!user) {
         return res.status(400).json({message: 'no user found'})
       }
       return res.json(user);
     })
  },

  signup: function(req, res) {
     console.log(req.body)
     User.create(req.body).exec(function(err, user) {
       if(err) {
         return res.status(400).json(err);
       }
       if(!user) {
         return res.status(400).json({message: 'no user found'})
       }
       return res.json(user);
     })
  },

  updateLearningObject: function(req, res) {
    User.findOne({id: req.body.id}).exec(function(err, user) {
      if (err) {
        return res.status(500).json(err);
      }

      if (!user) {
        return res.status(400).json({message: 'No User found'});
      }

      if (user.lo && user.lo.length > 0) {
        if (user.lo.indexOf(req.body.lo) === -1) {
          user.lo.push(req.body.lo);
        }
      }
      else {
        user.lo = [];
        user.lo.push(req.body.lo)
      }
      user.course_used = req.body.course_used;
      user.save(function(err, s) {
        if(err) {
          return res.status(500).json(err);
        }

        res.json(s);
      })
    })
  }

};
