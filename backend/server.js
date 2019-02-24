// Create a server using express
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import Issue from "./models/Issue";

const app = express();
const router = express.Router();

// app.use simply instantiates the middleware this particular application will be using. Cors is one such middleware.
app.use(cors());
// the body date we will get from the requests are in json format; thus the .json is used.
app.use(bodyParser.json());

// connect to the MongoDB database using mongoose
mongoose.connect("");

// Establish the connection
const connection = mongoose.connection;

// Establish a one time event that will be fired upon connecting to MongoDB
connection.once("open", () => {
  console.log("MongoDB database connection has been established successfully.");
});

// Attach endpoints to the server and use the mongoose model to send the request to the database
router.route("/issues").get((req, res) => {
  Issue.find((err, issues) => {
    if (err) console.log("error");
    else res.json(issues);
  });
});
// Retreive a single issue from the database
router.route("/issues/:id").get((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err) console.log(err);
    else res.json(issue);
  });
});

router.route("/issues/add").post((req, res) => {
  let issue = new Issue(req.body);
  issue
    .save()
    .then(issue => {
      res.status(200).json({ issue: "Added Successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to create a new record");
    });
});

router.route("/issues/update/:id").post(req, res => {
  Issue.findById(req.params.id, (err, issue) => {
    if (!issue) return next(new Error("Could not load your document"));
    else issue.title = req.body.title;
    issue.responsible = req.body.responsible;
    issue.description = req.body.description;
    issue.severity = req.body.severity;
    issue.status = req.body.status;

    issue
      .save()
      .then(issue => {
        res.json("Update complete");
      })
      .catch(err => {
        res.status(400).send("Update failed");
      });
  });
});

router.route("/issues/delete/:id").get((req, res) => {
  Issue.findByIdAndRemove({ _id: req.params.id }, (err, issue) => {
    if (err) res.json(err);
    else res.json("Issue removed successfully");
  });
});

// Middleware attached to default route. Now that it is connected to the default route, it will be instantiated in all other routes.
app.use("/", router);

app.listen(4000, () => console.log("Express server is running on port 4000"));
