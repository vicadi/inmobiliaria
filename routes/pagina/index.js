var express = require('express');
var app = module.exports = express();

var nodemailer = require('nodemailer');

app.set('views',__dirname + '/views');

app.route('/')
.get(function(req, res){
  res.render('index', {
    title : 'Inmobiliaria El Shaddai'
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

app.route('/correo')
.post(function(req,res){
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
    auth: {
      user: "inm.elshaddai@gmail.com",
      pass: "shalom2adonai"
    }
  });
  var mailOptions = {
    from: "Contacto Inmobiliaria El Shaddai<inm.elshaddai@gmail.com>", // sender address
    to: "<inm.elshaddai@gmail.com>", // list of receivers
    subject: req.body.asunto, // Subject line
    text: "Nombre: "+req.body.nombre+"\nMail: "+req.body.email+
      "\nTelefono: "+req.body.telefono+"\nComentario: "+req.body.comentario
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
      }else{
        res.redirect('/');
      }
  }); 
});

app.route('/mapa')
.get(function(req, res){
  res.render('mapa', {
    title : 'Inmobiliaria El Shaddai / Ubicacion'
  });
});