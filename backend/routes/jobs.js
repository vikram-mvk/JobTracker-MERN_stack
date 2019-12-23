const router = require('express').Router();
let Company = require('../models/jobs.model');

router.route('/').get((req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Company.findByIdAndDelete(req.params.id)
    .then(() => res.json('Job Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Company.findById(req.params.id)
  .then(companies => res.json(companies))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    Company.findById(req.params.id)
      .then(job => {
        job.CompanyName = req.body.CompanyName;
        job.comments = req.body.comments;
        job.date = Date.parse(req.body.date);
  
        job.save()
          .then(() => res.json('Job updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/add').post((req, res) => {
    const CompanyName=req.body.CompanyName;
    const comments=req.body.comments;
    const date = Date.parse(req.body.date);

  const newCompany = new Company({CompanyName,date,comments});  //variable name must match the schema

  newCompany.save()
    .then(() => res.json('New Job application added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

//create and export a router