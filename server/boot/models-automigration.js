var async = require('async');
module.exports = function(app) {
  
  //data sources
  var mysqlDs = app.dataSources.mysql;

  //create all models
  async.parallel({
    diario: async.apply(createDiario),
    usuario: async.apply(createUsuario)
  }, function(err, results) {
    if (err) throw err;
    createReviews(results.diario, results.usuario, function(err) {
      console.log('> models created sucessfully');
    });
  });

  function createDiario(cb){
    mysqlDs.automigrate('diario', function(err){
      if(err) return cb(err);
    });
  }

  function createUsuario(cb){
    mysqlDs.automigrate('usuario', function(err){
      if(err) return cb(err);
    })
  };
};