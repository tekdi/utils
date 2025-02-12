const convertIdsToString = (obj) => {
  // Check if the input is an array of integers
  if (Array.isArray(obj) && obj.every(item => typeof item === 'number')) {
    return obj.map(item => item.toString())
  }

  // If not an array or not all elements are numbers, proceed with the existing logic
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(convertIdsToString)
  }

  const relevantKeys = ['id', 'organization_id', 'related_orgs']
  const hasRelevantKeys = relevantKeys.some(key => key in obj)

  if (!hasRelevantKeys) {
    return obj
  }

  return Object.keys(obj).reduce((result, key) => {
    if (relevantKeys.includes(key)) {
      if (key === 'related_orgs' && Array.isArray(obj[key])) {
        result[key] = obj[key].map(item => typeof item === 'number' ? item.toString() : item)
      } else {
        result[key] = typeof obj[key] === 'number' ? obj[key].toString() : obj[key]
      }
    } else {
      result[key] = convertIdsToString(obj[key])
    }
    return result
  }, {})
};

exports.convertIdsToString = convertIdsToString