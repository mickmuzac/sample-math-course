
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var home = require('home');
var question = require('question');

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);
  app.use('/question', question);

  app.use('/login', passport.authenticate('github'));
  app.use('/logout', function(req, res){
      req.logout();
      res.redirect("/");
  });

  app.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/question/1');
  });


  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
