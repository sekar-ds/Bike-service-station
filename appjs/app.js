var mysql = require('mysql');
var http = require('http');
var fs = require('fs');
var nodemailer = require('nodemailer');

var sender = nodemailer.createTransport({
    service:'gmail',
    auth : {
        user: 'tdhanasekaran917@gmail.com',
        pass : '9087087688',
    }
});

var composemail = {
    from : 'tdhanasekaran917@gmail.com',
    to :'sriram@gmail.com,person2@gmail.com',
    subject: 'send mail using node js',
    html: '<h1>welcome the page</h1>'
};

sender.sendMail(composemail,function(err,info){
    if(err) {
        console.log(err);
    }
    else{
        console.log('mail send successfully' + info.response);
    }
})


var server =http.createserver(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{'content-type':'text/plain'});
    var myReadstream = fs.createReadstream(_dirname +'index.html','utf8');
    myReadstream.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log('yo dawgs now listening to port 3000')
                                                                                                                                                                                                                                   con
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Sekaran9087",
    database:"DSservice",
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql ="insert into students (student_id,student_name,student_city)values (1.'dhana','chennai')";
    con.query("create table students (students_id int, student_name varchar(200),student_city varchar(200))",function(err,result){
        if(err) throw err;
        console.log("database created");
        con.query(sql,function(err,result){
            if(err) throw err;
            console.log("table insert")
        })
        var sql ="select * from students";
        con.query(sql,function(err,result){
            if(err) throw err;
            console.log(result);
        })
    });
});

