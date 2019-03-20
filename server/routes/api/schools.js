const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Validation
const validateSchoolInput = require('../../validation/school');

// Load School Model
const School = require('../../models/School');



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

    schoolFields.std = {};
    if (typeof req.body.first!=='undefined'){
      schoolFields.std.first = req.body.first.split(',');
    } 
    if (typeof req.body.second!=='undefined'){
      schoolFields.std.second = req.body.second.split(',');
    } 
    if (typeof req.body.third!=='undefined'){
      schoolFields.std.third = req.body.third.split(',');
    } 
    if (typeof req.body.fourth!=='undefined'){
      schoolFields.std.fourth = req.body.fourth.split(',');
    } 
    if (typeof req.body.fifth!=='undefined'){
      schoolFields.std.fifth = req.body.fifth.split(',');
    } 
    if (typeof req.body.sixth!=='undefined'){
      schoolFields.std.sixth = req.body.sixth.split(',');
    } 
    if (typeof req.body.seventh!=='undefined'){
      schoolFields.std.seventh = req.body.seventh.split(',');
    } 
    if (typeof req.body.eighth!=='undefined'){
      schoolFields.std.eighth = req.body.eighth.split(',');
    } 
    if (typeof req.body.nineth!=='undefined'){
      schoolFields.std.nineth = req.body.nineth.split(',');
    } 
    if (typeof req.body.tenth!=='undefined'){
      schoolFields.std.tenth = req.body.tenth.split(',');
    } 
    
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