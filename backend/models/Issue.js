import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Issue = new Schema({
  title: {
    type: String
  },
  responsible: {
    type: String
  },
  description: {
    type: String
  },
  severity: {
    type: String
  },
  status: {
    type: String,
    default: "Open"
  }
});

// Here we create the model and export it. We crearte a model with name 'Issue' and we then attach the 'Issue' Schema to it.
export default mongoose.model("Issue", Issue);
