const routesConfig = require("../constants/routes");
const cmsController = require("./cms");

const customHandler = async (req, res) => {
  const selectedRouteConfig = routesConfig.routes.find(
    (obj) => obj.sourceRoute === req.sourceRoute
  );
  return await cmsController[selectedRouteConfig.targetRoute.functionName](
    req,
    res,
    selectedRouteConfig
  );
};

const customHandlerController = {
  customHandler,
};
module.exports = customHandlerController;
