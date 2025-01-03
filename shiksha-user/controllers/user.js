const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
// const {convertIdsToString} = require('../utils/integerToStringConverter')

const createUser = async (req) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body,req.headers)
}
 
const userController = {
	createUser
}

module.exports = userController