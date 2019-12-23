const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobsSchema = new Schema({
  CompanyName: {
    type: String,
    required: true,
    trim: true,
  },
  comments:{},
date:{type: Date, required:true}
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobsSchema);

module.exports = Job;

//we need to create and export a mongoose model, for which we first need a schema