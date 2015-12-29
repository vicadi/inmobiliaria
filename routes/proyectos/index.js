var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/condominioelshaddai')
.get(function(req, res){
  res.render('condominio_el_shaddai', {
    title : 'Inmobiliaria El Shaddai / Condominio El Shaddai'
  });
});