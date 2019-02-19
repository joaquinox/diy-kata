const joinNames = (namesObj) => {
    const getNames = namesObj.map(person => person.name);
    let namesInAString = '';

    if (getNames.length === 1) {
        namesInAString = getNames[0];
    }

    if (getNames.length === 2) {
        namesInAString = getNames.join(' & ');
    }

    if (getNames.length > 2) {
        namesInAString = getNames.slice(0, -1).join(', ') + ' & ' + getNames.slice(-1);
    }

    return namesInAString;
}


module.exports = joinNames;
