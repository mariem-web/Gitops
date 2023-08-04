// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('esprit2');

// Create a new document in the collection.
db.getCollection('user').insertOne({

});
db.user.insertMany([
    {username: 'mariem', email: 'mariem@esprit.tn' , password: 'f3f60043a224d4a65d60fdf74e43fbbef51c63cf50793d3e60b88002cb565e5e' ,
    "roles": [
        "admin",
        "addRoles"
      ],
      "status": true 
    }])