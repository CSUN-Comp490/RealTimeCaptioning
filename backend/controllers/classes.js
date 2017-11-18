"use strict";
const _ = require("underscore");
const ClassModel = require("../models/class");
let ClassController = {};

// Storing classes.
ClassController.storeCourse = (req, res) => {
  let course = new ClassModel(req.body);
  let createCourse_Promise = course.save();

  createCourse_Promise
    .then(course => {
      return res.status(201).json(course);
    })
    .catch(err => {
      const DUPLICATE_KEY = 11000;
      return err.code === DUPLICATE_KEY
        ? res.status(400).json(err.errmsg)
        : res.status(500).json(err.errmsg);
    });
};

// Retrieving classes.
ClassController.getAllCourses = (req, res) => {
  let getAllCourses_Promise = ClassModel.find({}).exec();
  getAllCourses_Promise
    .then(courses => {
      return res.status(200).json(courses);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

ClassController.getCourseById = (req, res) => {
  let CourseID = req.params.id;
  let getCourseById_Promise = ClassModel.findById(courseID).exec();

  getCourseById_Promise
    .then(course => {
      return course
        ? res.status(200).json(course)
        : res
            .status(404)
            .json({ error: `Can not find course with id: ${courseID}` });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};

// Updating courses.
ClassController.updateCourseById = (req, res) => {
  let courseID = req.params.id;
  let updateCourseById_Promise = ClassModel.findById(courseID).exec();
  updateCourseById_Promise
    .then(course => {
      _.extend(course, req.body);
      return course.save();
    })
    .then(course => {
      return res.status(201).json(course);
    })
    .catch(err => {
      return res.status(500).json({ error: err.message });
    });
};

// Destroying courses.
ClassController.destroyById = (req, res) => {
  let courseID = req.params.id;
  let findByIdAndRemove_Promise = ClassModel.findByIdAndRemove(courseID).exec();

  findByIdAndRemove_Promise
    .then(course => {
      return course
        ? res.status(201).json(course)
        : res
            .status(404)
            .json({ error: `No course found with id: ${courseID}` });
    })
    .catch(err => {
      console.log("Error: " + err.message);
      return res.status(500).json({ error: err.message });
    });
};

module.exports = ClassController;
