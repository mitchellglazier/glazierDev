var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var COMMENTS_COLLECTION = "comments";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// catch all route to index.html
app.all("*", (req, res) => {
  console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
  res.status(200).sendFile(index_file);
});

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/test",
  function(err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);

// COMMENTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

/*  "/api/comments"
 *    GET: finds all comments
 *    POST: creates a new Comment
 */

app.get("/api/comments", function(req, res) {
  db.collection(COMMENTS_COLLECTION)
    .find({})
    .toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get comments.");
      } else {
        res.status(200).json(docs);
      }
    });
});

app.post("/api/comments", function(req, res) {
  var newComment = req.body;
  newComment.createDate = new Date();

  if (!req.body.email) {
    handleError(res, "Invalid user input", "Must provide an email.", 400);
  } else {
    db.collection(COMMENTS_COLLECTION).insertOne(newComment, function(
      err,
      doc
    ) {
      if (err) {
        handleError(res, err.message, "Failed to create new Comment.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

/*  "/api/comments/:id"
 *    GET: find comment by id
 *    PUT: update comment by id
 *    DELETE: deletes comment by id
 */

app.get("/api/comments/:id", function(req, res) {
  db.collection(COMMENTS_COLLECTION).findOne(
    { _id: new ObjectID(req.params.id) },
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get comment");
      } else {
        res.status(200).json(doc);
      }
    }
  );
});

app.put("/api/comments/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(COMMENTS_COLLECTION).updateOne(
    { _id: new ObjectID(req.params.id) },
    updateDoc,
    function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update comment");
      } else {
        updateDoc._id = req.params.id;
        res.status(200).json(updateDoc);
      }
    }
  );
});

app.delete("/api/comments/:id", function(req, res) {
  db.collection(COMMENTS_COLLECTION).deleteOne(
    { _id: new ObjectID(req.params.id) },
    function(err, result) {
      if (err) {
        handleError(res, err.message, "Failed to delete comment");
      } else {
        res.status(200).json(req.params.id);
      }
    }
  );
});
