module.exports.convertToJson = values => {
    return JSON.stringify(values);
};

module.exports = convertToArray = values => {
    return Object.keys(values).map(i => JSON.parse(values[Number(i)]));
}