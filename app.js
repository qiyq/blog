/**
 * Created by qiyq on 2017/8/15.
 */
var spawn = require('child_process').spawn;

free = spawn('hexo', ['s']);
/* 其实就是等于执行hexo server -p 4000*/

free.stdout.on('data', function (data) {

    console.log('standard output:\n' + data);

});

free.stderr.on('data', function (data) {

    console.log('standard error output:\n' + data);

});

free.on('exit', function (code, signal) {

    console.log('child process eixt ,exit:' + code);

});
