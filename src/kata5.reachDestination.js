const reachDestination = (distance, speed) => {
    const roundHalf = (n) => {
        return Math.ceil(n*2)/2;
        }
    const time = distance / speed;
    const ETA = roundHalf(time);
    return 'I should be there in ' + ETA + ' hours';
}

module.exports = reachDestination;
