const express = require("express");
const http = require('http');
const mysql = require('mysql2');
const cors = require('cors');
const session = require('express-session');
const fs = require('fs');
const { v4: uuidV4 } = require('uuid'); //making classid
const socketio = require("socket.io");

const fileupload = require("express-fileupload");
const bodyParser = require('body-parser');

const app = express();

app.use(session({
  secret: '_lhvudxs%wfhb-ks2vh1l+_g&y)3rw$338d)ia4j&gf&^e_y-=',
  cookie: { secure: false },
  resave: false,
  saveUninitialized: true
}));
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = socketio(server);

function getRandomInt() {
  return Math.floor(Math.random() * 90000) + 10000;
}

function getRandomInt3() {
  return Math.floor(Math.random() * 900) + 99;
}

io.on('connection', (socket) => {

  socket.on('getElements',({userId,myId,userName}) => {
    io.to(userId).emit('getElements',{Id: myId,userName});
  });

  socket.on('sendElements',({myId, elements}) => {
    io.to(myId).emit('revieveElement',{elements});
  });

  socket.on("send_message", data => {
    io.to(data.socketId).emit("receive_message", data);
  });

  socket.on('onDraw',({userId, data}) => {
    io.to(userId).emit('onDraw',{data});
  });

  socket.on('disconnect',() => {
    console.log('disconnect')
  });

});

app.post('/upload', function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  sampleFile = req.files.file;
  uploadPath = __dirname + '/uploads/' + sampleFile.name;
  sampleFile.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
  });
});

app.get('/uploads/get/:file', function (req, res, next) {
  var filenamewithpath = __dirname + '/uploads/' + req.params.file;
  if (!fs.existsSync(filenamewithpath)) {
    res.status(404).json({ 'message': 'file not found' })
    return;
  }
  res.download(filenamewithpath)
});

server.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});