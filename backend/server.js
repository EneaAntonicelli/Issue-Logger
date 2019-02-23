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

// Attach endpoints to the server
router.route("/issues").get((req, res) => {
  Issue.find((err, issues) => {
    if (err) console.log("error");
    else res.json(issues);
  });
});

// Middleware attached to default route. Now that it is connected to the default route, it will be instantiated in all other routes.
app.use("/", router);

app.listen(4000, () => console.log("Express server is running on port 4000"));
