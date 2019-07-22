var mysql = require('mysql');
const config     = require('../lib/config')();
var connection = mysql.createConnection(config.db);


var Todo = {
    addNew: function (data,callback) {
        return connection.query('insert into todo set ?',[data], callback);
    },

    getAll: function (callback) {
        return connection.query('select * from todo',[], callback);
    },

    getByID: function (id,callback) {
        return connection.query('select * from todo where id=?',[id], callback);
    },
    delete: function (id,callback) {
        return connection.query('delete from todo where id=?',[id], callback);
    },

    update: function (data,id,callback) {
        return connection.query('update todo set ? where id=?',[data,id], callback);
    },

    

};

module.exports = Todo;
