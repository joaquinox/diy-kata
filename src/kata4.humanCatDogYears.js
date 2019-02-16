const humanCatDogYears = (number) => {
    const result = [number];
    
    if (number <= 1) {
        result.push(15);
    }
    if (number <= 2) {
        result.push(24); 
    }
    if (number > 2) {
        result.push((number - 2) * 4 + 24);
    }
    if (number <= 1) {
        result.push(15);
    }
    if (number <= 2) {
        result.push(24); 
    }
    if (number > 2) {
        result.push((number - 2) * 5 + 24);
    }
    return result;
}

module.exports = humanCatDogYears;
