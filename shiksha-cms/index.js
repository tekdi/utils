const express = require("express");
const router = express.Router();
const routes = require("./constants/routes");
const packageRouter = require("./router");

// const getDependencies = () => {
// 	return ['kafka', 'kafka-connect', 'redis']
// }

const getPackageMeta = () => {
  return {
    basePackageName: "cms",
    packageName: "shiksha-cms",
  };
};

const createPackage = (options) => {
  return {
    router: () => {
      console.log("router");
    },
    endpoints: [],
    dependencies: [],
  };
};

router.get("/", (req, res) => {
  res.send("Hello, world! From package");
});

module.exports = {
  // dependencies: getDependencies(),
  routes,
  createPackage,
  packageMeta: getPackageMeta(),
  packageRouter,
};
