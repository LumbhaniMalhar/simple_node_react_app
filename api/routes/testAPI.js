var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/initial", function(req, res, next) {
    res.send("Connected with backend server");
});

router.get("/subject", function(req, res, next) {
    res.send("Subject Response: 2023F CBD 3324 2 [B108] Containerization and Container Delivery");
});

router.get("/project", function(req, res, next) {
    res.send("Project Response: Project Title: Dockerizing and Orchestrating a Microservices Application.");
});

router.get("/toronto", async (req, res, next) => {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m&hourly=temperature_2m");
        const data = await response.json();
        const currentTemp = data?.current?.temperature_2m;

        res.json(currentTemp);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/jalandhar", async (req, res, next) => {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=31.3256&longitude=75.5792&current=temperature_2m&hourly=temperature_2m");
        const data = await response.json();
        const currentTemp = data?.current?.temperature_2m;

        res.json(currentTemp);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
