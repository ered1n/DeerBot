/**
 * Database functions
 */
const mongo = require('mongodb').MongoClient;
const {databaseUrl, databaseName} = require('../config.json');

function mongoInsert(collection, object) {
    mongo.connect(databaseUrl, function(err, db) {
        if (err) throw err;
        const dbo = db.db(databaseName);
        dbo.collection(collection).insertOne(object, function(err, res) {
            if (err) throw err;
            db.close();
        });
    });
}

// TODO: return true/false
function mongoExists(collection, query) {
    mongo.connect(databaseUrl, function(err, db) {
        if (err) throw err;
        var dbo = db.db(databaseName);
        dbo.collection(collection).findOne(query, function(err, result) {
            if (err) throw err;
            db.close(); 
        });
    });
}

//  Adds a server to the database
async function addServer(message) {
    const query = {server_id: message.guild.id}
    await console.log(mongoExists("Server", query));
    mongoInsert("Server", query);
}

//  Adds a user to the database
function addUser(object) {

}

module.exports = {
    addServer: addServer
};