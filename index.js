var app = require('express') (); 
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/' , function(req, res) { 
 res.sendFile(__dirname +'/index.html');
}); 

io.on('connection', function(socket) { 
    console.log('Подключился пользователь'); 
    socket.on('disconnect', function() {
        console.log('Отключился пользователь');
    }); 
    
    socket.on('chat message', function(msg) { 
        io.emit('chat message', msg);
        console.log('Пришло сообщение: ' + msg);      
   });
});
http.listen(3000, '0.0.0.0',  function( ) { 
  console.log('Слушаем на *:3000');
});