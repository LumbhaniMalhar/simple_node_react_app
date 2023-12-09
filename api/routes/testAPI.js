var express = require("express");
var router = express.Router();

router.get("/initial", function(req, res, next) {
    res.send("Initial API called successfully");
});

router.get("/subject", function(req, res, next) {
    res.send("Subject Response: 2023F CBD 3324 2 [B108] Containerization and Container Delivery");
});

router.get("/project", function(req, res, next) {
    res.send("Project Response: Project Title: Dockerizing and Orchestrating a Microservices Application.");
});

router.get("/profile", function(req, res, next) {
    res.send("A focused individual with 3.2 years of experience in application support and development within the financial services industry. Highly analytical and coding enthusiast with experience in production support and process improvement via automation solutions.");
});

router.get("/hobbies", function(req, res, next) {
    res.send("My hobbies are to watch f1 and play guitar.");
});

module.exports = router;
