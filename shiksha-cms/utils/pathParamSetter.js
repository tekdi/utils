exports.pathParamSetter = (targetPath, params) => {
	return targetPath.replace(/:\w+/g, (match) => {
		const fieldName = match.substring(1)
		return params[fieldName] || match
	})
}
