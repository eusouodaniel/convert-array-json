function convertToArray(values) {
    var result = [];
    for(var i in values)
        result.push([i, values[i]]);

    return JSON.stringify(result);
}

function convertToJson(values) {
    return JSON.stringify(values);
}

module.exports = {
    convertToArray,
    convertToJson
}