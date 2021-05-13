const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const mongoose = require('mongoose');

const createSpeaker = catchAsync(async (req, res) => {
  await mongoose.connection.db.collection('speaker').insertOne(req.body);
  res.status(httpStatus.CREATED).send({msg: "speaker created successfully", req: req.body});
});

const getSpeaker = catchAsync(async (req, res) => {
    let result = await mongoose.connection.db.collection('speaker').find({}).toArray((error, doc) => {
        res.send({msg: "success", data: doc});
    });
});
  
module.exports = {
  createSpeaker,
  getSpeaker
};
