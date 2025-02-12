const _ = require('lodash')

exports.transformUpdateUserBody = (requestBody) => {
	const allowedKeys = ['name', 'email', 'image', 'location', 'about', 'preferred_language']
	return _.pick(requestBody, allowedKeys)
}
