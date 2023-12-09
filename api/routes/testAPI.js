var express = require("express");
var router = express.Router();

router.get("/initial", function(req, res, next) {
    res.send("Connected with backend server");
});

router.get("/subject", function(req, res, next) {
    res.send("Subject Response: 2023F CBD 3324 2 [B108] Containerization and Container Delivery");
});

router.get("/project", function(req, res, next) {
    res.send("Project Response: Project Title: Dockerizing and Orchestrating a Microservices Application.");
});

module.exports = router;
