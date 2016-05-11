/**
* TeacherController
*
* @description :: Server-side logic for managing teachers
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {
  index: function(req, res) {
		if (!req.session.isLoggedin) {
			return res.redirect('teacher/login')
		}
    return res.view('teacher/index', {user: req.session.user});
  },
  postQuiz: function(req, res) {
		if (!req.isLoggedin) {
			return res.redirect('teacher/login')
		}
		res.send('hello world');
  },
  login: function(req, res) {
    res.view('teacher/login');
  },
  signup: function(req, res) {
    res.view('teacher/signup');
  },
	doLogin: function(req, res) {
		console.log(req.body);
		Teacher.findOne({name: req.body.name, password: req.body.password}).exec(function(err, teacher) {
			if(err) {
				return res.view('teacher/login', err);
			}
			console.log(teacher);
			req.session.user = teacher;
			req.session.isLoggedin = true;
			res.redirect('/teacher')
		})
	},
	doSignup: function(req, res) {
		Teacher.create(req.body).exec(function(err, teacher) {
			if(err) {
				return res.view('teacher/signup', err);
			}
			req.session.user = teacher;
			req.session.isLoggedin = true;
			res.redirect('/teacher')
		})
	}
};
