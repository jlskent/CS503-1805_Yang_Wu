const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');

const bodyParser = require('body-parser');
// since client is sending data in http body
const jsonParser = bodyParser.json();

/*
get all problems
*/
router.get('/problems', (req,res) => {
    // we respond with a json file
    // after getProblems() is resolved(with .then)
    problemService.getProblems()
        // we take the result obj problems and respond
        .then(problems => res.json(problems));
});

/*
get single problem
*/

// :id means we take the var string from url and save it to var id
router.get('/problems/:id', (req,res) => {
    const id = req.params.id;
    // convert id to int
    problemService.getProblem(+id)
        .then(problem => res.json(problem))
});

/*
add a problem (json parser needed)
*/
router.post('/problems', jsonParser, (req,res) => {
    problemService.addProblem(req.body)
        .then(problem => {
            // typically we return posted item with slight modification
            res.json(problem);
        }, error => {
            res.status(400).send("error adding problem");
        })
});




module.exports = router;

