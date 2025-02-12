exports.matchPathsAndExtractParams = (pattern, url) => {
  const paramNames = [];
  const regexPattern = new RegExp(
    pattern.replace(/:(\w+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return "([a-zA-Z0-9-]+)";
    })
  );
  const matchResult = url.match(regexPattern);
  if (!matchResult) return false;
  const params = {};
  for (let i = 0; i < paramNames.length; i++) {
    params[paramNames[i]] = matchResult[i + 1];
  }
  return params;
};
