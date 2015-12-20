var express = require('express');
var app = module.exports = express();

app.set('views',__dirname + '/views');

app.route('/')
.get(function(req, res){
  res.render('index', {
    title : 'Inmobiliaria El Shaddai / Inicio'
  });
});

app.route('/sobreNosotros')
.get(function(req, res){
  res.render('sobreNosotros', {
    title : 'Inmobiliaria El Shaddai / Sobre Nosotros'
  });
});

app.route('/proyectos')
.get(function(req, res){
  res.render('proyectos', {
    title : 'Inmobiliaria El Shaddai / Proyectos'
  });
});

app.route('/servicios')
.get(function(req, res){
  res.render('servicios', {
    title : 'Inmobiliaria El Shaddai / Servicios'
  });
});

app.route('/contacto')
.get(function(req, res){
  res.render('contacto', {
    title : 'Inmobiliaria El Shaddai / Contacto'
  });
});