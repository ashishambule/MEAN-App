const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateSchoolInput = require('../../validation/school');

// Load School Model
const School = require('../../models/School');
// Load User Model
const User = require('../../models/User');

router.post(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const {
      errors,
      isValid
    } = validateSchoolInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const schoolFields = {};
    schoolFields.user = req.user.id;
    if (req.body.schoolName) schoolFields.schoolName = req.body.schoolName;
    if (req.body.location) schoolFields.location = req.body.location;

    // Std
    schoolFields.std = {};
    if (req.body.first) schoolFields.std.first = req.body.first;
    if (req.body.second) schoolFields.std.second = req.body.second;
    if (req.body.third) schoolFields.std.third = req.body.third;
    if (req.body.fourth) schoolFields.std.fourth = req.body.fourth;
    if (req.body.fifth) schoolFields.std.fifth = req.body.fifth;
    if (req.body.sixth) schoolFields.std.sixth = req.body.sixth;
    if (req.body.seventh) schoolFields.std.seventh = req.body.seventh;
    if (req.body.eighth) schoolFields.std.eighth = req.body.eighth;
    if (req.body.nineth) schoolFields.std.nineth = req.body.nineth;
    if (req.body.tenth) schoolFields.std.tenth = req.body.tenth;


    School.findOne({
      user: req.user.id
    }).then(school => {
      if (school) {
        // Update
        School.findOneAndUpdate({
          user: req.user.id
        }, {
          $set: schoolFields
        }, {
          new: true
        }).then(school => res.json(school));
      } else {
        // Create

        // Check if SchoolName exists
        School.findOne({
          schoolName: schoolFields.schoolName
        }).then(school => {
          if (school) {
            errors.schoolName = 'That schoolName already exists';
            res.status(400).json(errors);
          }

          // Save School
          new School(schoolFields).save().then(school => res.json(school));
        });
      }
    });
  }
);


// @route   GET api/school
// @desc    Get current users school
// @access  Private
router.get('/', passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const errors = {};

    School.findOne({
        user: req.user.id
      })
      .then(school => {
        if (!school) {
          errors.noschool = 'There is no school for this user';
          return res.status(404).json(errors);
        }
        res.json(school);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/school/user/:user_id
// @desc    Get school by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};

  School.findOne({
      user: req.params.user_id
    })
    .then(school => {
      if (!school) {
        errors.noschool = 'There is no school for this user';
        res.status(404).json(errors);
      }

      res.json(school);
    })
    .catch(err =>
      res.status(404).json({
        school: 'There is no school for this user'
      })
    );
});

module.exports = router;