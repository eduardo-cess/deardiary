module.exports = function(app) {

  var router = app.loopback.Router();

  router.get('/teste', function(req, res) {
    res.send('testando');
  });

  router.get('/', function(req, res) {
    res.render('index');
  });


  app.use(router);
}

