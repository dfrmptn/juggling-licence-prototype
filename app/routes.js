const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches the condition
  if (jugglingBalls === undefined) {
    // Send user to error page
    res.redirect('/juggling-balls-error')
  } else if (jugglingBalls == "3 or more") {
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }
})

router.post('/juggling-trick-answer', function (req, res) {
  var jugglingTrick = req.session.data['juggling-trick']

  if (jugglingTrick == "") {
    res.redirect('/juggling-trick-error')
  } else {
    res.redirect('/check-your-answers')
  }
})

module.exports = router
