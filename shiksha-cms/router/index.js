const { passThroughRequester } = require('../utils/requester')
const { orchestrationHandler } = require('../controllers/orchestrationController')
const { customHandler } = require('../controllers/customHandler')
const packageRouter = async (req, res, responses) => {
	let response
	if (req.orchestrated) response = await orchestrationHandler(req, res, responses)
	else if (req.requiresCustomHandling) {
		response = await customHandler(req, res)
	} else response = await passThroughRequester(req, res)
	return response
}

module.exports = packageRouter
